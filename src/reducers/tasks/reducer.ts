import { Task } from "../../types/Task"

export function taskReducer(state: Task[], action: any) {
  switch (action.type) {
    case "add":
      return [...state, action.payload.task]
    case "delete":
      return state.filter((task) => task.id !== action.payload.id)
    case "complete":
      return state.map(task=>{
        if (task.id  ===  action.payload.id) {
          return {...task, isCompleted: !task.isCompleted}
        }
        return task
      })
    default:
      return state;
  }
  }