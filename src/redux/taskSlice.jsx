import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Complete React Assignment",
      description: "Finish the Redux section of the React course",
      dueDate: "2024-12-01",
      completed: false,
    },
    {
      id: 2,
      title: "Prepare Presentation",
      description: "Create slides for the project review",
      dueDate: "2024-12-04",
      completed: true,
    },
    {
      id: 3,
      title: "Schedule Meeting",
      description: "Organize a team meeting for the next sprint planning",
      dueDate: "2024-12-02",
      completed: false,
    },
    {
      id: 4,
      title: "Submit Expense Report",
      description: "Send the report before the end of the day",
      dueDate: "2024-11-30",
      completed: false,
    },
  ],
};
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ ...action.payload, id: Date.now(), completed: false });
        },
        editTask: (state, action) => {
            const { id, updatedTask } = action.payload;
            const taskIndex = state.tasks.findIndex((task) => task.id === id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        reorderTasks: (state, action) => {
            const { dragIndex, hoverIndex } = action.payload;
            const updatedTasks = [...state.tasks];
            const [draggedTask] = updatedTasks.splice(dragIndex, 1);
            updatedTasks.splice(hoverIndex, 0, draggedTask);
            state.tasks = updatedTasks;
        },
    },
});

export const { addTask, editTask, deleteTask, toggleComplete, reorderTasks } =
    taskSlice.actions;

export default taskSlice.reducer;
