import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is DWC?",
      answer:
        "DWC (Discussion With The Changemakers) is a platform that brings together innovators, leaders, and community members to address pressing social challenges through collaborative dialogue and action.",
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone passionate about creating positive change in their community can participate. We welcome students, professionals, entrepreneurs, and community leaders.",
    },
    {
      question: "How long is the event?",
      answer:
        "The event spans multiple days, featuring workshops, discussions, and collaborative sessions. Each phase is designed to maximize learning and impact.",
    },
    {
      question: "What should I prepare?",
      answer:
        "Come with an open mind and willingness to collaborate. Any specific materials or preparations needed will be communicated to registered participants.",
    },
  ];

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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-gray mb-8">
            Everything you need to know about the event
          </p>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="space-y-4"
        >
          <LayoutGroup>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                layout
                className={`bg-brand-primary rounded-lg overflow-hidden transition-shadow duration-300 ${
                  openIndex === index ? "shadow-lg" : ""
                }`}
              >
                <motion.button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none group"
                  onClick={() => toggleQuestion(index)}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  transition={{ duration: 0.2 }}
                  layout="position"
                >
                  <span className="text-lg font-medium text-neutral-white group-hover:translate-x-0.5 transition-transform duration-200">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                      scale: openIndex === index ? 1.1 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="w-6 h-6 text-neutral-white"
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
                  {openIndex === index && (
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
                      className="overflow-hidden"
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
                        className="px-6 pb-4"
                      >
                        <p className="text-neutral-white/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </LayoutGroup>
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
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
