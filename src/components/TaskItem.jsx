import React from "react";
import TaskCard from "./TaskCard";

const TaskItem = ({ tasks = [], editTask, deleteTask, toggleComplete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {tasks.length ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            editTask={(updatedTask) => editTask(task.id, updatedTask)}
            deleteTask={() => deleteTask(task)}
            toggleComplete={() => toggleComplete(task.id)}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No tasks found.</p>
      )}
    </div>
  );
};

export default TaskItem;
