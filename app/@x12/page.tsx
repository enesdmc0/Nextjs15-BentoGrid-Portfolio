import React from "react";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("@/components/clock"), { ssr: false });

const X12 = async () => {
  return <Clock />;
};

export default X12;
