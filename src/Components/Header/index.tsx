import styles from "./header.module.css";
import logo from "../../assets/rocket.svg";
import { PlusCircle } from "phosphor-react";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <img src={logo} alt="" />
        <h1>
          to<span>do</span>
        </h1>
      </div>

      <form className={styles.header_form}>
        <input placeholder="Adicione uma nova tarefa" type="text" />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
