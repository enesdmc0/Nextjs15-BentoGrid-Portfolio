import Image from "next/image";
import React from "react";

const X8 = async () => {
  return (
    <>
      <div className="grid grid-cols-7 gap-2 grid-rows-5 h-full">
        <div className="text-xs text-white/50 col-span-4 flex items-center justify-center gap-5">
          <div className="flex items-center gap-5">
            <button className="p-1 border border-[#f8f9f91a] bg-[#f8f9f905] rounded-md">
              <Image
                src="/left.svg"
                className="text-[#6b7280]"
                alt="Left Icon"
                width={16}
                height={16}
              />
            </button>
            <button className="p-1 border border-[#f8f9f91a] bg-[#f8f9f905] rounded-md">
              <Image
                src="/right.svg"
                alt="Right Icon"
                width={16}
                className="text-white/50"
                height={16}
              />
            </button>
          </div>
          Thursday 2024
        </div>
        {Array(31)
          .fill(0)
          .map((_, i) => (
            <div
              className="col-span-1 row-span-1 bg-[#f8f9f905] rounded-xl text-white/50 text-xs flex items-center justify-center border border-[#f8f9f91a]"
              key={i}
            >
              {i + 1}
            </div>
          ))}
      </div>
    </>
  );
};

export default X8;
