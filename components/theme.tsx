"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex items-center justify-center h-full p-3">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={cn(
          "flex w-16 rounded-full h-8 border border-[#f8f9f91a] dark:border-b1 dark:bg-zinc-200 items-center px-1",
          theme === "light" ? "justify-start" : "justify-end"
        )}
      >
        <div className="size-6 bg-white/50 dark:bg-[#4c144c] rounded-full " />
      </button>
    </div>
  );
};

export default Theme;
