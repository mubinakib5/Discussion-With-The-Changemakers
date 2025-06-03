"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { whyData } from "../../data";

const Why = () => {
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

  return (
    <section id="why" className="py-20 bg-neutral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Why DWC?
          </h2>
          <p className="text-neutral-gray mb-4 max-w-3xl mx-auto">
            Addressing key challenges in community development
          </p>
          <Link 
            href="/why-participate" 
            className="inline-block px-6 py-2 mb-8 bg-brand-primary text-neutral-white font-medium rounded-md hover:bg-brand-light transition-colors duration-300"
          >
            Learn More
          </Link>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {whyData.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-brand-primary rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-neutral-white mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyData.challenges.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-brand-primary p-6 rounded-lg flex flex-col"
            >
              <div className="mb-6 flex-1">
                <h4 className="text-xl font-semibold text-neutral-white mb-2">
                  The Problem
                </h4>
                <p className="text-neutral-white/80">{item.problem}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-neutral-white mb-2">
                  Our Solution
                </h4>
                <p className="text-neutral-white/80">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Why;
