import React, { useState, useEffect, useContext } from "react";
import TodoList from "../TodoList/TodoList.jsx";
import { TodoContext } from "../../provider/ToDoStore.jsx";

export default function Done({ toggle }) {
  console.log("Done");

  return (
    <div>
      <h2>‍👏 Congratulations! </h2>
      <div>
        <ul style={{ display: toggle ? "block" : "none" }}>
          <TodoList mode="done" />
        </ul>
      </div>
    </div>
  );
}
