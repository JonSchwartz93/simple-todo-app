import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, list, handleChangeProps, deleteTodoProps }) => {
  return (
    <div className="list">
      <h4>{list.title}</h4>
      {todos.map((todo) => {
        return todo.status === list.title &&
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
          />
      })}
    </div>
  );
}

export default TodosList;
