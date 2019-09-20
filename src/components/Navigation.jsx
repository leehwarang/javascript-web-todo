import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import All from "./All";
import Todo from "./Todo";
import Done from "./Done";
import Error404 from "./Error404";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Navigation = () => {
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

        <Switch>
          <Route exact path="/" component={All} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/done" component={Done} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;

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
