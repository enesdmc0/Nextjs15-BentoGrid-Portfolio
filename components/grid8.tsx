import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const data = [
  "appwrite",
  "bun",
  "claude",
  "expo",
  "figma",
  "nextjs",
  "markdown",
  "neon",
  "notion",
  "obsidian",
  "openai",
  "pocketbase",
  "preact",
  "prisma",
  "query",
  "react",
  "shadcn",
  "tailwind",
  "typescript",
  "vercel",
];

const Grid8 = async () => {
  return (
    <div className="h-full flex flex-col justify-center relative z-20 p-3">
      <div className="mask overflow-hidden relative h-20 mx-auto max-w-[1536px] w-[90%]">
        {data.map((x, i) => (
          <div
            key={i}
            className={cn(
              "itemLeft size-20 bg-[#111111] dark:bg-zinc-100 absolute flex items-center justify-center rounded-xl border border-[#f8f9f91a] dark:border-b1",
              `item${i + 1}`
            )}
          >
            <Image alt="" src={`/tech/${x}.svg`} width={30} height={30} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid8;
