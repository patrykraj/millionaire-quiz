import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Menu.module.css";

const routes = [
  { name: "start", path: "/game" },
  { name: "ranking", path: "/ranking" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];

const Menu = () => {
  const links = routes.map((route) => (
    <NavLink className={classes.Link} key={route.name} to={route.path}>
      {route.name}
    </NavLink>
  ));

  return <ul className={classes.MenuLinks}>{links}</ul>;
};

export default Menu;
