import { ActionTypes } from "../../types/Actions";
import { Task } from "../../types/Task";

export function taskReducer(tasks: Task[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD:
      return [...tasks, action.payload.task];
    case ActionTypes.DELETE:
      return tasks.filter((task) => task.id !== action.payload.id);
    case ActionTypes.COMPLETE:
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
