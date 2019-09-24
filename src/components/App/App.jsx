import React from "react";
import { ToDoStore } from "../../provider/ToDoStore";
import AddTodo from "../AddTodo/AddTodo.jsx";
import Counter from "../Counter/Counter.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import Header from "../Header/Header.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <ToDoStore>
        <AddTodo />
        <Counter />
        <Navigation />
      </ToDoStore>
    </div>
  );
};

export default App;
