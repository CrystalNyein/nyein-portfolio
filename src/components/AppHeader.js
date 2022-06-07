import React, { useState, useRef, useEffect } from "react";
import "./AppHeader.css";

const AppHeader = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState("Home");
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
    setSection(navSec);
    switch (navSec) {
      case "Home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "About":
        window.scrollTo({ top: props.sectionPosition[1], behavior: "smooth" });
        break;
      case "Project":
        window.scrollTo({ top: props.sectionPosition[2], behavior: "smooth" });
        break;
      case "Hire":
        window.scrollTo({ top: props.sectionPosition[3], behavior: "smooth" });
        break;
    }
  };
  const setSectionVar = () => {
    const position = window.pageYOffset;
    if (position < props.sectionPosition[1]) {
      setSection("Home");
    } else if (position < props.sectionPosition[2]) {
      setSection("About");
    } else if (position < props.sectionPosition[3]) {
      setSection("Project");
    } else {
      setSection("Hire");
    }
  };
  useEffect(() => {
    setSectionVar();
    window.addEventListener("scroll", setSectionVar, { passive: true });
    return () => {
      window.removeEventListener("scroll", setSectionVar);
    };
  }, []);
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
          <li className={section === "Home" ? "nav-item current" : "nav-item"}>
            <button
              onClick={() => {
                handleScroll("Home");
              }}
            >
              Home
            </button>
          </li>
          <li className={section === "About" ? "nav-item current" : "nav-item"}>
            <button
              onClick={() => {
                handleScroll("About");
              }}
            >
              About me
            </button>
          </li>
          <li
            className={section === "Project" ? "nav-item current" : "nav-item"}
          >
            <button
              onClick={() => {
                handleScroll("Projects");
              }}
            >
              My Projects
            </button>
          </li>
          <li className={section === "Hire" ? "nav-item current" : "nav-item"}>
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
