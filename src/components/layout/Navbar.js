import React from "react";

const Navbar = () => {
  return (
    <nav className={"navbar bg-dark"}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
        <li>
          <a href="#">Random</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
