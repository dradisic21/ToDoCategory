import React, { useState, useEffect } from "react";
import { ToDoForm } from "../components/ToDoForm/ToDoForm";
import { ToDoList } from "../components/ToDoList/ToDoList";
import "../styles/ToDoListPage.scss";
import { HeaderInfo } from "../components/HeaderInfo/HeaderInfo";

export function ToDoListPage() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return storedTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(newTask) {
    setTasks([...tasks, { text: newTask, created: new Date(), completed: false }]);
  }

  function toggleTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  

  return (
    <div className="container-main">
      <HeaderInfo />
      <ToDoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}
