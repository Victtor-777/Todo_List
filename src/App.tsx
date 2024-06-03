import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";
import { v4 as uuidv4 } from "uuid";
import { ITask } from "./App";

export interface ITask {
  id: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem("@ignite:todolist");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem("@ignite:todolist", JSON.stringify(newTasks));
  }

  function addTask(taskDescription: string) {
    setTasksAndSave([
      ...tasks,
      {
        id: uuidv4(),
        description: taskDescription,
        isCompleted: false,
      },
    ]);
  }

  function toggleCompletedTask(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function deleteTask(taskId: string) {
    const filterTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(filterTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onChecked={toggleCompletedTask}
      />
    </>
  );
}

export default App;
