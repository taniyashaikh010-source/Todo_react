import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // 👈 for tracking which task to edit

  // Add or Update Task function
  const handleAddTask = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      // Update existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null); // reset edit mode
      setTask("");
    } else {
      // Add new task
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // Delete Task function
  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  // Edit Task function
  const handleEditTask = (index) => {
    setTask(tasks[index]); // put task in input box
    setEditIndex(index); // set current editing index
  };

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
          {editIndex !== null ? "Update Task" : "Add Task"}
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
              <button className="edit-btn" onClick={() => handleEditTask(index)}>
                Edit
              </button>
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
