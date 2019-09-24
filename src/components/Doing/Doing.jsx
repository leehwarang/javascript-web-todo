import React, { useState, useEffect, useContext } from "react";
import ContentList from "../ContentList/ContentList.jsx";
import { TodoContext } from "../../provider/ToDoStore";

export default function Doing({ toggle }) {
  return (
    <div>
      <h2>‍🚀 Cheer Up Bro!</h2>

      <div>
        <ul style={{ display: toggle ? "block" : "none" }}>
          <ContentList mode="todo" />
        </ul>
      </div>
    </div>
  );
}
