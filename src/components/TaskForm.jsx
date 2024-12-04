import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      addTask({ ...task, completed: false });
      setTask({ title: "", description: "", dueDate: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Task Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="p-3 border border-gray-300 rounded-lg flex-1"
          required
        />
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          className="p-3 border border-gray-300 rounded-lg"
        />
      </div>
      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        className="p-3 border border-gray-300 rounded-lg w-full mt-4"
        rows="3"
      ></textarea>
      <button
        type="submit"
        className="mt-4 bg-[#BCB9D8] text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
