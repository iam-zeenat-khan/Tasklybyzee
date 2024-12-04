import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"; // Ensure the path is correct

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
