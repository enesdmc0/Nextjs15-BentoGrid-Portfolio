"use client";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
const todos = [
  {
    id: "doing",
    title: "In Progress Projects",
    cards: [
      {
        id: "2",
        status: "doing",
        text: "test.com",
      },
    ],
  },
  {
    id: "done",
    title: "Done Projects",
    cards: [
      {
        id: "3",
        status: "done",
        text: "fztilkaydemirci.com",
      },
    ],
  },
];
export interface InitialDataProps {
  id: string;
  title: string;
  cards: CardProps[];
}

interface CardProps {
  id: string;
  status: string;
  text: string;
}
function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }
const Grid5 = () => {
  const [orderedData, setOrderedData] = useState<InitialDataProps[]>(todos);

  const onDragEnd = async (result: any) => {
    const { destination, source, type, draggableId } = result;

    if (
      !destination || // dropped outside the list
      (destination.droppableId === source.droppableId && // dropped in the same list
        destination.index === source.index) // dropped in the same position
    ) {
      return;
    }

    if (type === "card") {
      const newOrderedData = [...orderedData];

      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId
      );
      const destList = newOrderedData.find(
        (list) => list.id === destination.droppableId
      );

      if (!sourceList || !destList) {
        // If source or destination list is not found
        return;
      }

      if (sourceList.id === destList.id) {
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index
        );
        sourceList.cards = reorderedCards;
      } else {
        const [movedCard] = sourceList.cards.splice(source.index, 1);
        movedCard.status = destination.droppableId as "todo" | "doing" | "done";
        destList.cards.splice(destination.index, 0, movedCard);
      }

      setOrderedData(newOrderedData);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-2 p-2 gap-2 h-full">
        {orderedData.map((list) => (
          <Droppable key={list.id} droppableId={list.id} type="card">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="bg-[#111111] border border-[#f8f9f91a] rounded-2xl overflow-y-auto flex flex-col"
              >
                <h2 className="sticky left-0 top-0 bg-[#111111] border-b border-[#f8f9f91a] text-[#999999] text-xs font-medium px-4 py-1.5 flex items-center gap-2">
                  <div
                    className={`size-2 rounded-full ${
                      list.id === "todo"
                        ? "bg-blue-500"
                        : list.id === "doing"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  />
                  {list.title}
                </h2>
                <ul className="flex-1 p-2 space-y-2">
                  {list.cards.map((card, cardIndex) => (
                    <Draggable
                      key={card.id}
                      draggableId={card.id}
                      index={cardIndex}
                    >
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="relative overflow-hidden text-white text-xs border border-[#f8f9f91a] p-2 rounded-lg"
                        >
                          {card.text}
                          <div
                            className={`ml-auto h-full w-1 absolute right-0 top-0 ${
                              list.id === "todo"
                                ? "bg-blue-500"
                                : list.id === "doing"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          />
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Grid5;
