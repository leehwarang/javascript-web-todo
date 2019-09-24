import React, { useState, useReducer, useContext, useMemo } from "react";
import useFetch from "../customHooks/useFetch";
import TodoReducer from "../reducer/TodoReducer";
import propTypes from "prop-types";

export const TodoContext = React.createContext({});

export const ToDoStore = ({ children }) => {
  const [datas, dispatch] = useReducer(TodoReducer, []);
  const [error, setError] = useState(false);

  const errorHandler = e => {
    console.log(e);
    setError(true);
  };

  const setInitTodoData = data => {
    return dispatch({ type: "INIT_TODO", payload: data });
  };

  const loading = useFetch(setInitTodoData, URL, errorHandler);

  const { todoCnt, doneCnt } = useMemo(() => filterdData(datas), [datas]);

  return (
    <>
      <TodoContext.Provider
        value={{ datas, error, loading, dispatch, todoCnt, doneCnt }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};

const filterdData = arr => {
  const todoCnt = arr.filter(v => v.status === "todo").length;
  const doneCnt = arr.filter(v => v.status === "done").length;

  return {
    todoCnt: todoCnt,
    doneCnt: doneCnt
  };
};

TodoContext.Provider.propTypes = {
  datas: propTypes.array,
  error: propTypes.bool,
  loading: propTypes.bool,
  todoCnt: propTypes.number,
  doneCnt: propTypes.number
};
