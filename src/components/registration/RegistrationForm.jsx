import { useRouter } from "next/navigation";
import React, { useState } from "react";
import RegistrationSuccessModal from "./RegistrationSuccessModal";

const RegistrationForm = ({ onClose }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    projectIdea: "",
    projectIdeaFull: "",
    members: [
      { name: "", email: "", phone: "", role: "", photo: null },
      { name: "", email: "", phone: "", role: "", photo: null },
      { name: "", email: "", phone: "", role: "", photo: null },
    ],
  });

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setFormData({ ...formData, members: updatedMembers });
  };

  const handlePhotoChange = async (index, file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "dwc_photos");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dwcdigital/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      handleMemberChange(index, "photo", data.secure_url);
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Team Name
          </label>
          <input
            type="text"
            required
            value={formData.teamName}
            onChange={(e) =>
              setFormData({ ...formData, teamName: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Project Idea (Brief)
          </label>
          <textarea
            required
            value={formData.projectIdea}
            onChange={(e) =>
              setFormData({ ...formData, projectIdea: e.target.value })
            }
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Project Idea (Full)
          </label>
          <textarea
            required
            value={formData.projectIdeaFull}
            onChange={(e) =>
              setFormData({ ...formData, projectIdeaFull: e.target.value })
            }
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">Team Members</h3>
          {formData.members.map((member, index) => (
            <div key={index} className="space-y-4 p-4 border rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={member.name}
                    onChange={(e) =>
                      handleMemberChange(index, "name", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={member.email}
                    onChange={(e) =>
                      handleMemberChange(index, "email", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={member.phone}
                    onChange={(e) =>
                      handleMemberChange(index, "phone", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <input
                    type="text"
                    required
                    value={member.role}
                    onChange={(e) =>
                      handleMemberChange(index, "role", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Photo
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={(e) =>
                      handlePhotoChange(index, e.target.files[0])
                    }
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-primary file:text-white
                      hover:file:bg-primary/90"
                  />
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={`${member.name}'s photo`}
                      className="mt-2 h-20 w-20 object-cover rounded-md"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </button>
        </div>
      </form>

      <RegistrationSuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
      />
    </>
  );
};

export default RegistrationForm;
