import React, { useState } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import { Select } from "../UI/Select";
import "../../styles/ToDoForm.scss";

export function ToDoForm({ addTask, categories }) {
  const [task, setTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "" && selectedCategory !== "") {
      addTask(task, selectedCategory);
      setTask("");
      setSelectedCategory("");
    }
  };
  

  return (
    <>
      <div className="container-box">
        <form onSubmit={handleSubmit} className="form-field">
          <Button className="form-button" name="+" type="submit" />
          <Input
            type="text"
            placeholder="Add new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
         <Select 
            name="Select options"
          />
        </form>
      </div>
    </>
  );
}
