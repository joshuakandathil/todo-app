import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoWrapper from "./TodoWrapper";

describe("TodoWrapper", () => {
  it("initially loads saved todos from localStorage", () => {
    const testTodos = JSON.stringify([
      { text: "Test Todo", completed: false, id: 1 },
    ]);
    Storage.prototype.getItem = jest.fn(() => testTodos);
    render(<TodoWrapper />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  it("adds a new todo", () => {
    Storage.prototype.getItem = jest.fn(() => null);
    render(<TodoWrapper />);
    fireEvent.change(screen.getByPlaceholderText("Add new todo"), {
      target: { value: "New Todo" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  it("toggles todo completion", () => {
    const testTodos = JSON.stringify([
      { text: "Toggle Todo", completed: false, id: 1 },
    ]);
    Storage.prototype.getItem = jest.fn(() => testTodos);
    render(<TodoWrapper />);
    fireEvent.click(screen.getByLabelText("Toggle Todo"));
    expect(screen.getByLabelText("Toggle Todo").parentElement).toHaveClass(
      "completed"
    );
  });

  it("deletes a todo", () => {
    const testTodos = JSON.stringify([
      { text: "Delete Todo", completed: false, id: 1 },
    ]);
    Storage.prototype.getItem = jest.fn(() => testTodos);
    render(<TodoWrapper />);
    fireEvent.click(screen.getByLabelText("Delete Delete Todo"));
    expect(screen.queryByText("Delete Todo")).not.toBeInTheDocument();
  });

  it("saves todos to localStorage on update", () => {
    const spy = jest.spyOn(Storage.prototype, "setItem");
    Storage.prototype.getItem = jest.fn(() => null);
    render(<TodoWrapper />);
    fireEvent.change(screen.getByPlaceholderText("Add new todo"), {
      target: { value: "Save Todo" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(spy).toHaveBeenCalledWith(
      "todos",
      JSON.stringify([
        { text: "Save Todo", completed: false, id: expect.any(Number) },
      ])
    );
  });
});
