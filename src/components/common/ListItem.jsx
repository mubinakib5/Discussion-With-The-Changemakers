import { motion } from "framer-motion";

const ListItem = ({
  text,
  icon: Icon,
  number,
  className = "",
  textColor = "text-neutral-white/80",
  iconColor = "text-neutral-white",
}) => {
  return (
    <motion.li className={`flex items-start space-x-3 ${className}`}>
      {Icon && <Icon className={`w-6 h-6 ${iconColor} flex-shrink-0`} />}
      {number !== undefined && (
        <div className="w-6 h-6 bg-neutral-white rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-brand-primary text-sm font-medium">
            {number}
          </span>
        </div>
      )}
      <span className={textColor}>{text}</span>
    </motion.li>
  );
};

const CheckIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

ListItem.CheckIcon = CheckIcon;

export default ListItem;
