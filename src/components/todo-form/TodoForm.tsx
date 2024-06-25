import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as styles from "./TodoForm.module.scss";

type Props = {
  addTodo: (text: string) => void;
};

type FormData = {
  todo: string;
};

const TodoForm: React.FC<Props> = ({ addTodo }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    addTodo(data.todo);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.todoForm}>
      <div className="form-control">
        <input
          {...register("todo", { required: true })}
          type="text"
          placeholder="Type a new todo.."
        />

        {errors.todo?.type === "required" && (
          <span className="error">This field is required</span>
        )}
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
