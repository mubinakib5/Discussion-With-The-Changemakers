import { useRouter } from "next/navigation";
import { useState } from "react";
import SuccessModal from "./SuccessModal";

const initialMember = (type) =>
  type === "university"
    ? { name: "", dept: "", id: "", photo: null, photoUrl: "" }
    : { name: "", profession: "", nid: "", photo: null, photoUrl: "" };

const TeamRegistrationForm = ({ onClose }) => {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([
    initialMember("university"),
    initialMember("university"),
    initialMember("university"),
    initialMember("university"),
    initialMember("university"),
  ]);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [contact2, setContact2] = useState("");
  const [idea, setIdea] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [reference, setReference] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [showResultModal, setShowResultModal] = useState(false);
  const [resultType, setResultType] = useState(null); // 'success' or 'error'
  const [resultMessage, setResultMessage] = useState("");

  // Cloudinary upload
  const uploadPhoto = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "dwc_team_reg");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dwug6ceyg/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data.secure_url;
  };

  const handleMemberChange = (idx, field, value) => {
    setMembers((prev) => {
      const updated = [...prev];
      updated[idx][field] = value;
      return updated;
    });
  };

  const handlePhotoChange = async (idx, file) => {
    handleMemberChange(idx, "photo", file);
    if (file) {
      const url = await uploadPhoto(file);
      handleMemberChange(idx, "photoUrl", url);
    }
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setMembers([
      initialMember(cat),
      initialMember(cat),
      initialMember(cat),
      initialMember(cat),
      initialMember(cat),
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const filteredMembers = members.filter((m) => m.name);
      const payload = {
        teamName,
        category,
        universityName: category === "university" ? universityName : undefined,
        members: filteredMembers.map((m) => ({
          ...m,
          photo: m.photoUrl,
          photoUrl: undefined,
        })),
        email,
        contact,
        contact2,
        idea,
        payment: paymentMethod
          ? {
              method: paymentMethod,
              transactionId,
              reference,
            }
          : null,
      };
      const res = await fetch("/api/register-team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to register");
      setSuccess(true);
      setResultType("success");
      setResultMessage("Registration Successful!");
      setShowResultModal(true);
    } catch (err) {
      setError(err.message);
      setResultType("error");
      setResultMessage("Registration Failed!");
      setShowResultModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-semibold">Team Name *</label>
          <input
            required
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary w-full"
          />
        </div>
        <div>
          <label className="font-semibold">Team Category *</label>
          <div className="flex gap-4 mt-1">
            <label>
              <input
                type="radio"
                name="category"
                value="university"
                checked={category === "university"}
                onChange={() => handleCategoryChange("university")}
              />{" "}
              University
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="nonuniversity"
                checked={category === "nonuniversity"}
                onChange={() => handleCategoryChange("nonuniversity")}
              />{" "}
              Non University/Startup
            </label>
          </div>
        </div>
        {category === "university" && (
          <div>
            <label className="font-semibold">University Name *</label>
            <input
              required
              value={universityName}
              onChange={(e) => setUniversityName(e.target.value)}
              className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary w-full"
            />
          </div>
        )}
        {category && (
          <div className="space-y-2">
            {[0, 1, 2, 3, 4].map((idx) => (
              <div key={idx} className="border p-2 rounded">
                <div className="font-semibold">
                  {idx === 0 ? "Team Leader" : `Team Member ${idx}`}
                  {idx < 3 ? " *" : " (optional)"}
                </div>
                <div className="flex flex-wrap gap-2">
                  <input
                    required={idx < 3}
                    placeholder="Name"
                    value={members[idx].name}
                    onChange={(e) =>
                      handleMemberChange(idx, "name", e.target.value)
                    }
                    className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary min-w-[200px] flex-grow"
                  />
                  {category === "university" ? (
                    <>
                      <input
                        required={idx < 3}
                        placeholder="Dept"
                        value={members[idx].dept}
                        onChange={(e) =>
                          handleMemberChange(idx, "dept", e.target.value)
                        }
                        className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary"
                      />
                      <input
                        required={idx < 3}
                        placeholder="ID"
                        value={members[idx].id}
                        onChange={(e) =>
                          handleMemberChange(idx, "id", e.target.value)
                        }
                        className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary"
                      />
                    </>
                  ) : (
                    <>
                      <input
                        placeholder="Profession (if any)"
                        value={members[idx].profession}
                        onChange={(e) =>
                          handleMemberChange(idx, "profession", e.target.value)
                        }
                        className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary"
                      />
                      <input
                        required={idx < 3}
                        placeholder="NID"
                        value={members[idx].nid}
                        onChange={(e) =>
                          handleMemberChange(idx, "nid", e.target.value)
                        }
                        className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary"
                      />
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    required={idx < 3}
                    onChange={(e) => handlePhotoChange(idx, e.target.files[0])}
                    className="file-input"
                  />
                  {members[idx].photoUrl && (
                    <img
                      src={members[idx].photoUrl}
                      alt="photo"
                      className="h-10 w-10 object-cover rounded-full"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        <div>
          <label className="font-semibold">Email (Team Leader) *</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary w-full"
          />
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="font-semibold">
              Contact Number (Team Leader) *
            </label>
            <input
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary w-full"
            />
          </div>
          <div className="flex-1">
            <label className="font-semibold">Contact Number (Secondary)</label>
            <input
              value={contact2}
              onChange={(e) => setContact2(e.target.value)}
              className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary w-full"
            />
          </div>
        </div>
        <div>
          <label className="font-semibold">Short Brief About Your Idea *</label>
          <textarea
            required
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="textarea textarea-bordered border-2 border-neutral-300 focus:border-brand-primary w-full"
            rows={4}
          />
        </div>
        <div>
          <label className="font-semibold">Payment Method</label>
          <div className="flex gap-4 mt-1">
            <label>
              <input
                type="radio"
                name="payment"
                value="bkash"
                checked={paymentMethod === "bkash"}
                onChange={() => setPaymentMethod("bkash")}
              />{" "}
              Bkash
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="nagad"
                checked={paymentMethod === "nagad"}
                onChange={() => setPaymentMethod("nagad")}
              />{" "}
              Nagad
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="rocket"
                checked={paymentMethod === "rocket"}
                onChange={() => setPaymentMethod("rocket")}
              />{" "}
              Rocket
            </label>
          </div>
        </div>
        {paymentMethod && (
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="font-semibold">Transaction ID *</label>
              <input
                required
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary w-full"
              />
            </div>
            <div className="flex-1">
              <label className="font-semibold">Reference (Team Name)</label>
              <input
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                className="input input-bordered border-2 border-neutral-300 focus:border-brand-primary w-full"
              />
            </div>
          </div>
        )}
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="btn bg-brand-primary text-white hover:bg-brand-light border-none w-full rounded-full py-3"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
      <SuccessModal
        isOpen={showResultModal}
        type={resultType}
        message={resultMessage}
        onClose={() => {
          setShowResultModal(false);
          if (onClose) onClose();
          router.push("/");
        }}
      />
    </>
  );
};

export default TeamRegistrationForm;
