import { motion } from "framer-motion";
import Aisha from "../../assets/Aisha.jpg";
import Michael from "../../assets/Michael.jpg";
import Sarah from "../../assets/Sarah.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      bio: "Leading innovation in community development with 10+ years experience",
      image: Sarah,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      bio: "Expert in youth empowerment and educational program design",
      image: Michael,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Aisha Patel",
      role: "Community Lead",
      bio: "Passionate about creating inclusive spaces for dialogue and growth",
      image: Aisha,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

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
          className="grid md:grid-cols-3 gap-8"
        >
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
                    className="object-cover w-full h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent opacity-60"></div>
                </div>
              </motion.div>

              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-neutral-white mb-2">
                  {member.name}
                </h3>
                <p className="text-neutral-white/60 mb-4">{member.role}</p>
                <p className="text-neutral-white/80 mb-6">{member.bio}</p>

                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
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
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-white/60 hover:text-brand-light transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
