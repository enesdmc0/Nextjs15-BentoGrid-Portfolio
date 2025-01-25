"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export const Grid7 = () => {
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
  const daysInPreviousMonth = date === 0 ? 31 : Object.values(calendar)[date - 1];

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const monthTitleVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const dayVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      className="h-full flex flex-col gap-1.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-10 grid grid-cols-7 gap-2">
        <div className="text-xs text-white/50 dark:text-black/70 col-span-4 flex items-center justify-center gap-5">
          <div className="flex items-center gap-5">
            <motion.button
              className="p-1 border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-md"
              onClick={decreaseDate}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image src="/left.svg" alt="Left Icon" width={16} height={16} />
            </motion.button>
            <motion.button
              className="p-1 border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-md"
              onClick={increaseDate}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image src="/right.svg" alt="Right Icon" width={16} height={16} />
            </motion.button>
          </div>
          <motion.span
            className="capitalize"
            key={date}
            variants={monthTitleVariants}
            initial="initial"
            animate="animate"
          >
            {Object.keys(calendar)[date]} 2024
          </motion.span>
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
            <motion.div
              className="col-span-1 row-span-1 bg-[#f8f9f905] rounded-xl text-white/20 dark:text-black/70 opacity-50 text-[10px] flex items-end justify-center border border-[#f8f9f91a] dark:border-b1"
              key={`prev-${i}`}
              variants={dayVariants}
              initial="initial"
              animate="animate"
            >
              {daysInPreviousMonth - firstDayOfMonth + i + 1}
            </motion.div>
          ))}
        {Array(activeMonth)
          .fill(0)
          .map((_, i) => (
            <motion.div
              className="col-span-1 row-span-1 bg-[#f8f9f905] dark:bg-[#fafafa] rounded-xl text-white/50 dark:text-black/70 text-[10px] flex items-end justify-center border border-[#f8f9f91a] dark:border-b1"
              key={`current-${i}`}
              variants={dayVariants}
              initial="initial"
              animate="animate"
            >
              {i + 1}
            </motion.div>
          ))}
        {Array(42 - firstDayOfMonth - activeMonth)
          .fill(0)
          .map((_, i) => (
            <motion.div
              className="col-span-1 row-span-1 bg-[#f8f9f905] rounded-xl text-white/20 dark:text-black/70 opacity-50 text-[10px] flex items-end justify-center border border-[#f8f9f91a] dark:border-b1"
              key={`next-${i}`}
              variants={dayVariants}
              initial="initial"
              animate="animate"
            >
              {i + 1}
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};
