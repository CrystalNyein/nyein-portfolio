import React, { useState, useRef } from "react";
import "./AppHeader.css";

const AppHeader = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navSection, setNavSection] = useState(props.section);
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
  const handleScroll = (navSec) => {
    props.setSection(navSection);
    setNavSection(navSec);
    switch (navSec) {
      case "Home":
        setScrollPosition(0);
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "About":
        setScrollPosition(798);
        window.scrollTo({ top: 798, behavior: "smooth" });
        break;
      case "Project":
        setScrollPosition(1596);
        window.scrollTo({ top: 1596, behavior: "smooth" });
        break;
      case "Hire":
        setScrollPosition(2394);
        window.scrollTo({ top: 2394, behavior: "smooth" });
        break;
    }
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
            className={navSection === "Home" ? "nav-item current" : "nav-item"}
          >
            <button
              onClick={() => {
                handleScroll("Home");
              }}
            >
              Home
            </button>
          </li>
          <li
            className={navSection === "About" ? "nav-item current" : "nav-item"}
          >
            <button
              onClick={() => {
                handleScroll("About");
              }}
            >
              About me
            </button>
          </li>
          <li
            className={
              navSection === "Project" ? "nav-item current" : "nav-item"
            }
          >
            <button
              onClick={() => {
                handleScroll("Projects");
              }}
            >
              My Projects
            </button>
          </li>
          <li
            className={navSection === "Hire" ? "nav-item current" : "nav-item"}
          >
            <button
              onClick={() => {
                handleScroll("Hire");
              }}
            >
              Hire me
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
