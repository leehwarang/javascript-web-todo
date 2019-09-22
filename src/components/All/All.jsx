import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "../../provider/ToDoStore";
import TodoList from "../TodoList/TodoList.jsx";

export default function All({ toggle }) {
  console.log("All");

  return (
    <div>
      <h2>‍🏃🏻‍♀️ It's up to you!</h2>
      <div>
        <ul style={{ display: toggle ? "block" : "none" }}>
          <TodoList mode="all" />
        </ul>
      </div>
    </div>
  );
}
