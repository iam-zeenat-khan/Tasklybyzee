import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, deleteTask, toggleComplete, reorderTasks } from "../redux/taskSlice";
import TaskForm from "./TaskForm";
import Filters from "./Filters";
import ConfirmationModal from "./ConfirmationModal";
import DraggableTask from "./DraggableTask";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [editingTaskId, setEditingTaskId] = useState(null); // Track task being edited
  const [updatedTask, setUpdatedTask] = useState({ title: "", description: "", dueDate: "" });

  const handleAddTask = (task) => dispatch(addTask(task));
  const handleEditTask = (id, updatedTask) => {
    dispatch(editTask({ id, updatedTask }));
    setEditingTaskId(null); // Close edit mode
  };
  const handleDeleteTask = (id) => {
    console.log(`Deleting task with ID: ${id}`); // Debug
    dispatch(deleteTask(id));
    setTaskToDelete(null);
  };
  const handleToggleComplete = (id) => dispatch(toggleComplete(id));

  const handleMoveTask = (dragIndex, hoverIndex) => {
    dispatch(reorderTasks({ dragIndex, hoverIndex }));
  };

  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setUpdatedTask(task);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({ ...prev, [name]: value }));
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      if (filter === "overdue") return new Date(task.dueDate) < new Date() && !task.completed;
      return true;
    })
    .filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Dashboard</h1>
      <TaskForm addTask={handleAddTask} />
      <Filters
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Task List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTasks.map((task, index) => (
          <div key={task.id}>
            {editingTaskId === task.id ? (
              <div className="p-4 shadow-md rounded-lg bg-white border border-gray-200">
                <input
                  type="text"
                  name="title"
                  value={updatedTask.title}
                  onChange={handleEditChange}
                  className="w-full p-2 mb-2 border rounded"
                />
                <textarea
                  name="description"
                  value={updatedTask.description}
                  onChange={handleEditChange}
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="date"
                  name="dueDate"
                  value={updatedTask.dueDate}
                  onChange={handleEditChange}
                  className="w-full p-2 mb-2 border rounded"
                />
                <button
                  onClick={() => handleEditTask(task.id, updatedTask)}
                  className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            ) : (
              <DraggableTask
                index={index}
                task={task}
                moveTask={handleMoveTask}
                editTask={startEditing}
                deleteTask={() => setTaskToDelete(task)}
                toggleComplete={() => handleToggleComplete(task.id)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {taskToDelete && (
        <ConfirmationModal
          taskTitle={taskToDelete.title}
          onConfirm={() => handleDeleteTask(taskToDelete.id)}
          onCancel={() => setTaskToDelete(null)}
        />
      )}
    </div>
  );
};

export default TaskList;
