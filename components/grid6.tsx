import Image from "next/image";
import { motion } from "framer-motion";

export const Grid6 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-3 grid-rows-3 h-full gap-1"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {Array(9)
        .fill(0)
        .map((_, i) => (
          <motion.div
            key={i}
            className="h-32 relative w-full lg:h-full"
            variants={itemVariants}
            whileHover="hover"
          >
            <Image src={`/${i + 1}.avif`} alt="" fill className="object-cover" />
          </motion.div>
        ))}
    </motion.div>
  );
};
