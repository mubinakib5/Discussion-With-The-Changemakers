"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { participateData } from "../../data";
import { opportunityBenefits } from "../../data/index.js";
import Modal from "../common/Modal";
import RulebookModal from "../common/RulebookModal";
import TeamRegistrationForm from "../common/TeamRegistrationForm";

const Participate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRulebookModalOpen, setIsRulebookModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // opportunityBenefits array is now imported from data/index.js

  const handleRegisterClick = () => {
    setIsRulebookModalOpen(true);
  };

  const handleProceedToRegister = () => {
    setIsRulebookModalOpen(false);
    setIsModalOpen(true);
  };

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

            {/* Team Formation */}
            <div className="bg-brand-primary p-8 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-white mb-6">
                Team Formation
              </h3>
              <ul className="space-y-4">
                {participateData.teams.map((item, index) => (
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center mt-20 mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-black mb-4">
              Prize Pool
            </h3>
            <div className="w-16 h-1 bg-brand-primary mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {opportunityBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-brand-primary text-white rounded-lg p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 max-w-lg mx-auto"
              >
                <div className="w-16 h-16 text-white mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-medium mb-3">{benefit.title}</h3>
                {benefit.description && (
                  <p className="text-white/90 text-lg">{benefit.description}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-20">
            <button
              onClick={handleRegisterClick}
              className="bg-brand-primary hover:bg-brand-light text-neutral-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Rulebook Modal */}
      <RulebookModal
        isOpen={isRulebookModalOpen}
        onClose={() => setIsRulebookModalOpen(false)}
        onProceed={handleProceedToRegister}
      />

      {/* Registration Form Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TeamRegistrationForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Participate;
