import React, { useState, useRef } from "react";
import "./AppHeader.css";

const AppHeader = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLink = useRef(null);
  const toggleMenu = (e) => {
    if (menuOpen) {
      e.target.classList.remove("fa-xmark");
      e.target.classList.add("fa-burger");
      navLink.current.classList.remove("active");
    } else {
      e.target.classList.remove("fa-burger");
      e.target.classList.add("fa-xmark");
      navLink.current.classList.add("active");
    }
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="AppHeader">
      <div className="nav-bar">
        <div className="nav-mobile">
          <div className="nav-logo">CN</div>
          <div className="nav-action" onClick={toggleMenu}>
            <i className="fa-solid fa-burger"></i>
          </div>
        </div>
        <ul className="nav-link" ref={navLink}>
          <li
            className={
              props.section == "Home" ? "nav-item current" : "nav-item"
            }
          >
            <a href="">Home</a>
          </li>
          <li
            className={
              props.section == "About" ? "nav-item current" : "nav-item"
            }
          >
            <a href="">About me</a>
          </li>
          <li
            className={
              props.section == "Project" ? "nav-item current" : "nav-item"
            }
          >
            <a href="">My Projects</a>
          </li>
          <li
            className={
              props.section == "Hire" ? "nav-item current" : "nav-item"
            }
          >
            <a href="">Hire me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
