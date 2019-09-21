import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ToDoStore } from "../../provider/ToDoStore";
import AddTodo from "../AddTodo/AddTodo.jsx";
import Counter from "../Counter/Counter.jsx";
import NavTodo from "../NavTodo/NavTodo.jsx";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToDoStore>
        <AddTodo />
        <Counter />
        <NavTodo />
      </ToDoStore>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fffcf0;
    max-width: 800px;
    margin: 0 auto;
    font-family: Monospace;
  }
`;

export default App;
