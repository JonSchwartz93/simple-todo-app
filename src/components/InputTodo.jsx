import React, { useState } from "react";

const InputTodo = ({ addTodoProps }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("To-Do");
  const [error, setError] = useState(null);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.length) {
      return setError("**Please add a title");
    };

    addTodoProps(title, status);
    setTitle("");
    setStatus("To-Do")
    setError(null)
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container" id="todo-form">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={onTitleChange}
        />
        <select value={status} onChange={onStatusChange} name="todos" id="todo-status" form="todo-form">
          <option value="" disabled>Status</option>
          <option value="To-Do">To-Do</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Done">Done</option>
        </select>
        <input type="submit" className="input-submit" value="Submit" />
      </form>
      {error && <p className="error-message">{error}</p>}
    </>
  );
}
export default InputTodo;
