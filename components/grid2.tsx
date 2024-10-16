import { g2 } from "@/lib/constants";
import React from "react";

export const Grid2 = () => {
  return (
    <div className="p-3 flex flex-col gap-2 h-full overflow-y-auto scrollbar-hide">
      <h2 className="text-white/50 dark:text-black/70 font-semibold tracking-widest text-sm md:text-normal ">
        {g2.title}
      </h2>
      <p className="text-white/40 dark:text-black/70 text-xs md:text-sm tracking-wider">
        {g2.subtitle} <br /> <br /> {g2.subtitle1}
      </p>
    </div>
  );
};
