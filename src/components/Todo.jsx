import React, { useState, useEffect, useContext } from "react";
import TodoList from "./TodoList";
import { TodoContext } from "../provider/ToDoStore";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { display } from "@material-ui/system";
import Button from "@material-ui/core/Button";

export default function Todo() {
  // Store에서 받아온 todoData 중 todo만 골라서 보여주기
  const [toggle, setToggle] = useState(true);
  const { dispatch } = useContext(TodoContext);

  const onChangeHandler = data => {
    dispatch({ type: "CHANGE_TODO", payload: data });
  };

  const onDeleteHandler = (e, data) => {
    e.stopPropagation();
    dispatch({ type: "DELETE_TODO", payload: data });
  };

  const ModulateWindow = e => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div>
      Todo
      <ShowDIV>
        <DIV>
          <HEADER customAttr="test">해야할 일</HEADER>
          <Button color="secondary" onClick={e => ModulateWindow(e)}>
            {toggle ? "접기" : "펼치기"}
          </Button>
          <ul style={{ display: toggle ? "block" : "none" }}>
            <TodoList
              onChangeHandler={onChangeHandler}
              onDeleteHandler={onDeleteHandler}
              mode="todo"
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
