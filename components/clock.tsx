"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const formatNumber = (num: number): string => {
  return num < 10 ? `0${num}` : num.toString();
};

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  const updateTime = useCallback(() => {
    setTime(new Date());
  }, []);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  const formattedTime = useMemo(() => {
    const day = time.getDate();
    const month = monthNames[time.getMonth()];
    const year = time.getFullYear();
    const dayName = dayNames[time.getDay()];
    const hours = formatNumber(time.getHours());
    const minutes = formatNumber(time.getMinutes());
    const seconds = formatNumber(time.getSeconds());

    return `${day} ${month} ${year} ${dayName} | ${hours}:${minutes}.${seconds}`;
  }, [time]);

  return (
    <div className="h-full w-full flex items-center justify-center text-white/50 dark:text-black/70 gap-2 text-xs sm:text-sm tracking-widest p-3">
      <p>{formattedTime.split(" | ")[0]}</p>
      <p>{formattedTime.split(" | ")[1]}</p>
    </div>
  );
};

export default React.memo(Clock);
