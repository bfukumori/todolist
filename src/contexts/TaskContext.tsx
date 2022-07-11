import { createContext, ReactNode, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  addNewTaskAction,
  completeTaskAction,
  deleteTaskAction,
} from "../reducers/tasks/actions";
import { taskReducer } from "../reducers/tasks/reducer";
import { Task } from "../types/Task";

interface TaskContextData {
  tasks: Task[];
  newTask: string;
  addNewTask: () => void;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
  handleNewTask: (value: string) => void;
}

interface TaskContextProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextData);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const initialState: Task[] = [];
  const [newTask, setNewTask] = useState("");
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  function handleNewTask(value: string) {
    setNewTask(value);
  }

  function addNewTask() {
    const task = {
      id: uuidv4(),
      content: newTask,
      isCompleted: false,
    };
    newTask.length !== 0 && dispatch(addNewTaskAction(task));
    setNewTask("");
  }

  function deleteTask(id: string) {
    dispatch(deleteTaskAction(id));
  }

  function completeTask(id: string) {
    dispatch(completeTaskAction(id));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        newTask,
        addNewTask,
        deleteTask,
        completeTask,
        handleNewTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
