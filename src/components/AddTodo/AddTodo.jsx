import React, { useState, useContext } from "react";
import { TodoContext } from "../../provider/ToDoStore";
import "./AddTodo.scss";

const AddTodo = () => {
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
