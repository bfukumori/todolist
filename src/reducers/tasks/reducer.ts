import { Task } from "../../types/Task";

export function taskReducer(tasks: Task[], action: any) {
  switch (action.type) {
    case "add":
      return [...tasks, action.payload.task];
    case "delete":
      return tasks.filter((task) => task.id !== action.payload.id);
    case "complete":
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    default:
      return tasks;
  }
}
