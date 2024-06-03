import { ITask } from "../../App";
import { Task } from "../Task";
import styles from "./tasks.module.css";

interface PropsTasks {
  tasks: ITask[];
}

export function Tasks({ tasks }: PropsTasks) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className={styles.tasks_container}>
      <header className={styles.tasks_header}>
        <div className={styles.tasks_create}>
          <h3>Tarefas criadas</h3>
          <span>{totalTasks}</span>
        </div>

        <div className={styles.tasks_finish}>
          <h3>Concluídas</h3>
          <span>
            {completedTasks} de {totalTasks}
          </span>
        </div>
      </header>

      <section className={styles.tasks_items}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </section>
    </div>
  );
}
