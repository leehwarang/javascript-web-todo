import React, { useState, useContext } from "react";
import { TodoContext } from "../../provider/ToDoStore";
import "./Counter.scss";

const Counter = () => {
  const { todoCnt, doneCnt } = useContext(TodoContext);

  return (
    <div className="counter">
      Doing : {todoCnt} || Completed : {doneCnt}
    </div>
  );
};

export default Counter;
