"use client";
import { useTheme } from "next-themes";
import React from "react";

const Theme = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center gap-5 bg-red-500 dark:bg-green-500">
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
    </div>
  );
};

export default Theme;
