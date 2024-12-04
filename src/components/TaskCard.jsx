import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { FiEdit, FiTrash2, FiCheck } from "react-icons/fi";

const TaskCard = ({ task, index, editTask, deleteTask, toggleComplete, moveTask }) => {
  const ref = useRef(null);

  const [, drag] = useDrag({
    type: "TASK",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "TASK",
    hover: (item) => {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index; // Avoid redundant moves
      }
    },
  });

  drag(drop(ref));

  return (
    <div
  ref={ref}
  className={`p-6 rounded-2xl shadow-lg ${
    task.completed
      ? "bg-gradient-to-r from-green-200 to-green-50 border border-green-300"
      : "bg-gradient-to-r from-white to-gray-50 border border-gray-200"
  }`}
>
  {/* Header with Title and Edit Button */}
  <div className="flex justify-between items-start mb-4">
    <h3
      className={`text-lg font-semibold ${
        task.completed ? "text-green-700 line-through" : "text-gray-800"
      }`}
    >
      {task.title}
    </h3>
    <button
      onClick={() => editTask(task)}
      className="text-blue-500 hover:text-blue-700 text-sm flex items-center"
    >
      <FiEdit />
    </button>
  </div>

  {/* Task Description */}
  <p className="text-sm text-gray-600">{task.description}</p>
  <p className="text-xs text-gray-400 mt-1">Due: {task.dueDate}</p>

  {/* Action Buttons */}
  <div className="flex justify-between items-center mt-4">
    <button
      onClick={() => toggleComplete(task.id)}
      className={`flex items-center gap-2 w-full px-4 py-2 mr-2 rounded-lg text-sm font-medium shadow-sm ${
        task.completed
          ? "bg-green-100 text-green-600 hover:bg-green-200"
          : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
      }`}
    >
      {task.completed ? "Completed" : "Mark Complete"}
    </button>
    <button
      onClick={() => deleteTask(task.id)}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium shadow-sm bg-red-100 text-red-600 hover:bg-red-200"
    >
      <FiTrash2 />
    </button>
  </div>
</div>

  );
};

export default TaskCard;
