import { v4 as uuidv4 } from "uuid";
import { useReducer, useState } from "react";
import { Header } from "./components/Header/Header";
import { AddTaskInput } from "./components/Tasks/AddTaskInput/AddTaskInput";
import { TaskList } from "./components/Tasks/TaskList/TaskList";
import styles from "./App.module.css";
import { taskReducer } from "./reducers/tasks/reducer";
import { Task } from "./types/Task";
import { addNewTaskAction, completeTaskAction, deleteTaskAction } from "./reducers/tasks/actions";

const initialState: Task[] = []

function App() {
  const [newTask, setNewTask] = useState("");
  const [state, dispatch] = useReducer(taskReducer, initialState)

  function addNewTask() {
    const task = {
      id: uuidv4(),
      content: newTask,
      isCompleted: false,
    };
    dispatch(addNewTaskAction(task));
    setNewTask("");
  }

  function deleteTask(id: string) {
    dispatch(deleteTaskAction(id));
  }

  function completeTask(id: string) {
    dispatch(completeTaskAction(id))
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
