import { motion } from "framer-motion";

const Timeline = () => {
  const timelineEvents = [
    {
      date: "March 2024",
      title: "Registration Opens",
      description: "Submit your application to join the movement",
    },
    {
      date: "April 2024",
      title: "Round 1: Problem Discovery",
      description: "Engage in workshops and identify key challenges",
    },
    {
      date: "May 2024",
      title: "Round 2: Solution Development",
      description: "Work with mentors to develop actionable solutions",
    },
    {
      date: "June 2024",
      title: "Grand Finale",
      description: "Present your solutions and implementation plans",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="timeline" className="py-20 bg-neutral-white">
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
            Event Timeline
          </h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="relative"
        >
          {/* Progress Bar */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-black/10"></div>
          <motion.div
            initial={{ height: "0%" }}
            whileInView={{ height: "25%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-brand-primary origin-top"
          ></motion.div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <motion.div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className={`font-semibold ${
                      index === 0 ? "text-brand-primary" : "text-neutral-gray"
                    }`}
                  >
                    {event.date}
                  </span>
                  <h3
                    className={`text-xl font-bold mt-2 ${
                      index === 0 ? "text-neutral-black" : "text-neutral-gray"
                    }`}
                  >
                    {event.title}
                  </h3>
                  <p
                    className={`mt-2 ${
                      index === 0
                        ? "text-neutral-black/70"
                        : "text-neutral-gray"
                    }`}
                  >
                    {event.description}
                  </p>
                </motion.div>
                <motion.div
                  className="relative flex items-center justify-center w-8"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className={`w-4 h-4 rounded-full ${
                      index === 0 ? "bg-brand-primary" : "bg-neutral-gray/30"
                    } z-10`}
                  ></motion.div>
                </motion.div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
