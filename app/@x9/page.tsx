import { wait } from "@/lib/actions";
import React from "react";

const X9 =  async() => {
  await wait(9000);
  return <div>X9</div>;
};

export default X9;
