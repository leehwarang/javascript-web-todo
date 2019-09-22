import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import All from "../All/All.jsx";
import Todo from "../Todo/Todo.jsx";
import Done from "../Done/Done.jsx";
import Fold from "../Fold/Fold.jsx";
import Error404 from "../Error404";
import "./NavTodo.scss";
import { NavLink } from "react-router-dom";

const NavTodo = () => {
  console.log("NavTodo");
  const [toggle, setToggle] = useState(true);

  const ModulateWindow = e => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="NavTodo">
      <BrowserRouter>
        <ul>
          <li className="category">
            <NavLink
              exact
              to="/"
              className="category-link"
              activeClassName="activeRoute"
            >
              || All
            </NavLink>
          </li>
          <li className="category">
            <NavLink
              to="/doing"
              className="category-link"
              activeClassName="activeRoute"
            >
              || Doing
            </NavLink>
          </li>
          <li className="category">
            <NavLink
              to="/completed"
              className="category-link"
              activeClassName="activeRoute"
            >
              || Completed
            </NavLink>
          </li>
          <Fold
            className="fold"
            toggle={toggle}
            onModulateWindow={ModulateWindow}
          />
        </ul>

        <Switch>
          <Route exact path="/" render={props => <All toggle={toggle} />} />
          <Route
            exact
            path="/doing"
            render={props => <Todo toggle={toggle} />}
          />
          <Route
            exact
            path="/completed"
            render={props => <Done toggle={toggle} />}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
      <hr />
    </div>
  );
};

export default NavTodo;
