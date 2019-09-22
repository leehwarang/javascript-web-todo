import React, { useState, useContext } from "react";
import "./Fold.scss";

export default function Fold({ toggle, onModulateWindow }) {
  return (
    <button class="Fold" onClick={e => onModulateWindow(e)}>
      {toggle ? "Fold" : "Unfold"}
    </button>
  );
}
