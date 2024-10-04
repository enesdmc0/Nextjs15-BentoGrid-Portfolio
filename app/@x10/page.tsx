import { wait } from "@/lib/actions";
import React from "react";

const X10 = async () => {
  await wait(10000);
  return <div>X10</div>;
};

export default X10;
