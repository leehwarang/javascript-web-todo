import React, { useState, useContext } from "react";
import "./FoldBtn.scss";

export default function FoldBtn({ toggle, onModulateWindow }) {
  return (
    <button class="btn-fold" onClick={e => onModulateWindow(e)}>
      {toggle ? "Fold" : "Unfold"}
    </button>
  );
}
