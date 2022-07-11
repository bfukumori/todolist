import { Task } from "../../types/Task";

export function  addNewTaskAction(task:Task) {
  return {type: "add", payload: {task}}
}

export function deleteTaskAction(id: string) {
  return {type: "delete", payload: {id}}
}

export function completeTaskAction(id: string) {
  return {type: "complete", payload:{id}}
}
