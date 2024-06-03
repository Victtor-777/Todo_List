import { useState } from "react";
import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";

export interface ITask {
  id: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "01",
      description: "Tarefa 01 lorem sadlasda dsadasdas",
      isCompleted: true,
    },
    {
      id: "02",
      description: "Tarefa 02 lorem sadlasda dsadasdas",
      isCompleted: false,
    },
  ]);

  function addTask() {
    event?.preventDefault();
  }

  return (
    <>
      <Header />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
