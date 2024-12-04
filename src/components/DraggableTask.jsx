import React from "react";
import { useDrag, useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

const DraggableTask = ({ task, index, moveTask, editTask, deleteTask, toggleComplete }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TASK",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, dropRef] = useDrop(() => ({
    accept: "TASK",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index; // Update the dragged item's index to avoid redundant calls
      }
    },
  }));

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      className={`mb-2 transition-opacity ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <TaskCard
        task={task}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default DraggableTask;
