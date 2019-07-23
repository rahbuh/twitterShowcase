import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={"navbar"}>
      <span className={"title"}>Twitter Showcase</span>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/search">Search</NavLink></li>
        <li><NavLink to="/favorites">Favorites</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
