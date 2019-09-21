import React, { useState, useContext } from "react";
import { TodoContext } from "../../provider/ToDoStore";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

const Counter = () => {
  console.log("Counter");
  const { todoCnt, doneCnt } = useContext(TodoContext);

  return (
    <>
      <CounterDIV>
        todo :<Fab color="primary">{todoCnt}</Fab>
        done : <Fab color="secondary">{doneCnt}</Fab>
      </CounterDIV>
    </>
  );
};

const CounterDIV = styled.div`
  font-family: Monospace;
  font-weight: 300;
  margin-top: 4em;
  text-align: right;
`;

export default Counter;
