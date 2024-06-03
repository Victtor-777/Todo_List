import { Circle, Trash } from "phosphor-react";
import styles from "./task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <Circle weight="bold" size={24} color="#4EA8DE" />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <Trash className={styles.task_delete} size={20} />
    </div>
  );
}
