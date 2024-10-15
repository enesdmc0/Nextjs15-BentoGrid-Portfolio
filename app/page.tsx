import React from "react";
import Grid1 from "@/components/grid1";
import Grid2 from "@/components/grid2";
import Grid3 from "@/components/grid3";
import Grid4 from "@/components/grid4";
import Grid5 from "@/components/grid5";
import Grid6 from "@/components/grid6";
import Grid7 from "@/components/grid7";
import Grid8 from "@/components/grid8";
import Grid9 from "@/components/grid9";
import Theme from "@/components/theme";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("@/components/clock"), { ssr: false });

const Page = () => {
  return (
    <div className="border-[2.5px] border-[#f8f9f91a] h-full grid grid-cols-12 grid-rows-12 rounded-2xl p-5 gap-4">
      <div className="row-span-4 col-span-5 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid1 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-4 col-span-4 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid2 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-4 col-span-3 relative overflow-hidden">
        <Grid3 />
      </div>

      <div className="row-span-5 col-span-2 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid4 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-5 col-span-4 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid5 />
      </div>

      <div className="row-span-5 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid6 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-7 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-2xl overflow-hidden p-2">
        <Grid7 />
      </div>

      <div className="row-span-3 col-span-5 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid8 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-3 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Grid9 />
      </div>

      <div className="row-span-3 col-span-1 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Theme />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>

      <div className="row-span-1 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-2xl overflow-hidden">
        <Clock />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
      </div>
    </div>
  );
};

export default Page;
