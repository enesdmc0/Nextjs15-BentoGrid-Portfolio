import Image from "next/image";
import React from "react";

const data = {
  instagram: "https://www.instagram.com/enes_dmc/",
  x: "https://x.com/enesdmc0",
  github: "https://github.com/enesdmc0",
  linkedin: "https://www.linkedin.com/in/enesdemirci1/",
  mail: "mailto:enesdmcc@gmail.com",
  vercel: "https://enesdmc.com",
};

const Grid3 = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 h-full gap-4">
      {Object.entries(data).map(([key, value], i) => (
        <a
          href={value}
          target="_blank"
          rel="noreferrer"
          key={i}
          className="aspect-square relative h-full w-full border border-[#f8f9f91a] dark:border-b1 rounded-2xl bg-[#f8f9f905] hover:bg-[#4c144c]/50 transition-all duration-300 flex items-center justify-center"
        >
          <Image className="dark:hidden " src={`/social/${key}.svg`} alt="logo" width={30} height={30}  />
          <Image className="hidden dark:block" src={`/social/${key}1.svg`} alt="logo" width={30} height={30}  />
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </a>
      ))}
    </div>
  );
};

export default Grid3;
