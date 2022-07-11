import { ActionTypes } from "../../types/Actions";
import { Task } from "../../types/Task";

export function addNewTaskAction(task: Task) {
  return { type: ActionTypes.ADD, payload: { task } };
}

export function deleteTaskAction(id: string) {
  return { type: ActionTypes.DELETE, payload: { id } };
}

export function completeTaskAction(id: string) {
  return { type: ActionTypes.COMPLETE, payload: { id } };
}
