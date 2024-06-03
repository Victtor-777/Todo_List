import { useState } from "react";
import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";
import { v4 as uuidv4 } from "uuid";

export interface ITask {
  id: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskDescription: string) {
    setTasks([
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
    setTasks(newTasks);
  }

  function deleteTask(taskId: string) {
    const filterTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filterTasks);
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
