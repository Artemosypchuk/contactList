import React from "react";
import "./mainMenu.css";
import { Link } from "react-router-dom";
const MainMenu = () => {
  return (
    <div className="row">
      <nav className="col-8 offset-2">
        <ul className="nav justify-content-center p-2">
          <li className="nav-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/add">
              Add Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MainMenu;
