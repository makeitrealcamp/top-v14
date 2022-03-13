import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  description?: string;
  status: boolean;
}

interface TasksSliceState {
  tasks: Task[];
}

const initialState: TasksSliceState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks = [
        ...state.tasks,
        {
          id: state.tasks.length,
          title: action.payload,
          status: false,
        },
      ];
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
