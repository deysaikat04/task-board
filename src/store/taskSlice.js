import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskStates: ["Not started", "In progress", "Completed", "Not completed"],
  allTasks: {},
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTaskTypes: (state, action) => {
      state.allTasks.push(action.payload);
    },
    addNewTask: (state, action) => {
      const { id, name, currState } = action.payload;
      let allTasks = { ...state.allTasks };

      if (!allTasks[currState]) {
        allTasks[currState] = [];
      }

      allTasks[currState].push({ id, name });
      state.allTasks = { ...allTasks };
    },
    updateAllTasks: (state, action) => {
      const { id, prevState, currState } = action.payload;
      let oldAllTasks = { ...state.allTasks };

      const oldTask =
        oldAllTasks[prevState].length &&
        oldAllTasks[prevState].find((aTask) => aTask.id === id);

      if (!oldAllTasks[currState]) {
        oldAllTasks[currState] = [];
      }

      const updatedAllTasks = {
        ...oldAllTasks,
        [prevState]: oldAllTasks[prevState].filter((aTask) => aTask.id !== id),
        [currState]: [...oldAllTasks[currState], oldTask],
      };
      state.allTasks = { ...updatedAllTasks };
    },
  },
});

export const { updateAllTasks, addNewTask } = taskSlice.actions;

export default taskSlice.reducer;
