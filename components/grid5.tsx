import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

const Grid5 = () => {
  return (
    <div className="grid p-2 relative z-40 gap-3 overflow-y-auto h-full">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="p-3 flex gap-2 bg-[#141414] border border-[#f8f9f91a] rounded-xl"
          >
            <div className="bg-[#4c144c]/50 rounded-lg size-11 flex items-center justify-center">
              <Image alt="" src="/tech/vercel.svg" width={20} height={20} />
            </div>
            <div className="text-white/50 flex flex-col flex-1">
              <div className="flex items-center gap-3">
                <h2 className="font-bold">Linear</h2>
                <div className="size-1 rounded-full bg-white/50" />
                <p className="text-xs">Leonel Ngoya</p>
           
            </div>
            <p className="text-xs">A fun collection of small, well-coded components to streamline your development process.</p>
            <p className="ml-auto text-xs">May 2024</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Grid5;
