import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./task.module.css";
import { ITask } from "../../App";

interface PropsTask {
  task: ITask;
  onDelete: (taskId: string) => void;
  onCheked: (taskId: string) => void;
}

export function Task({ task, onDelete, onCheked }: PropsTask) {
  function handleChecked() {
    onCheked(task.id);
  }

  function handleDelete() {
    onDelete(task.id);
  }

  return (
    <div>
      <div
        className={`${styles.task} ${
          task.isCompleted ? styles.task_completed : ""
        }`}
      >
        {task.isCompleted ? (
          <button onClick={handleChecked}>
            <CheckCircle weight="fill" size={24} color="#4EA8DE" />
          </button>
        ) : (
          <button onClick={handleChecked}>
            <Circle weight="bold" size={24} color="#4EA8DE" />
          </button>
        )}
        <p>{task.description}</p>
        <button>
          <Trash
            onClick={handleDelete}
            className={styles.task_delete}
            size={20}
          />
        </button>
      </div>
    </div>
  );
}
