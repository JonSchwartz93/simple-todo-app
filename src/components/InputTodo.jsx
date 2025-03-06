import React, { useState } from "react";

const InputTodo = ({ addTodoProps }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.length) {
      return setError("Please create a title before adding a To-Do");
    };

    addTodoProps(title);
    setTitle("");
    setError(null)
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={onChange}
        />
        <input type="submit" className="input-submit" value="Submit" />
      </form>
      {error && <p>{error}</p>}
    </>
  );
}
export default InputTodo;
