import React, { useState, useContext } from "react";
import { TodoContext } from "../../provider/ToDoStore";
import "./AddTodo.scss";

const AddTodo = () => {
  console.log("AddToDo");
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(TodoContext);

  const onChangeHandler = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: inputValue });
    setInputValue("");
  };

  return (
    <div className="AddTodo">
      <h1>To-Do List</h1>
      <p>what is your One Small Step? </p>
      <hr />
      <form onSubmit={onSubmitHandler}>
        <input
          value={inputValue}
          onChange={onChangeHandler}
          type="text"
          className="form-input"
          placeholder="{/* Hello, world! */}"
        />
        <button className="form-btn">ADD ITEM</button>
      </form>
    </div>
  );
};

export default AddTodo;
