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

  

  const initialData:InitialDataProps[] = [
    {
      id: "todo",
      title: "To Do",
      cards: [
        {
          id: "t1",
          content: "Finish homework",
        },
        {
          id: "t2",
          content: "Buy groceries",
        },
      ],
    },
    {
      id: "doing",
      title: "In Progress",
      cards: [
        {
          id: "ip1",
          content: "Develop app feature",
        },
        {
          id: "ip2",
          content: "Test new module",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      cards: [
        {
          id: "d1",
          content: "Complete documentation",
        },
        {
          id: "d2",
          content: "Deploy to production",
        },
      ],
    },
  ];


  return <Drag data={initialData} />;
};

export default X6;
