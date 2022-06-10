import React, { useEffect, useRef } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import AppHeader from "./components/AppHeader";
import Banner from "./components/Banner";
import Project from "./components/Project";

const sectionPosition = [0, 0, 0, 0];

const App = () => {
  const secRef1 = useRef(null);
  const secRef2 = useRef(null);
  // const secRef3 = useRef(null);
  useEffect(() => {
    sectionPosition[1] = secRef1.current.offsetTop - 72;
    sectionPosition[2] = secRef2.current.offsetTop + 737;
    sectionPosition[3] = sectionPosition[2] + 737;
  }, []);
  return (
    <div className="App">
      <AppHeader sectionPosition={sectionPosition} />
      <Banner />
      <AboutMe forwardedRef={secRef1} />
      <Project forwardedRef={secRef2} />
    </div>
  );
};

export default App;
