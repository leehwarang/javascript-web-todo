import React, { useContext } from "react";
import { TodoContext } from "../../provider/ToDoStore";
import styled, { css } from "styled-components";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import propTypes from "prop-types";

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
        <LI onClick={() => onChangeHandler(content)} key={content.id}>
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
        </LI>
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

const LI = styled.li`
  font-family: Monospace;
  font-size: 1.4em;
  font-weight: 100;
  height: 2.4em;
`;
