import Image from "next/image";
import React from "react";

const Grid3 = () => {
  return (
    
    <div className="grid grid-cols-3 grid-rows-2 h-full gap-5">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="relative h-full w-full border border-[#f8f9f91a] rounded-3xl bg-[#f8f9f905] flex items-center justify-center"
          >
            <Image src="/instagram.svg" alt="logo" width={60} height={60} />
            <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
          </div>
        ))}
    </div>
  );
};

export default Grid3;
