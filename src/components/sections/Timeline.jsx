import { motion } from "framer-motion";
import { useMemo } from "react";
import { timelineEvents } from "../../data";

const Timeline = () => {
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

  // Calculate progress percentage based on current date
  const progressPercentage = useMemo(() => {
    const now = new Date();
    const timelineStart = new Date(timelineEvents[0].date);
    const timelineEnd = new Date(
      timelineEvents[timelineEvents.length - 1].date
    );

    // If we haven't reached the first event yet
    if (now < timelineStart) {
      return 0;
    }

    // If we've passed the last event
    if (now > timelineEnd) {
      return 100;
    }

    // Find the current position in timeline
    let currentIndex = -1;
    for (let i = 0; i < timelineEvents.length; i++) {
      const eventDate = new Date(timelineEvents[i].date);
      if (now >= eventDate) {
        currentIndex = i;
      }
    }

    // Calculate percentage based on current position
    if (currentIndex === -1) {
      return 0;
    }

    // Calculate percentage based on position between events
    const percentage = ((currentIndex + 1) / timelineEvents.length) * 100;
    return percentage;
  }, []);

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
            whileInView={{ height: `${progressPercentage}%` }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-brand-primary origin-top"
          ></motion.div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const eventDate = new Date(event.date);
              const isPast = new Date() >= eventDate;

              return (
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
                        isPast ? "text-brand-primary" : "text-neutral-gray"
                      }`}
                    >
                      {event.date}
                    </span>
                    <h3
                      className={`text-xl font-bold mt-2 ${
                        isPast ? "text-neutral-black" : "text-neutral-gray"
                      }`}
                    >
                      {event.title}
                    </h3>
                    <p
                      className={`mt-2 ${
                        isPast ? "text-neutral-black/70" : "text-neutral-gray"
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
                        isPast ? "bg-brand-primary" : "bg-neutral-gray/30"
                      } z-10`}
                    ></motion.div>
                  </motion.div>
                  <div className="w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
