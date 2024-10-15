import React from "react";

const Grid9 = () => {
  return (
    <div className="grid grid-cols-7 p-2 h-full gap-1 ">
      {[
        "enesdmc",
        "technologies",
        "components",
        "ai",
        "blog",
        "english",
        "game",
      ].map((x, i) => (
        <div
          className="relative text-white/50 text-sm flex items-center justify-center border rounded-lg border-[#f8f9f91a] w-full h-full"
          key={i}
        >
          <p className="-rotate-90 uppercase tracking-wider">{x}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid9;