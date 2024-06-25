import React, { useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import * as styles from "./TodoWrapper.module.scss";

const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    todos.length && localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, completed: false, id: Date.now() }];
    setTodos(newTodos);
  };

  const toggleTodo = (id?: number) => {
    if (!id) return;

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const deleteTodo = (id?: number) => {
    if (!id) return;
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className={styles.todos}>
      <h2>Todo List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoWrapper;
