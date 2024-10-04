import { wait } from "@/lib/actions";
import React from "react";

const X11 = async () => {
  await wait(11000);
  return <div>X11</div>;
};

export default X11;
