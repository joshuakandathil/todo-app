import { fireEvent, render, screen } from "@testing-library/react";
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
    fireEvent.change(screen.getByPlaceholderText("Type a new todo.."), {
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
    const todo = screen.getByText("Toggle Todo");
    expect(todo).not.toHaveClass("completed");

    const checkbox = todo.parentElement?.querySelector(
      'input[type="checkbox"]'
    );
    if (!checkbox) throw new Error("Toggle checkbox not found");

    fireEvent.click(checkbox);

    expect(todo).toHaveClass("completed");
  });

  it("deletes a todo", () => {
    const testTodos = JSON.stringify([
      { text: "Delete Todo", completed: false, id: 1 },
    ]);
    Storage.prototype.getItem = jest.fn(() => testTodos);
    render(<TodoWrapper />);

    const todo = screen.getByText("Delete Todo");
    const deleteButton = todo.parentElement?.querySelector("button");
    if (!deleteButton) throw new Error("Delete button not found");

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Delete Todo")).not.toBeInTheDocument();
  });

  it("saves todos to localStorage on update", () => {
    const spy = jest.spyOn(Storage.prototype, "setItem");
    Storage.prototype.getItem = jest.fn(() => null);
    Date.now = jest.fn(() => 1);
    render(<TodoWrapper />);
    fireEvent.change(screen.getByPlaceholderText("Type a new todo.."), {
      target: { value: "Save Todo" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(spy).toHaveBeenCalledWith(
      "todos",
      JSON.stringify([{ text: "Save Todo", completed: false, id: 1 }])
    );
  });
});
