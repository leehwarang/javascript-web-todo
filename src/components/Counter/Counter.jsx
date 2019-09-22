import React, { useState, useContext } from "react";
import { TodoContext } from "../../provider/ToDoStore";
import "./Counter.scss";

const Counter = () => {
  console.log("Counter");
  const { todoCnt, doneCnt } = useContext(TodoContext);

  return (
    <div className="Counter">
      Doing : {todoCnt} || Completed : {doneCnt}
    </div>
  );
};

export default Counter;
