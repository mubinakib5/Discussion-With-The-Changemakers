"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { aboutData } from "../../data";

const About = () => {
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
    <section id="about" className="py-20 bg-neutral-white">
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
            About The Event
          </h2>
          <p className="text-neutral-gray mb-4">
            Discussion with the Changemakers Chapter 02 empowers Chattogram's
            youth to collaborate with city leaders, building on last year's
            initiative as a bridge for innovative solutions, in partnership with
            Third Smile, The Decor, and Decor's Digital.
          </p>
          <Link
            href="/detailed-overview"
            className="inline-block px-6 py-2 mb-8 bg-brand-primary text-neutral-white font-medium rounded-md hover:bg-brand-light transition-colors duration-300"
          >
            Learn More
          </Link>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        {/* Why DWC Stats Section */}
        {/* <motion.div
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
        </motion.div> */}

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-6"
          >
            {/* <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-neutral-black mb-4">
                About This Event
              </h3>
              <p className="text-neutral-gray text-justify">
                {aboutData.about}
              </p>
            </motion.div> */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-neutral-black mb-4">
                Vision
              </h3>
              <p className="text-neutral-gray text-justify">
                {aboutData.vision}
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-neutral-black mb-4">
                What To Expect
              </h3>
              <ul className="text-neutral-gray text-justify">
                {aboutData.expectations.map((expectation, index) => (
                  <li key={index} className="list-disc list-inside">
                    {expectation}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="bg-brand-primary p-8 rounded-lg shadow-xl flex flex-col h-full"
          >
            <motion.h4
              variants={itemVariants}
              className="text-xl font-semibold text-neutral-white mb-6"
            >
              Event Format
            </motion.h4>
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-between flex-grow space-y-8"
            >
              {aboutData.eventFormat.map((round, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 w-8 h-8 bg-brand-light rounded-full flex items-center justify-center text-neutral-white font-bold"
                  >
                    {index + 1}
                  </motion.div>
                  <div>
                    <h5 className="text-neutral-white font-medium">
                      {round.title}
                    </h5>
                    <p className="text-neutral-white/80 text-sm">
                      {round.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
