import { PlusCircle } from "phosphor-react";
import { useContext } from "react";
import { TaskContext } from "../../../contexts/TaskContext";
import styles from "./AddTaskInput.module.css";

export function AddTaskInput() {
  const { newTask, handleNewTask, addNewTask } = useContext(TaskContext);
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={(event) => handleNewTask(event.target.value)}
      />
      <button type="submit" className={styles.button} onClick={addNewTask}>
        <span>Criar</span>
        <PlusCircle size="1rem" weight="bold" />
      </button>
    </div>
  );
}
