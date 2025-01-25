import { motion } from "framer-motion";
import { g1 } from "@/lib/constants";

export const Grid1 = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-full text-white/50 dark:text-black/70 flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div className="space-y-3">
        <motion.p
          className="text-2xl md:text-3xl text-start font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {g1.title}
        </motion.p>
        <motion.p
          className="text-xl md:text-2xl font-medium"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {g1.subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};
