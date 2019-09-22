import React, { useContext } from "react";
import { TodoContext } from "../../provider/ToDoStore";
import "./TodoList.scss";
import styled, { css } from "styled-components";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = ({ mode }) => {
  const { datas, error, loading, dispatch } = useContext(TodoContext);

  const onChangeHandler = data => {
    dispatch({ type: "CHANGE_TODO", payload: data });
  };

  const onDeleteHandler = (e, data) => {
    e.stopPropagation();
    dispatch({ type: "DELETE_TODO", payload: data });
  };

  const makeLiData = (datas, mode) => {
    let contents = datas;

    if (mode !== "all") {
      contents = contents.filter(content => content.status === mode);
    }

    return contents.map(content => {
      return (
        <li
          onClick={() => onChangeHandler(content)}
          key={content.id}
          className="todo-list"
        >
          {content.status === "todo" ? (
            content.title
          ) : (
            <del>{content.title}</del>
          )}
          <IconButton
            id={content.id}
            onClick={e => onDeleteHandler(e, content)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </li>
      );
    });
  };

  const makeLiComponent = (datas, mode) => {
    const isEmpty = !datas.length;

    const result = isEmpty ? <li>없음</li> : makeLiData(datas, mode);
    return result;
  };

  return (
    <>
      {error && <li>네트워크 요청 실패</li>}
      {loading && <li>로딩중...</li>}
      {!error && !loading && makeLiComponent(datas, mode)}
    </>
  );
};

export default TodoList;
