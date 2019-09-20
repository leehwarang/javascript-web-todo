import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ToDoStore } from "../provider/ToDoStore";
import Manage from "./Manage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToDoStore>
        <Manage />
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
