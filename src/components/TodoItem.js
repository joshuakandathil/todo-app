import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
        style={{ marginRight: "10px" }}
      />

      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>

      <button
        className="delete"
        onClick={deleteTodo}
        style={{ marginLeft: "20px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
