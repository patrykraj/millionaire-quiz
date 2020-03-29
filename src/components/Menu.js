import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Menu.css";

const routes = [
  { name: "start", path: "/game" },
  { name: "ranking", path: "/ranking" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" }
];

const Menu = () => {
  const links = routes.map(route => (
    <NavLink className="link" key={route.name} to={route.path}>
      {route.name}
    </NavLink>
  ));

  return <ul className="menu--links">{links}</ul>;
};

export default Menu;
