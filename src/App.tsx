import { v4 as uuidv4 } from "uuid";
import { useReducer, useState } from "react";
import { Header } from "./Header";
import { AddTaskInput } from "./AddTaskInput";
import { TaskList } from "./TaskList";
import styles from "./App.module.css";

export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
};

const initialState: Task[] = []
function reducer(state: Task[], action: any) {
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

function App() {
  const [newTask, setNewTask] = useState("");
  const [state, dispatch] = useReducer(reducer,initialState)

  function addNewTask() {
    const task = {
      id: uuidv4(),
      content: newTask,
      isCompleted: false,
    };
    dispatch({type: "add", payload: {task}});
    setNewTask("");
  }

  function deleteTask(id: string) {
    dispatch({type: "delete", payload: {id}});
  }

  function completeTask(id: string) {
    dispatch({type: "complete", payload:{id}})
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.taskInput}>
          <AddTaskInput
            onAddNewTask={addNewTask}
            newTask={newTask}
            setNewTask={setNewTask}
          />
        </div>
        <div className={styles.taskList}>
          <TaskList
            tasks={state}
            onDeleteTask={deleteTask}
            onCompleteTask={completeTask}
          />
        </div>
      </main>
    </>
  );
}

export default App;
