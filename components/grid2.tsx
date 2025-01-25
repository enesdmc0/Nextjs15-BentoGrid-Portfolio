import React from "react";
import { motion } from "framer-motion";
import { g2 } from "@/lib/constants";

export const Grid2 = () => {
  return (
    <motion.div
      className="p-3 flex flex-col gap-2 h-full overflow-y-auto scrollbar-hide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <motion.h2
        className="text-white/50 dark:text-black/70 font-semibold tracking-widest text-sm md:text-normal"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {g2.title}
      </motion.h2>
      <motion.p
        className="text-white/40 dark:text-black/70 text-xs md:text-sm tracking-wider"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {g2.subtitle} <br /> <br /> {g2.subtitle1}
      </motion.p>
    </motion.div>
  );
};
