import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { display } from "@material-ui/system";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const ShowTodo = props => {
  const [toggle, setToggle] = useState(true);

  const makeLiData = todos => {
    const arr = todos.map(data => {
      return (
        <LI
          onClick={() => {
            props.onChange(data);
          }}
          key={data.id}
        >
          {data.status === "todo" ? data.title : <del>{data.title}</del>}
          <IconButton
            id={data.id}
            onClick={e => {
              e.stopPropagation();
              props.onDelete(data);
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </LI>
      );
    });

    return arr;
  };

  const makeLiComponent = obj => {
    const todos = obj.data;
    const error = obj.error;
    const isEmpty = !todos.length;
    let result;

    if (error) {
      result = <li>데이터 요청 실패</li>;
    } else if (!isEmpty) {
      result = makeLiData(todos);
    } else {
      result = <li>없음</li>;
    }

    return result;
  };

  const ModulateWindow = e => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <DIV>
      <HEADER customAttr="test">해야할 일</HEADER>
      <Button color="secondary" onClick={e => ModulateWindow(e)}>
        {toggle ? "접기" : "펼치기"}
      </Button>
      <ul style={{ display: toggle ? "block" : "none" }}>
        {makeLiComponent(props)}
      </ul>
    </DIV>
  );
};

const DIV = styled.div`
  width: 45%;
  background-color: #dedcee;
  border-radius: 20px;
  margin-top: 4em;
`;

const HEADER = styled.h3`
  font-family: Monospace;
  text-align: center;
  font-weight: 400;
  font-size: 1.4em;
  padding-top: 0.5em;
`;

const LI = styled.li`
  font-family: Monospace;
  font-size: 1.4em;
  font-weight: 100;
  height: 2.4em;
`;

export default ShowTodo;
