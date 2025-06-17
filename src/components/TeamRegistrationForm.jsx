import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaUpload } from "react-icons/fa";

const TeamRegistrationForm = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/register-team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setShowSuccessModal(true);
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccessModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Registration Successful!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for registering your team. We will review your
              application and get back to you soon.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => router.push("/")}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Continue
              </button>
              <button
                onClick={onClose}
                className="w-full border border-primary text-primary py-3 px-6 rounded-lg hover:bg-primary/10 transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Team Registration
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Team Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Team Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Name *
                </label>
                <input
                  type="text"
                  {...register("teamName", {
                    required: "Team name is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
                {errors.teamName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.teamName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  University/Institution *
                </label>
                <input
                  type="text"
                  {...register("university", {
                    required: "University is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
                {errors.university && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.university.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Team Members
            </h3>
            {[1, 2, 3].map((memberNum) => (
              <div
                key={memberNum}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Member {memberNum} Name *
                  </label>
                  <input
                    type="text"
                    {...register(`member${memberNum}Name`, {
                      required: `Member ${memberNum} name is required`,
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  {errors[`member${memberNum}Name`] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[`member${memberNum}Name`].message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Member {memberNum} Email *
                  </label>
                  <input
                    type="email"
                    {...register(`member${memberNum}Email`, {
                      required: `Member ${memberNum} email is required`,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  {errors[`member${memberNum}Email`] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[`member${memberNum}Email`].message}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Team Photo */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Team Photo</h3>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FaUpload className="w-8 h-8 mb-4 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG or JPEG (MAX. 2MB)
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  {...register("teamPhoto", {
                    required: "Team photo is required",
                  })}
                  className="hidden"
                />
              </label>
            </div>
            {errors.teamPhoto && (
              <p className="mt-1 text-sm text-red-600">
                {errors.teamPhoto.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamRegistrationForm;
