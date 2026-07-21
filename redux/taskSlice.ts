import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  deadline: string | null;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },

    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.unshift(action.payload);
    },
  },
});

export const { setTasks, addTask } = taskSlice.actions;

export default taskSlice.reducer;