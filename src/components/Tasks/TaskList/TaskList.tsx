import { useContext } from "react";
import clipboard from "../../../assets/clipboard.svg";
import { TaskContext } from "../../../contexts/TaskContext";
import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

export function TaskList() {
  const { tasks } = useContext(TaskContext);
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.tasksDone}>
          <p>Concluídas</p>
          <span>
            {!tasks.length ? 0 : `${completedTasks} de ${tasks.length}`}
          </span>
        </div>
      </header>
      <section className={styles.taskList}>
        {tasks.length === 0 ? (
          <div className={styles.noTasksList}>
            <img
              src={clipboard}
              alt="Imagem de clipboard quando não houver tarefas cadastradas"
            />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </section>
    </>
  );
}
