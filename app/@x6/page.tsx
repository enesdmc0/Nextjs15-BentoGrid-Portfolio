import Drag from "@/components/drag";
import { getTodos } from "@/lib/actions";
import React from "react";

const X6 = async () => {
  const {items} = await getTodos();
  return <Drag data={items} />;
};

export default X6;
