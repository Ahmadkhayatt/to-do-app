import React, { useState } from "react";
import { use } from "react";

function TDL() {
  const [tasks, setTasks] = useState(["Shower", "study", "draw"]);
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function DeleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }
  function moveUp(index) {
    if (index > 0) {
      const updatedtask = [...tasks];

      [updatedtask[index], updatedtask[index - 1]] = [
        updatedtask[index - 1],
        updatedtask[index],
      ];
      setTasks(updatedtask);
    }
  }
  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedtask = [...tasks];

      [updatedtask[index], updatedtask[index + 1]] = [
        updatedtask[index + 1],
        updatedtask[index],
      ];
      setTasks(updatedtask);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <input
        type="text"
        onChange={handleChange}
        value={newTask}
        className="creative-input"
        placeholder="Enter a task"
      />
      <button className="creative-btn" onClick={addTask}>
        AddTask
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>

            <button className="delete-btn" onClick={() => DeleteTask(index)}>
              Delete
            </button>
            <button className="move-up-btn" onClick={() => moveUp(index)}>
              👆
            </button>
            <button className="move-down-btn" onClick={() => moveDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default TDL;
