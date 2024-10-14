"use client";
import Image from "next/image";
import React, { useState } from "react";

const X8 = () => {
  const [date, setDate] = useState(0);
  const calendar = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31,
  };
  const activeMonth = Object.values(calendar)[date];

  const decreaseDate = () => {
    if (date === 0) return;
    setDate((prev) => prev - 1);
  };

  const increaseDate = () => {
    if (date === 11) return;
    setDate((prev) => prev + 1);
  };

  return (
    <div className="h-full flex flex-col gap-2">
      <div className="h-10 grid grid-cols-7 gap-2">
        <div className="text-xs text-white/50 col-span-4 flex items-center justify-center gap-5">
          <div className="flex items-center gap-5">
            <button className="p-1 border border-[#f8f9f91a] bg-[#f8f9f905] rounded-md">
              <Image
                onClick={decreaseDate}
                src="/left.svg"
                className="text-[#6b7280]"
                alt="Left Icon"
                width={16}
                height={16}
              />
            </button>
            <button className="p-1 border border-[#f8f9f91a] bg-[#f8f9f905] rounded-md">
              <Image
                onClick={increaseDate}
                src="/right.svg"
                alt="Right Icon"
                width={16}
                className="text-white/50"
                height={16}
              />
            </button>
          </div>
          <span className="capitalize">{Object.keys(calendar)[date]} 2024</span>
        </div>
      </div>
      <div className="h-10 grid grid-cols-7 gap-2">
        {Array(7)
          .fill(0)
          .map((_, i) => (
            <div
              className="col-span-1 bg-[#f8f9f905] rounded-xl text-white/50 text-xs flex items-center justify-center border border-[#f8f9f91a]"
              key={i}
            >
              sunday
            </div>
          ))}
      </div>
      <div className="grid grid-cols-7 gap-2 grid-rows-5 h-full">
        {Array(activeMonth)
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
    </div>
  );
};

export default X8;
