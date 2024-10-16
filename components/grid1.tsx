import { g1 } from "@/lib/constants";
import React from "react";

export const Grid1 = () => {
  return (
    <div className="flex items-center justify-center h-full text-white/50 dark:text-black/70 flex-col">
      <div className="space-y-3">
        <p className="text-2xl md:text-3xl  text-start font-bold">{g1.title}</p>
        <p className="text-xl md:text-2xl font-medium">{g1.subtitle}</p>
      </div>
    </div>
  );
};
