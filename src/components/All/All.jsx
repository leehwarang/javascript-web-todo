import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "../../provider/ToDoStore";
import ContentList from "../ContentList/ContentList.jsx";

export default function All({ toggle }) {
  console.log("All");

  return (
    <div>
      <h2>‍🏃🏻‍♀️ It's up to you!</h2>
      <div>
        <ul style={{ display: toggle ? "block" : "none" }}>
          <ContentList mode="all" />
        </ul>
      </div>
    </div>
  );
}
