import { motion } from "framer-motion";

const Button = ({
  children,
  onClick,
  href,
  variant = "primary", // primary, white, outline
  className = "",
  animate = true,
  arrow = false,
}) => {
  const baseStyles =
    "font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300";

  const variants = {
    primary: "bg-brand-primary hover:bg-brand-light text-neutral-white",
    white: "bg-neutral-white hover:bg-white/90 text-brand-primary",
    outline:
      "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-neutral-white",
  };

  const buttonContent = (
    <>
      {children}
      {arrow && <span className="ml-1">↗</span>}
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return animate ? (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonContent}
      </motion.a>
    ) : (
      <a href={href} className={combinedClassName}>
        {buttonContent}
      </a>
    );
  }

  return animate ? (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {buttonContent}
    </motion.button>
  ) : (
    <button onClick={onClick} className={combinedClassName}>
      {buttonContent}
    </button>
  );
};

export default Button;
