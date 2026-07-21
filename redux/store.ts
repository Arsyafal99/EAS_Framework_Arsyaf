import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

// Tipe RootState
export type RootState = ReturnType<typeof store.getState>;

// Tipe Dispatch
export type AppDispatch = typeof store.dispatch;