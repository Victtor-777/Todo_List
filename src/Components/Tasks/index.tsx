import { Task } from "../Task";
import styles from "./tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.tasks_container}>
      <header className={styles.tasks_header}>
        <div className={styles.tasks_create}>
          <h3>Tarefas criadas</h3>
          <span>5</span>
        </div>

        <div className={styles.tasks_finish}>
          <h3>Concluídas</h3>
          <span>2 de 5</span>
        </div>
      </header>

      <Task />
    </div>
  );
}
