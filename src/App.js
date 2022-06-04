import React, { useState, useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import AppHeader from "./components/AppHeader";
import Banner from "./components/Banner";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [section, setSection] = useState("Home");
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position < 798) {
      setSection("Home");
    } else if (position >= 798) {
      setSection("About");
    }
    setScrollPosition(position);
  };
  useEffect(() => {
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
    </div>
  );
};

export default App;
