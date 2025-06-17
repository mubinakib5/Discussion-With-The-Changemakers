import { useRouter } from "next/navigation";

const SuccessModal = ({ isOpen, type, message, onClose }) => {
  const router = useRouter();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
        <div
          className="mx-auto flex items-center justify-center h-12 w-12 rounded-full mb-4"
          style={{
            backgroundColor: type === "success" ? "#D1FAE5" : "#FECACA",
          }}
        >
          {type === "success" ? (
            <svg
              className="h-6 w-6 text-green-600"
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
          ) : (
            <svg
              className="h-6 w-6 text-red-600"
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
          )}
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{message}</h3>
        <p className="text-sm text-gray-500 mb-6">
          We've received your registration. We'll shortly confirm the
          registration.
        </p>
        <button
          onClick={() => {
            onClose();
            router.push("/");
          }}
          className="w-full bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-light transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
