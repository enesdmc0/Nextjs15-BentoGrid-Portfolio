import { wait } from "@/lib/actions";
import React from "react";

const X4 = async () => {
  await wait(4000);
  return <div>X4</div>;
};

export default X4;
