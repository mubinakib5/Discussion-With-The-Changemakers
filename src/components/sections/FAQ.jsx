"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { faqData } from "../../data";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="faq" className="py-20 bg-neutral-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-black mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-gray mb-6 sm:mb-8">
            Everything you need to know about the event
          </p>
          <div className="w-16 sm:w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="space-y-3 sm:space-y-4"
        >
          <LayoutGroup>
            {faqData.map((section, sectionIdx) => (
              <div key={sectionIdx} className="space-y-6">
                <h2 className="text-xl text-center sm:text-2xl font-semibold text-brand-primary mb-4">
                  {section.section}
                </h2>

                {section.items.map((faq, index) => {
                  const itemKey = `${sectionIdx}-${index}`;

                  return (
                    <motion.div
                      key={itemKey}
                      variants={itemVariants}
                      layout
                      className={`bg-neutral-white border-2 border-brand-primary rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 ${
                        openIndex === itemKey
                          ? "shadow-lg"
                          : "hover:border-brand-light"
                      }`}
                    >
                      <motion.button
                        className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/20 touch-manipulation"
                        onClick={() => toggleQuestion(itemKey)}
                        whileHover={{
                          backgroundColor: "rgba(0, 0, 0, 0.02)",
                        }}
                        transition={{ duration: 0.2 }}
                        layout="position"
                        aria-expanded={openIndex === itemKey}
                      >
                        <span className="text-base sm:text-lg font-medium text-neutral-black flex-1 pr-4">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{
                            rotate: openIndex === itemKey ? 180 : 0,
                            scale: openIndex === itemKey ? 1.1 : 1,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.32, 0.72, 0, 1],
                          }}
                          className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary flex-shrink-0"
                        >
                          <svg
                            className="w-full h-full"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </motion.button>

                      <AnimatePresence mode="sync">
                        {openIndex === itemKey && (
                          <motion.div
                            layout
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: {
                                height: "auto",
                                opacity: 1,
                                transition: {
                                  height: {
                                    duration: 0.35,
                                    ease: [0.32, 0.72, 0, 1],
                                  },
                                  opacity: {
                                    duration: 0.2,
                                    delay: 0.1,
                                  },
                                },
                              },
                              collapsed: {
                                height: 0,
                                opacity: 0,
                                transition: {
                                  height: {
                                    duration: 0.35,
                                    ease: [0.32, 0.72, 0, 1],
                                  },
                                  opacity: {
                                    duration: 0.2,
                                  },
                                },
                              },
                            }}
                            className="overflow-hidden bg-neutral-white"
                          >
                            <motion.div
                              initial={{ y: -10, opacity: 0 }}
                              animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                  duration: 0.35,
                                  ease: [0.32, 0.72, 0, 1],
                                  delay: 0.05,
                                },
                              }}
                              exit={{
                                y: -10,
                                opacity: 0,
                                transition: {
                                  duration: 0.2,
                                  ease: [0.32, 0.72, 0, 1],
                                },
                              }}
                              className="px-4 sm:px-6 pb-4 sm:pb-5"
                            >
                              <div className="text-sm sm:text-base text-neutral-gray leading-relaxed space-y-2">
                                {faq.answer.split("\n").map((line, idx) => {
                                  const trimmed = line.trim();
                                  if (trimmed.startsWith("•")) {
                                    return (
                                      <ul
                                        key={idx}
                                        className="list-disc list-inside"
                                      >
                                        <li>{trimmed.slice(1).trim()}</li>
                                      </ul>
                                    );
                                  } else if (/^\d+\./.test(trimmed)) {
                                    return (
                                      <ol
                                        key={idx}
                                        className="list-decimal list-inside"
                                      >
                                        <li>
                                          {trimmed.replace(/^\d+\.\s*/, "")}
                                        </li>
                                      </ol>
                                    );
                                  } else if (trimmed !== "") {
                                    return <p key={idx}>{trimmed}</p>;
                                  } else {
                                    return <br key={idx} />;
                                  }
                                })}
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </LayoutGroup>
        </motion.div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-500">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-brand-primary hover:text-brand-light font-medium transition-colors duration-200"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
