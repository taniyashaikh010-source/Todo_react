import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task function
  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  // Delete Task function

// ye indextodelete ka name hum apni mrzi sy rakh skty hain 
 
  const handleDeleteTask = (indexToDelete) => {  
 
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };
//   const numbers = [10, 20, 30];
// const result = numbers.filter((_, i) => i !== 1);
// console.log(result); // [10, 30]

  return (
    <div className="todo-container">
      <h1 className="todo-title">My Todo List</h1>

      <div className="todo-input-section">
        <input
          type="text"
          placeholder="Enter your task..."
          className="todo-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-btn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <div className="todo-actions">
        <button className="complete-all-btn">Complete All</button>
        <button className="delete-all-btn">Delete All</button>
      </div>

      <ul className="todo-list">
        {tasks.map((t, index) => (
          <li key={index} className="todo-item">
            <span className="task-text">{t}</span>
            <div className="task-buttons">
              <button className="edit-btn">Edit</button>
              {/* Delete button with onClick */}
              <button
                className="delete-btn"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
