import React from "react";
import logo from "../assets/images/Logo.png";
import "./AppHeader.css";

const AppHeader = () => {
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
      </div>
    </div>
  );
};

export default AppHeader;
