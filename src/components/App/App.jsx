import React from "react";
import { ToDoStore } from "../../provider/ToDoStore";
import AddTodo from "../AddTodo/AddTodo.jsx";
import Counter from "../Counter/Counter.jsx";
import NavTodo from "../NavTodo/NavTodo.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <ToDoStore>
        <AddTodo />
        <Counter />
        <NavTodo />
      </ToDoStore>
    </div>
  );
};

export default App;
