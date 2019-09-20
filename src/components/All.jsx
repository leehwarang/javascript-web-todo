import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "../provider/ToDoStore";
import TodoList from "./TodoList";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { display } from "@material-ui/system";
import Button from "@material-ui/core/Button";

export default function All({ toggle }) {
  console.log("All");
  const { dispatch } = useContext(TodoContext);

  const onChangeHandler = data => {
    dispatch({ type: "CHANGE_TODO", payload: data });
  };

  const onDeleteHandler = (e, data) => {
    e.stopPropagation();
    dispatch({ type: "DELETE_TODO", payload: data });
  };

  return (
    <div>
      <ShowDIV>
        <DIV>
          <HEADER customAttr="test">All</HEADER>
          <ul style={{ display: toggle ? "block" : "none" }}>
            <TodoList
              onChangeHandler={onChangeHandler}
              onDeleteHandler={onDeleteHandler}
              mode="all"
            />
          </ul>
        </DIV>
      </ShowDIV>
    </div>
  );
}

const DIV = styled.div`
  width: 45%;
  background-color: #dedcee;
  border-radius: 20px;
  margin-top: 3em;
`;

const HEADER = styled.h3`
  font-family: Monospace;
  text-align: center;
  font-weight: 400;
  font-size: 1.4em;
  padding-top: 0.5em;
`;

const ShowDIV = styled.div`
  display: flex;
  justify-content: space-around;
`;
