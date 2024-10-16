import { g5 } from "@/lib/constants";
import Image from "next/image";
import React from "react";


export const Grid5 = () => {
  return (
    <div className="grid p-3 relative z-40 gap-2 overflow-y-auto scrollbar-hide h-full">
      <h2 className="text-white/50 dark:text-black/70 font-semibold tracking-widest text-sm md:text-normal ">
        Projects
      </h2>
      {g5.map((x, i) => (
        <a
          target="_blank"
          href={x.a}
          key={i}
          className="p-3 flex gap-2 bg-[#141414] dark:bg-zinc-100 border border-[#f8f9f91a] dark:border-b1 rounded-xl"
        >
          <div className="bg-[#4c144c]/50 dark:bg-[#4c144c] rounded-lg size-11 flex items-center justify-center">
            <Image alt="" src="/tech/vercel.svg" width={20} height={20} />
          </div>
          <div className="text-white/50 dark:text-black/70 flex flex-col flex-1">
            <div className="flex items-center gap-3">
              <h2 className="font-semibold">{x.b}</h2>
              <div className="size-1 rounded-full bg-white/50 dark:bg-black/70" />
              <p className="text-xs">{x.e}</p>
            </div>
            <p className="text-xs">{x.c}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
