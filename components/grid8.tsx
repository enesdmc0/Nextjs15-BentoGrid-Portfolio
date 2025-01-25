import { g8 } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

export const Grid8 = async () => {
  return (
    <div className="h-full flex flex-col justify-center relative z-20 p-3">
      <div className="mask overflow-hidden relative h-20 mx-auto max-w-[1536px] w-[90%]">
        {g8.map((x, i) => (
          <motion.div
            key={i}
            className={cn(
              "itemLeft size-20 bg-[#111111] dark:bg-zinc-100 absolute flex items-center justify-center rounded-xl border border-[#f8f9f91a] dark:border-b1",
              `item${i + 1}`
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Image alt="" src={`/tech/${x}.svg`} width={30} height={30} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
