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
      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
        {/* Team Information Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Team Information
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Team Name *
              </label>
              <input
                required
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                placeholder="Enter your team name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Team Category *
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="university"
                    checked={category === "university"}
                    onChange={() => handleCategoryChange("university")}
                    className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                  />
                  <span className="text-sm text-gray-700">University</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="nonuniversity"
                    checked={category === "nonuniversity"}
                    onChange={() => handleCategoryChange("nonuniversity")}
                    className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                  />
                  <span className="text-sm text-gray-700">
                    Non University/Startup
                  </span>
                </label>
              </div>
            </div>

            {category === "university" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  University Name *
                </label>
                <input
                  required
                  value={universityName}
                  onChange={(e) => setUniversityName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="Enter university name"
                />
              </div>
            )}
          </div>
        </div>

        {/* Team Members Section */}
        {category && (
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Team Members
            </h3>

            <div className="space-y-6">
              {[0, 1, 2, 3, 4].map((idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                >
                  <div className="font-semibold text-gray-900 mb-3">
                    {idx === 0 ? "Team Leader" : `Team Member ${idx}`}
                    {idx < 3 ? " *" : " (optional)"}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                    <input
                      required={idx < 3}
                      placeholder="Name"
                      value={members[idx].name}
                      onChange={(e) =>
                        handleMemberChange(idx, "name", e.target.value)
                      }
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                    />

                    {category === "university" ? (
                      <>
                        <input
                          required={idx < 3}
                          placeholder="Department"
                          value={members[idx].dept}
                          onChange={(e) =>
                            handleMemberChange(idx, "dept", e.target.value)
                          }
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                        />
                        <input
                          required={idx < 3}
                          placeholder="Student ID"
                          value={members[idx].id}
                          onChange={(e) =>
                            handleMemberChange(idx, "id", e.target.value)
                          }
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                        />
                      </>
                    ) : (
                      <>
                        <input
                          placeholder="Profession (if any)"
                          value={members[idx].profession}
                          onChange={(e) =>
                            handleMemberChange(
                              idx,
                              "profession",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                        />
                        <input
                          required={idx < 3}
                          placeholder="NID"
                          value={members[idx].nid}
                          onChange={(e) =>
                            handleMemberChange(idx, "nid", e.target.value)
                          }
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                        />
                      </>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 items-start">
                    <input
                      type="file"
                      accept="image/*"
                      required={idx < 3}
                      onChange={(e) =>
                        handlePhotoChange(idx, e.target.files[0])
                      }
                      className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors file:mr-4 file:py-1 file:px-3 file:border-0 file:rounded-md file:text-sm file:font-semibold file:bg-brand-primary file:text-white hover:file:bg-brand-light"
                    />
                    {members[idx].photoUrl && (
                      <img
                        src={members[idx].photoUrl}
                        alt="Member photo"
                        className="h-12 w-12 object-cover rounded-full border-2 border-gray-300"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Information Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Contact Information
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email (Team Leader) *
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                placeholder="Enter email address"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Number (Team Leader) *
                </label>
                <input
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="Enter contact number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Number (Secondary)
                </label>
                <input
                  value={contact2}
                  onChange={(e) => setContact2(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="Enter secondary contact"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Idea Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Project Information
          </h3>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Short Brief About Your Idea *
            </label>
            <textarea
              required
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors resize-vertical"
              rows={4}
              placeholder="Describe your project idea briefly..."
            />
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Payment Information
          </h3>

          {/* Payment Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-800 font-medium">
              You need to send money to{" "}
              <span className="font-bold">+8801869613804</span> for Bkash, Nagad
              and <br />
              <span className="font-bold">+8801869613804</span> for Rocket
              (Personal) <span className="font-bold">BDT. 300</span> for
              completing registration.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Payment Method *
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="bkash"
                    checked={paymentMethod === "bkash"}
                    onChange={() => setPaymentMethod("bkash")}
                    className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                  />
                  <span className="text-sm text-gray-700">Bkash</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="nagad"
                    checked={paymentMethod === "nagad"}
                    onChange={() => setPaymentMethod("nagad")}
                    className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                  />
                  <span className="text-sm text-gray-700">Nagad</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="rocket"
                    checked={paymentMethod === "rocket"}
                    onChange={() => setPaymentMethod("rocket")}
                    className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                  />
                  <span className="text-sm text-gray-700">Rocket</span>
                </label>
              </div>
            </div>

            {paymentMethod && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Transaction ID *
                  </label>
                  <input
                    required
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="Enter transaction ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reference (Team Name)
                  </label>
                  <input
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="Enter reference"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-brand-primary text-white hover:bg-brand-light border-none px-8 py-3 rounded-lg font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </div>
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
