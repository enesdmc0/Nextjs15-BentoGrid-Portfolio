import { g9 } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export const Grid9 = () => {
  return (
    <div className="grid grid-cols-7 p-2 h-full gap-1 relative z-40 ">
      {Object.entries(g9).map(([x, y], i) => (
        <motion.a
          href={`https://enesdmc.com/${y}`}
          target="_blank"
          rel="noreferrer"
          className="relative group flex items-center justify-center border rounded-lg border-[#f8f9f91a] dark:border-b1 w-full h-full cursor-pointer bg-[#141414] dark:bg-zinc-100"
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <p className="-rotate-90 uppercase tracking-wider text-white/50 dark:text-black/70 text-xs  ">
            {x}
          </p>
          <div className="size-6 bg-[#1a1a1a] border border-[#f8f9f91a] top-2 opacity-0 rounded-full group-hover:opacity-100 flex items-center justify-center absolute transition-all duration-500">
            <Image alt="link" src="/link.svg" width={16} height={16} />
          </div>
        </motion.a>
      ))}
    </div>
  );
};
