import React from "react";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";
import * as styles from "./TodoList.module.scss";

type Props = {
  todos: Todo[];
  toggleTodo: (id?: number) => void;
  deleteTodo: (id?: number) => void;
};

const TodoList: React.FC<Props> = ({
  todos,
  toggleTodo,
  deleteTodo,
}: Props) => {
  if (todos.length === 0)
    return <div className={styles.todoList}>No todos!</div>;

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
