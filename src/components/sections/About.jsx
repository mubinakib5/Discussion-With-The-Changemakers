import { motion } from "framer-motion";

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
          <p className="text-neutral-gray mb-8">
            A platform for change-makers to connect and create impact
          </p>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-neutral-black mb-4">
                Our Vision
              </h3>
              <p className="text-neutral-gray">
                Discussion with the Changemakers Chapter 02; the event aims to
                empower Chattogram's youth and deepen dialogue between young
                people and city leaders. It builds on last year's program, which
                was launched as "a bridge between the youth and city rulers" in
                collaboration with the City Corporation. Organized in
                partnership with Third Smile (Organizing Partner), The Decor
                (Event Partner), and Decor's Digital (Digital Partner), we are
                committed to shaping a better future.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-neutral-black mb-4">
                What to Expect
              </h3>
              <ul className="text-neutral-gray space-y-3">
                <li>• Interactive workshops and panel discussions</li>
                <li>• Networking opportunities with industry leaders</li>
                <li>• Hands-on problem-solving sessions</li>
                <li>• Community project showcases</li>
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
              {[
                {
                  title: "Round 1: Ideation",
                  description:
                    "Brainstorming sessions and problem identification",
                },
                {
                  title: "Round 2: Development",
                  description: "Solution development and mentorship",
                },
                {
                  title: "Grand Finale",
                  description: "Presentation and implementation planning",
                },
              ].map((round, index) => (
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
