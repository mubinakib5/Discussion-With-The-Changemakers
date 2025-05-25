import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  whileHoverScale = 1.02,
  animate = true,
  variants,
}) => {
  const cardProps = {
    className: `bg-brand-primary rounded-lg overflow-hidden ${className}`,
    ...(animate && {
      variants,
      whileHover: { scale: whileHoverScale },
    }),
  };

  return animate ? (
    <motion.div {...cardProps}>{children}</motion.div>
  ) : (
    <div className={cardProps.className}>{children}</div>
  );
};

export default Card;
