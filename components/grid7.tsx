"use client";
import Image from "next/image";
import React, { useState } from "react";

const Grid7 = () => {
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

  function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
  }

  const firstDayOfMonth = getFirstDayOfMonth(2024, date);
  const daysInPreviousMonth =
    date === 0 ? 31 : Object.values(calendar)[date - 1];

  return (
    <div className="h-full flex flex-col gap-1.5">
      <div className="h-10 grid grid-cols-7 gap-2">
        <div className="text-xs text-white/50 dark:text-black/70 col-span-4 flex items-center justify-center gap-5">
          <div className="flex items-center gap-5">
            <button
              className="p-1 border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-md"
              onClick={decreaseDate}
            >
              <Image src="/left.svg" alt="Left Icon" width={16} height={16} />
            </button>
            <button
              className="p-1 border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-md"
              onClick={increaseDate}
            >
              <Image src="/right.svg" alt="Right Icon" width={16} height={16} />
            </button>
          </div>
          <span className="capitalize">{Object.keys(calendar)[date]} 2024</span>
        </div>
      </div>
      <div className="h-10 grid grid-cols-7 gap-1.5 relative z-20">
        {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((day, i) => (
          <div
            className="col-span-1 rounded-lg text-white/50 dark:text-black/70 text-[10px] flex items-center justify-center border border-[#f8f9f91a] dark:border-b1 bg-[#111111] dark:bg-white"
            key={i}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1.5 grid-rows-6 h-full">
        {Array(firstDayOfMonth)
          .fill(0)
          .map((_, i) => (
            <div
              className=" col-span-1 row-span-1 bg-[#f8f9f905] rounded-xl text-white/20 dark:text-black/70 opacity-50 text-[10px] flex items-end justify-center border border-[#f8f9f91a] dark:border-b1"
              key={`prev-${i}`}
            >
              {daysInPreviousMonth - firstDayOfMonth + i + 1}
            </div>
          ))}
        {Array(activeMonth)
          .fill(0)
          .map((_, i) => (
            <div
              className=" col-span-1 row-span-1 bg-[#f8f9f905] dark:bg-[#fafafa] rounded-xl text-white/50 dark:text-black/70 text-[10px] flex items-end justify-center border border-[#f8f9f91a] dark:border-b1"
              key={`current-${i}`}
            >
              {i + 1}
            </div>
          ))}
        {Array(42 - firstDayOfMonth - activeMonth)
          .fill(0)
          .map((_, i) => (
            <div
              className="col-span-1 row-span-1 bg-[#f8f9f905] rounded-xl text-white/20 dark:text-black/70 opacity-50 text-[10px] flex items-end justify-center border border-[#f8f9f91a] dark:border-b1"
              key={`next-${i}`}
            >
              {i + 1}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Grid7;
