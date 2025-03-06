import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, title, handleChangeProps, deleteTodoProps }) => {
  return (
    <div className="list">
      <h3>{title}</h3>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </div>
  );
}

export default TodosList;
