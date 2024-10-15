import Image from "next/image";
import React from "react";

const data = {
  instagram: "",
  x: "",
  github: "",
  linkedin: "",
  mail: "",
};

const Grid3 = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 h-full gap-4">
      {Object.entries(data).map(([key, value], i) => (
        <div
          key={i}
          className="relative h-full w-full border border-[#f8f9f91a] rounded-2xl bg-[#f8f9f905] flex items-center justify-center"
        >
          <Image src={`/social/${key}.svg`} alt="logo" width={30} height={30} />
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>
      ))}

      <div className="relative h-full w-full border border-[#f8f9f91a] rounded-2xl bg-[#f8f9f905] flex items-center justify-center">
        <Image
          src="/enes.jpeg"
          className="rounded-lg"
          alt="logo"
          width={30}
          height={30}
        />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>
    </div>
  );
};

export default Grid3;
