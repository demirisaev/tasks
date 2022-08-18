export const selectTask = (reduxState) =>
  reduxState.task.tasks.filter((t) => !t.completed);

export const selectContolByTask = (id) => (reduxState) =>
  reduxState.task.maxTasks > id ? reduxState.task : " You reach max task";
