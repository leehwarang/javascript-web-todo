import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";

export default function Fold({ toggle, onModulateWindow }) {
  return (
    <>
      <Button color="secondary" onClick={e => onModulateWindow(e)}>
        {toggle ? "접기" : "펼치기"}
      </Button>
    </>
  );
}
