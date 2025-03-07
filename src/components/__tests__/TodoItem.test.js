import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import TodoItem from "../TodoItem";

describe("TodoItem", () => {
  test("renders a todo item correctly", () => {
    const todo = {
      id: 1,
      title: "Setup development environment",
      status: "To-Do",
      completed: false,
    };

    render(
      <TodoItem
        todo={todo}
        handleChangeProps={jest.fn()}
        deleteTodoProps={jest.fn()}
      />
    );

    expect(screen.getByText("Setup development environment")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  })

  test("call 'handleChangeProps' when a todo is checked", () => {
    const todo = {
      id: 1,
      title: "Setup development environment",
      status: "To-Do",
      completed: false,
    };

    const handleChangeProps = jest.fn();
    
    render(
      <TodoItem
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={jest.fn()}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleChangeProps).toHaveBeenCalledWith(1);
  })

  test("call 'deleteTodoProps' when a todo is deleted", () => {
    const todo = {
      id: 1,
      title: "Setup development environment",
      status: "To-Do",
      completed: false,
    };

    const deleteTodoProps = jest.fn();
    
    render(
      <TodoItem
        todo={todo}
        handleChangeProps={jest.fn()}
        deleteTodoProps={deleteTodoProps}
      />
    );

    fireEvent.click(screen.getByText("Delete"));

    expect(deleteTodoProps).toHaveBeenCalledWith(1);
  })
})