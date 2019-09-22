import React, { useState, useEffect, useContext } from "react";
import TodoList from "../TodoList/TodoList.jsx";
import { TodoContext } from "../../provider/ToDoStore";

export default function Todo({ toggle }) {
  console.log("Todo");

  return (
    <div>
      <h2>‍🚀 Cheer Up Bro!</h2>

      <div>
        <ul style={{ display: toggle ? "block" : "none" }}>
          <TodoList mode="todo" />
        </ul>
      </div>
    </div>
  );
}
