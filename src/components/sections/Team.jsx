import { motion } from "framer-motion";
import { teamMembers } from "../../data";

const Team = () => {
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
    <section id="team" className="py-20 bg-neutral-white">
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
            Meet Our Team
          </h2>
          <p className="text-neutral-gray mb-8">
            Dedicated professionals working to make a difference
          </p>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Team cards temporarily hidden */}
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-brand-primary rounded-lg overflow-hidden group"
            >
              <motion.div
                className="aspect-w-1 aspect-h-1 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover object-top w-full h-48 sm:h-56 md:h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent opacity-60"></div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 pt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-col space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-neutral-white/60">{member.role}</p>
                    </div>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-white/60 hover:text-brand-light transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-neutral-white/80">{member.bio}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
          <motion.div
            variants={itemVariants}
            className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">
              Our Campus Ambassador Program Will Launch Soon
            </h3>
            <p className="text-xl text-neutral-gray">Stay Tuned</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
