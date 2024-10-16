import React from "react";
import dynamic from "next/dynamic";
import {
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  Grid8,
  Grid9,
  Theme,
} from "@/components";

const Clock = dynamic(() => import("@/components/clock"), { ssr: false });

const Page = () => {
  return (
    <div className="border-[2.5px] border-[#f8f9f91a] dark:border-b1 h-full grid grid-cols-12 lg:grid-rows-12 rounded-2xl p-3 md:p-5 gap-4">
      <div className="row-span-4 lg:col-span-5 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden p-3">
        <Grid1 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-4 lg:col-span-4 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid2 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-2 lg:row-span-4 lg:col-span-3 col-span-12  relative overflow-hidden">
        <Grid3 />
      </div>

      <div className="aspect-square lg:aspect-auto row-span-5 lg:col-span-2 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid4 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-5 lg:col-span-4 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid5 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-5 lg:col-span-3 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid6 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="aspect-square lg:aspect-auto row-span-7 lg:col-span-3 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden p-2">
        <Grid7 />
      </div>

      <div className="row-span-3 lg:col-span-5 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid8 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="aspect-video lg:aspect-auto row-span-3 lg:col-span-3 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid9 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-3 lg:col-span-1 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Theme />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-1 lg:col-span-3 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Clock />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>
    </div>
  );
};

export default Page;
