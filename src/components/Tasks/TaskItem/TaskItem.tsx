import { Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";
import checkbox from "../../../assets/check.svg";
import checked from "../../../assets/checked.svg";
import { useContext } from "react";
import { TaskContext } from "../../../contexts/TaskContext";
import { Task } from "../../../types/Task";

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const { deleteTask, completeTask } = useContext(TaskContext);

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  function handleCompleteTask() {
    completeTask(task.id);
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.checkbox} onClick={handleCompleteTask}>
          {task.isCompleted ? (
            <img src={checked} alt="checkbox" />
          ) : (
            <img src={checkbox} alt="checkbox" />
          )}
        </div>
        <p
          className={task.isCompleted ? styles.taskCompleted : styles.taskText}
        >
          {task.content}
        </p>
        <div className={styles.deleteButton} onClick={handleDeleteTask}>
          <Trash weight="bold" />
        </div>
      </div>
    </>
  );
}
