import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
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
        {title}
      </h2>
      {subtitle && <p className="text-neutral-gray mb-8">{subtitle}</p>}
      <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
    </motion.div>
  );
};

export default SectionTitle;
