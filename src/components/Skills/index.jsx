import { motion } from "framer-motion";

export default function SkillItem({ name, icon, iconPosition = "left" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-between bg-white/10  
      hover:shadow-lg rounded-full px-3 py-2 transition-all duration-300
      shadow-sm shadow-[rgba(255,255,255,0.4)] 
      border border-transparent hover:border-pink-400 backdrop-blur-sm cursor-pointer"
    >
      {iconPosition === "left" && (
        <motion.div
          whileHover={{ rotate: 10 }}
          className="lg:text-3xl text-xl p-3 bg-pink-500 text-white rounded-full shadow-md"
        >
          {icon}
        </motion.div>
      )}

      <span className="text-white lg:font-medium font-bold text-md lg:px-5 p-1 select-none">
        {name}
      </span>

      {iconPosition === "right" && (
        <motion.div
          whileHover={{ rotate: -10 }}
          className="text-3xl p-3 bg-pink-500 text-white rounded-full shadow-md"
        >
          {icon}
        </motion.div>
      )}
    </motion.div>
  );
}
