"use client";
import React, { FC } from "react";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { TodoType } from "@/types";
import { updateTodo } from "@/lib/actions";
import { DragState } from "@formkit/drag-and-drop";

interface Props {
  data: TodoType[];
}

const Drag: FC<Props> = ({ data }) => {
  const todoItems = data.filter((x) => x.status === "todo");
  const doneItems = data.filter((x) => x.status === "done");
  const doingItems = data.filter((x) => x.status === "doing");

  const [todoList, todos] = useDragAndDrop<HTMLUListElement, TodoType>(
    todoItems,
    {
      group: "todoList",
      performTransfer: (state: DragState<T>) =>
        updateTodo(state.draggedNode.data.value.id, "todo"),
    }
  );
  const [doneList, dones] = useDragAndDrop<HTMLUListElement, TodoType>(
    doneItems,
    {
      group: "todoList",
      performTransfer: (state: DragState<T>) =>
        updateTodo(state.draggedNode.data.value.id, "done"),
    }
  );

  const [doingList, doing] = useDragAndDrop<HTMLUListElement, TodoType>(
    doingItems,
    {
      group: "todoList",
      performTransfer: (state: DragState<T>) =>
        updateTodo(state.draggedNode.data.value.id, "doing"),
    }
  );
  return (
    <div className="kanban-board grid grid-cols-3 p-2 gap-2 h-full ">
      <div className="relative group bg-[#111111] border border-[#f8f9f91a] overflow-y-auto rounded-2xl flex flex-col">
        <h2 className="sticky left-0 top-0 bg-[#111111] border-b border-[#f8f9f91a] text-[#999999] text-xs font-medium px-4 py-1.5 flex items-center gap-2">
          <div className="size-2 rounded-full bg-blue-500" />
          Todo
        </h2>

        <ul ref={todoList} className="min-h-10 p-2 space-y-2  ">
          {todos.map((x, i) => (
            <li
              className="kanban-item relative overflow-hidden text-white text-xs border border-[#f8f9f91a] p-2 rounded-lg "
              key={i}
            >
              {x.text}
              <div className="ml-auto h-full w-1.5 bg-blue-500 absolute right-0 top-0" />
            </li>
          ))}
        </ul>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
          <input
            type="text"
            className="border-none bg-transparent text-xs w-full p-2 rounded-lg text-white outline-none "
            placeholder="New Task..."
          />
        </div>
      </div>

      <div className="bg-[#111111] border border-[#f8f9f91a] rounded-2xl overflow-y-auto flex flex-col">
        <h2 className="sticky left-0 top-0 bg-[#111111] border-b border-[#f8f9f91a] text-[#999999] text-xs font-medium px-4 py-1.5 flex items-center gap-2">
          <div className="size-2 rounded-full bg-green-500" />
          Doing
        </h2>
        <ul ref={doingList} className="flex-1 p-2 space-y-2">
          {doing.map((x, i) => (
            <li
              className="kanban-item text-white overflow-hidden relative text-xs border border-[#f8f9f91a] p-2 rounded-lg"
              key={i}
            >
              {x.text}
              <div className="ml-auto h-full w-1.5 bg-green-500 absolute right-0 top-0" />
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#111111] border border-[#f8f9f91a] rounded-2xl overflow-y-auto flex flex-col">
        <h2 className="sticky left-0 top-0 bg-[#111111] border-b border-[#f8f9f91a] text-[#999999] text-xs font-medium px-4 py-1.5 flex items-center gap-2">
          <div className="size-2 rounded-full bg-red-500" />
          Done
        </h2>
        <ul ref={doneList} className="flex-1 p-2 space-y-2">
          {dones.map((x, i) => (
            <li
              className="kanban-item relative overflow-hidden text-white text-xs border border-[#f8f9f91a] p-2 rounded-lg "
              key={i}
            >
              {x.text}
              <div className="ml-auto h-full w-1.5 bg-red-500 absolute right-0 top-0" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drag;
