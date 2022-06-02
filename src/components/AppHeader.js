import React, { useState } from "react";
import logo from "../assets/images/Logo.png";
import "./AppHeader.css";

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (e) => {
    if (menuOpen) {
      e.target.classList.remove("fa-xmark");
      e.target.classList.add("fa-burger");
    } else {
      e.target.classList.remove("fa-burger");
      e.target.classList.add("fa-xmark");
    }
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="AppHeader">
      <div className="nav-bar">
        <div className="nav-logo">CN</div>
        <ul className="nav-link">
          <li className="nav-item">
            <a href="">Home</a>
          </li>
          <li className="nav-item">
            <a href="">About me</a>
          </li>
          <li className="nav-item">
            <a href="">My Projects</a>
          </li>
          <li className="nav-item">
            <a href="">Hire me</a>
          </li>
        </ul>
        <div className="nav-action" onClick={toggleMenu}>
          <i className="fa-solid fa-burger"></i>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
