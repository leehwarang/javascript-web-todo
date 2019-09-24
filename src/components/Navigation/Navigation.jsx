import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import All from "../All/All.jsx";
import Doing from "../Doing/Doing.jsx";
import Completed from "../Completed/Completed.jsx";
import FoldBtn from "../FoldBtn/FoldBtn.jsx";
import Error404 from "../Error404";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState(true);

  const ModulateWindow = e => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="navigation">
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
          <FoldBtn toggle={toggle} onModulateWindow={ModulateWindow} />
        </ul>

        <Switch>
          <Route exact path="/" render={props => <All toggle={toggle} />} />
          <Route
            exact
            path="/doing"
            render={props => <Doing toggle={toggle} />}
          />
          <Route
            exact
            path="/completed"
            render={props => <Completed toggle={toggle} />}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
      <hr />
    </div>
  );
};

export default Navigation;
