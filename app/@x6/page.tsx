import Drag from "@/components/drag";
import { getTodos } from "@/lib/actions";
import React from "react";

export interface InitialDataProps {
  id: string;
  title: string;
  cards: CardProps[];
}

interface CardProps {
  id: string;
  content: string;
}

const X6 = async () => {
  const { items } = await getTodos();



  return <Drag todos={items} />;
};

export default X6;
