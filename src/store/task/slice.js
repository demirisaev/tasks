import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxTasks: 6,
  tasks: [
    { id: 1, task: "Pick up new glasses", completed: true },
    { id: 2, task: "Buy airco", completed: false },
    { id: 3, task: "Take packages to return", completed: false },
    { id: 4, task: "Order dog food", completed: true },
  ],
  showCompletedTasks: false,
  completed: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      const newtask = action.payload;
      const newArray = {
        id: state.tasks.length + 1,
        task: newtask,
        completed: false,
      };

      if (newArray.id <= state.maxTasks) {
        state.tasks.push(newArray);
      } else {
        alert("You Reach Max Size Task");
      }
    },
    completeToggle: (state, action) => {
      // we are going to need the id
      //

      const taskId = action.payload;

      const updatedTasks = state.tasks.map((t) => {
        if (t.id === taskId) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
      });

      state.tasks = updatedTasks;
      state.completed.push(updatedTasks[taskId]);
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      const newArray = state.tasks.filter((d) => d.id !== taskId);

      state.tasks = newArray;
    },
  },
});

export const { addNewTask, completeToggle, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
