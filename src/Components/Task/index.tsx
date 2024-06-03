import { Circle, Trash } from "phosphor-react";
import styles from "./task.module.css";
import { ITask } from "../../App";

interface PropsTask {
  task: ITask;
}

export function Task({ task }: PropsTask) {
  return (
    <div className={styles.task}>
      <Circle weight="bold" size={24} color="#4EA8DE" />
      <p>{task.description}</p>
      <Trash className={styles.task_delete} size={20} />
    </div>
  );
}
