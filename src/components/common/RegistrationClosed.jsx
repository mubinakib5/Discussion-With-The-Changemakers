import React from "react";

const RegistrationClosed = ({ onClose }) => {
  return (
    <div className="text-center p-8 max-w-md mx-auto">
      <div className="mb-6">
        <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Registration Closed
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest! Registration for this event has now
          closed.
        </p>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
        >
          Close
        </button>
      )}
    </div>
  );
};

export default RegistrationClosed;
