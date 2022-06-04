import React, { useState, useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import AppHeader from "./components/AppHeader";
import Banner from "./components/Banner";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [section, setSection] = useState("");
  const setSectionVar = () => {
    const position = window.pageYOffset;
    if (position < 798) {
      setSection("Home");
    } else if (position < 1596) {
      setSection("About");
    } else if (position < 2394) {
      setSection("Project");
    } else if (position < 3192) {
      setSection("Hire");
    }
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSectionVar();
    setScrollPosition(position);
  };
  useEffect(() => {
    setSectionVar();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <AppHeader section={section} setSection={setSection} />
      <Banner />
      <AboutMe />
      <AboutMe />
    </div>
  );
};

export default App;
