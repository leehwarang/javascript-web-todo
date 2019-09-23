import React, { useContext } from "react";
import { TodoContext } from "../../provider/ToDoStore";
import "./ContentList.scss";
import { IconButton } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";

const ContentList = ({ mode }) => {
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
        <li className="todo-list">
          {content.status === "todo" ? (
            content.title
          ) : (
            <del>{content.title}</del>
          )}
          <IconButton
            id={content.id}
            onClick={e => onDeleteHandler(e, content)}
            className="btn-icon"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => onChangeHandler(content)}
            key={content.id}
            className="btn-icon"
          >
            <DoneIcon />
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

export default ContentList;
