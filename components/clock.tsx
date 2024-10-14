"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';

const monthNames = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const dayNames = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

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

    return  `${day} ${month} ${year} ${dayName} | ${hours}:${minutes}.${seconds}`;
  }, [time]);

  return (
    <div className='h-full w-full flex items-center justify-center text-white/50  gap-2 font-semibold'>
      <p>{formattedTime.split(' | ')[0]}</p>
      <p>{formattedTime.split(' | ')[1]}</p>
    </div>
  );
};

export default React.memo(Clock);