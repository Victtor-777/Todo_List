import styles from "./header.module.css";
import logo from "../../assets/rocket.svg";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface PropsHeader {
  onAddTask: (taskDescription: string) => void;
}

export function Header({ onAddTask }: PropsHeader) {
  const [description, setDescription] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(description);
    setDescription("");
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <img src={logo} alt="" />
        <h1>
          to<span>do</span>
        </h1>
      </div>

      <form className={styles.header_form} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={description}
          placeholder="Adicione uma nova tarefa"
          type="text"
        />
        <button>
          Criar
          <PlusCircle weight="bold" size={20} />
        </button>
      </form>
    </div>
  );
}
