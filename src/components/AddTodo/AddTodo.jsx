import React, { useState, useContext } from "react";
import { TodoContext } from "../../provider/ToDoStore";
import styled, { css } from "styled-components";
import propTypes from "prop-types";

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
    <form onSubmit={onSubmitHandler}>
      <Header>what is your One Small Step? </Header>
      <Input value={inputValue} onChange={onChangeHandler} type="text" />
      <Button>등록</Button>
    </form>
  );
};

const Header = styled.h1`
  font-family: Monospace;
  text-align: center;
  font-weight: 100;
`;

const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 1px solid black;
  width: 100%;
  height: 2.5em;
  margin-top: 1em;
  text-align: center;
  font-size: 1.2em;
`;

const Button = styled.button`
  background-color: #fbd14b;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  position: relative;
  left: 45%;
  margin-top: 50px;
  width: 7em;
  height: 3em;
`;

Input.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func
};

export default AddTodo;
