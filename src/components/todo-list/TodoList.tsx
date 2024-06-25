import React, { useState } from "react";
import { Filter, Todo } from "../../models/Todo";
import TodoItem from "../todo-item/TodoItem";
import TodoFilters from "../todo-filters/TodoFilters";
import * as styles from "./TodoList.module.scss";
import { log } from "console";

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
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTodos =
    filter == "all"
      ? todos
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  return (
    <div className={styles.todoList}>
      <div className="filters">
        <TodoFilters
          selected={filter}
          onSelectFilter={(filter) => {
            console.log(filter);
            setFilter(filter);
          }}
        />
      </div>

      {!filteredTodos.length && <div>No todos!</div>}

      {!!filteredTodos.length && (
        <div className="list">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={() => toggleTodo(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
