import { Header } from "./components/Header/Header";
import { AddTaskInput } from "./components/Tasks/AddTaskInput/AddTaskInput";
import { TaskList } from "./components/Tasks/TaskList/TaskList";
import styles from "./App.module.css";
import { TaskContextProvider } from "./contexts/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.taskInput}>
          <AddTaskInput />
        </div>
        <div className={styles.taskList}>
          <TaskList />
        </div>
      </main>
    </TaskContextProvider>
  );
}

export default App;
