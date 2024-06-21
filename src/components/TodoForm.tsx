import React, { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  addTodo: (text: string) => void;
};

const TodoForm = ({ addTodo }: Props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value?.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type a new todo.."
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
