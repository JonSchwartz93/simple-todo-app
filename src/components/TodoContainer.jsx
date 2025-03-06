import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

const initialTodos = [
  {
    id: 1,
    title: "Setup development environment",
    status: "To-Do",
    completed: true,
  },
  {
    id: 2,
    title: "Develop website and add content",
    status: "In-Progress",
    completed: false,
  },
  {
    id: 3,
    title: "Deploy to live server",
    status: "Done",
    completed: false,
  },
];

const initialLists = [
  {
    id: 1,
    title: "To-Do",
    description: "Tasks that haven't been started",
    todos: [],
  },
  {
    id: 2,
    title: "In-Progress",
    description: "Tasks that are in-flight",
    todos: [],
  },
  {
    id: 3,
    title: "Done",
    description: "Tasks that are complete",
    todos: [],
  }
];

const TodoContainer = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [lists, setLists] = useState(initialLists);

  const handleChange = (id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.completed = !updatedTodo.completed;
    setTodos([...todos]);
  };

  const delTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodoItem = (title, status) => {
    const newTodo = {
      id: Math.random(),
      title: title,
      status: status,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

    return (
      <div className="container">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <div className="list-container">
          {
            lists.map(list => {
              return (
                <TodosList
                  key={list.id}
                  todos={todos}
                  list={list}
                  handleChangeProps={handleChange}
                  deleteTodoProps={delTodo}
                />
              )
            }
          )
        }
        </div>
      </div>
    );
}

export default TodoContainer;
