import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Counter from "./Counter";
import Navigation from "./Navigation";

const Manage = () => {
  return (
    <>
      <AddTodo />
      <Counter />
      <Navigation />
    </>
  );
};

export default Manage;
