import React, { useState, useEffect, useContext } from "react";
import ContentList from "../ContentList/ContentList.jsx";
import { TodoContext } from "../../provider/ToDoStore.jsx";

export default function Completed({ toggle }) {
  return (
    <div>
      <h2>‍👏 Congratulations! </h2>
      <div>
        <ul style={{ display: toggle ? "block" : "none" }}>
          <ContentList mode="done" />
        </ul>
      </div>
    </div>
  );
}
