import { motion } from "framer-motion";
import Image from "next/image";
import { g3 } from "@/lib/constants";

export const Grid3 = () => {
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
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-3 grid-rows-2 h-full gap-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {Object.entries(g3).map(([key, value], i) => (
        <motion.a
          href={value}
          target="_blank"
          rel="noreferrer"
          key={i}
          className="aspect-square relative h-full w-full border border-[#f8f9f91a] dark:border-b1 rounded-2xl bg-[#f8f9f905] hover:bg-[#4c144c]/50 transition-all duration-300 flex items-center justify-center"
          variants={itemVariants}
          whileHover="hover"
        >
          <Image
            className="dark:hidden"
            src={`/social/${key}.svg`}
            alt="logo"
            width={30}
            height={30}
          />
          <Image
            className="hidden dark:block"
            src={`/social/${key}1.svg`}
            alt="logo"
            width={30}
            height={30}
          />
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference"></div>
        </motion.a>
      ))}
    </motion.div>
  );
};
