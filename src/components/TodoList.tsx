import React from "react";
import TodoItem from "./TodoItem";

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
  if (todos.length === 0) return <div className="todo-list">No todos!</div>;

  return (
    <div className="todo-list">
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
