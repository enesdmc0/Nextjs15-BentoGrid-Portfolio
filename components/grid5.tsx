import { b } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    a: "https://enesdmc.com",
    b: "Enesdmc",
    c: "While developing the project, I utilized Next.js, Mdx, PocketBase, Jotai, and TypeScript.",
    e: "Web",
  },
  {
    a: "https://fztilkaydemirci.com",
    b: "Fztilkaydemirci",
    c: "While developing the project, I utilized Next.js, Shadcn Ui, Jotai, and TypeScript.",
    e: "Web",
  },
  {
    a: "",
    b: "Coffee&Tea Tracking",
    c: "While developing the project, I utilized Expo, Supabase, Jotai, and Nativewind.",
    e: "Mobile",
  },
  {
    a: "https://github.com/enesdmc0/Pocketbase-Nextjs14",
    b: "Next.js Pocketbase",
    c: "While developing the project, I utilized Next.js, PocketBase, Jotai, and TypeScript.",
    e: "Web",
  },
];

const Grid5 = () => {
  return (
    <div className="grid p-3 relative z-40 gap-2 overflow-y-auto h-full">
      <h2 className="text-white/50 dark:text-black/70 font-semibold tracking-widest text-sm md:text-normal ">
        Projects
      </h2>
      {data.map((x, i) => (
        <a
          target="_blank"
          href={x.a}
          key={i}
          className="p-3 flex gap-2 bg-[#141414] dark:bg-zinc-100 border border-[#f8f9f91a] dark:border-b1 rounded-xl"
        >
          <div className="bg-[#4c144c]/50 dark:bg-[#4c144c] rounded-lg size-11 flex items-center justify-center">
            <Image alt="" src="/tech/vercel.svg" width={20} height={20} />
          </div>
          <div className="text-white/50 dark:text-black/70 flex flex-col flex-1">
            <div className="flex items-center gap-3">
              <h2 className="font-semibold">{x.b}</h2>
              <div className="size-1 rounded-full bg-white/50 dark:bg-black/70" />
              <p className="text-xs">{x.e}</p>
            </div>
            <p className="text-xs">{x.c}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Grid5;
