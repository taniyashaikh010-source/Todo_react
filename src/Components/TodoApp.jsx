import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]); // each task: { text, completed }
  const [editIndex, setEditIndex] = useState(null);

  // Add Task
  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  // Edit Task
  const handleEditTask = (index) => {
    setTask(tasks[index].text);
    setEditIndex(index);
  };

  // Update Task
  const handleUpdateTask = () => {
    if (task.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[editIndex].text = task;
    setTasks(updatedTasks);
    setEditIndex(null);
    setTask("");
  };

  // Delete Single Task
  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  // Delete All Tasks
  const handleDeleteAll = () => {
    setTasks([]);
  };

  // Complete Single Task
  const handleCompleteTask = (indexToComplete) => {
    const updatedTasks = [...tasks];
    updatedTasks[indexToComplete].completed = true;
    setTasks(updatedTasks);
  };

  //  Complete All Tasks (change color for all)
  const handleCompleteAll = () => {
    const updatedTasks = tasks.map((t) => ({ ...t, completed: true }));
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">My Todo List</h1>

      {/* Top buttons: Complete All + Delete All */}
      {tasks.length > 0 && (
        <div className="top-buttons">
          <button className="complete-all-btn" onClick={handleCompleteAll}>
            Complete All
          </button>
          <button className="delete-all-btn" onClick={handleDeleteAll}>
            Delete All
          </button>
        </div>
      )}

      {/* Input + Add/Update Button */}
      <div className="todo-input-section">
        <input
          type="text"
          placeholder="Enter your task..."
          className="todo-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {editIndex !== null ? (
          <button className="add-btn" onClick={handleUpdateTask}>
            Update Task
          </button>
        ) : (
          <button className="add-btn" onClick={handleAddTask}>
            Add Task
          </button>
        )}
      </div>

      {/* Task List */}
      <ul className="todo-list">
        {tasks.map((t, index) => (
          <li
            key={index}
            className={`todo-item ${t.completed ? "completed-item" : ""}`}
          >
            <span className="task-text">{t.text}</span>
            <div className="task-buttons">
              {/*  Complete Button */}
              {!t.completed && (
                <button
                  className="complete-btn"
                  onClick={() => handleCompleteTask(index)}
                >
                  Complete
                </button>
              )}

              <button
                className="edit-btn"
                onClick={() => handleEditTask(index)}
              >
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
