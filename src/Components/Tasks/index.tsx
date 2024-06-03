import { ClipboardText } from "phosphor-react";
import { ITask } from "../../App";
import { Task } from "../Task";
import styles from "./tasks.module.css";

interface PropsTasks {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onChecked: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onChecked }: PropsTasks) {
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
          <Task
            onCheked={onChecked}
            onDelete={onDelete}
            key={task.id}
            task={task}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.tasks_void}>
            <ClipboardText size={56} />
            <span>Você ainda não tem tarefas cadastradas </span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </section>
        )}
      </section>
    </div>
  );
}
