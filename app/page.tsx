"use client"
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
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

// Shared animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const gridItemVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Page = () => {
  return (
    <motion.div 
      className="border-[2.5px] border-[#f8f9f91a] dark:border-b1 h-full grid grid-cols-12 lg:grid-rows-12 rounded-2xl p-3 md:p-5 gap-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Grid 1 */}
      <motion.div 
        className="row-span-4 lg:col-span-5 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden p-3"
        variants={gridItemVariants}
      >
        <Grid1 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference"></div>
      </motion.div>

      {/* Grid 2 */}
      <motion.div 
        className="row-span-4 lg:col-span-4 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden"
        variants={gridItemVariants}
      >
        <Grid2 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference"></div>
      </motion.div>

      {/* Grid 3 */}
      <motion.div 
        className="row-span-2 lg:row-span-4 lg:col-span-3 col-span-12 relative overflow-hidden"
        variants={gridItemVariants}
      >
        <Grid3 />
      </motion.div>

      {/* Grid 4 */}
      <motion.div 
        className="aspect-square lg:aspect-auto row-span-5 lg:col-span-2 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden"
        variants={gridItemVariants}
      >
        <Grid4 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference"></div>
      </motion.div>

      {/* Grid 5 */}
      <motion.div 
        className="row-span-5 lg:col-span-4 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden"
        variants={gridItemVariants}
      >
        <Grid5 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference"></div>
      </motion.div>

      {/* Grid 6 */}
      <motion.div 
        className="row-span-5 lg:col-span-3 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden"
        variants={gridItemVariants}
      >
        <Grid6 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference"></div>
      </motion.div>

      {/* Grid 7 */}
      <motion.div 
        className="aspect-square lg:aspect-auto row-span-7 lg:col-span-3 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden p-2"
        variants={gridItemVariants}
      >
        <Grid7 />
      </motion.div>

      {/* Grid 8 */}
      <motion.div 
        className="row-span-3 lg:col-span-5 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden"
        variants={gridItemVariants}
      >
        <Grid8 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference"></div>
      </motion.div>

      {/* Grid 9 */}
      <motion.div 
        className="aspect-video lg:aspect-auto row-span-3 lg:col-span-3 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden"
        variants={gridItemVariants}
      >
        <Grid9 />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference"></div>
      </motion.div>

      {/* Theme */}
      <motion.div 
        className="row-span-3 lg:col-span-1 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden"
        variants={gridItemVariants}
      >
        <Theme />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference"></div>
      </motion.div>

      {/* Clock */}
      <motion.div 
        className="row-span-1 lg:col-span-3 col-span-12 relative border border-[#f8f9f91a] dark:border-b1 bg-[#f8f9f905] rounded-2xl overflow-hidden"
        variants={gridItemVariants}
      >
        <Clock />
        <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference"></div>
      </motion.div>
    </motion.div>
  );
};

export default Page;