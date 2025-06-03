"use client";

import { useState } from "react";
import { participateData, socialLinks } from "../../data";
import Modal from "../common/Modal";

const Participate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="participate" className="py-20 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-black mb-4">
              How to Participate
            </h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Eligibility Criteria */}
            <div className="bg-brand-primary p-8 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-white mb-6">
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {participateData.criteria.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-neutral-white flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-neutral-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-brand-primary p-8 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-white mb-6">
                What You Get
              </h3>
              <ul className="space-y-4">
                {participateData.benefits.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-neutral-white flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8 8-4-4"
                      />
                    </svg>
                    <span className="text-neutral-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration Steps */}
            <div className="bg-brand-primary p-8 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-white mb-6">
                Registration Steps
              </h3>
              <ul className="space-y-4">
                {participateData.steps.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-neutral-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-primary text-sm font-medium">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-neutral-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-primary hover:bg-brand-light text-neutral-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-neutral-black mb-4">
            Registration Coming Soon!
          </h3>
          <p className="text-neutral-gray mb-8">
            Registration Link Will Be Opened Soon. Stay Tuned With Us For
            Further Updates
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-light transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-light transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-light transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Participate;
