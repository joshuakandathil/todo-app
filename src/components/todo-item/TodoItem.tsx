import React from "react";
import { Todo } from "../../models/Todo";
import * as styles from "./TodoItem.module.scss";

type Props = {
  todo: Todo;
  toggleTodo: (id?: number) => void;
  deleteTodo: (id?: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }: Props) => {
  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        style={{ marginRight: "10px" }}
      />

      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>

      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ marginLeft: "20px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
