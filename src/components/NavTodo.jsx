import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import All from "./All";
import Todo from "./Todo";
import Done from "./Done";
import Fold from "./Fold";
import Error404 from "./Error404";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const NavTodo = () => {
  console.log("NavTodo");
  const [toggle, setToggle] = useState(true);

  const ModulateWindow = e => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div>
      <BrowserRouter>
        <NavUl>
          <NavLi>
            <Link to="/">All</Link>
          </NavLi>
          <NavLi>
            <Link to="/todo">Todo</Link>
          </NavLi>
          <NavLi>
            <Link to="/done">Done</Link>
          </NavLi>
        </NavUl>
        <Fold toggle={toggle} onModulateWindow={ModulateWindow} />

        <Switch>
          <Route exact path="/" render={props => <All toggle={toggle} />} />
          <Route
            exact
            path="/todo"
            render={props => <Todo toggle={toggle} />}
          />
          <Route
            exact
            path="/done"
            render={props => <Done toggle={toggle} />}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default NavTodo;

const NavUl = styled.ul`
  height: 15%;
  margin: 2rem;
  display: flex;
  justify-content: space-around;
  font-size: 1.6rem;
`;

const NavLi = styled.li`
  display: inline-block;
`;
