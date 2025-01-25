import Image from "next/image";
import { motion } from "framer-motion";

export const Grid4 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
      className="w-full h-full"
    >
      <Image 
        src="/enes.jpeg" 
        alt="Enes Demirci" 
        fill 
        className="object-cover" 
      />
    </motion.div>
  );
};