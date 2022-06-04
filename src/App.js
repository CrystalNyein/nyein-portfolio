import "./App.css";
import AboutMe from "./components/AboutMe";
import AppHeader from "./components/AppHeader";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Banner />
      <AboutMe />
    </div>
  );
};

export default App;
