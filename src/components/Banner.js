import React from "react";
import "./Banner.css";
import laptop from "../assets/images/laptop.png";

const Banner = () => {
  return (
    <div id="Banner" className="Banner">
      <div className="banner-text">
        <h1 className="banner-title">
          Hello! I'm <span>Nyein.</span>
        </h1>
        <p className="banner-detail">
          I have learnt website development in several languages. I have
          experiences in writing Frontend, Backend as well as Database. I'm
          flexible using different languages. Check out my projects below!
        </p>
        <button className="btn banner-btn">View Projects</button>
      </div>
      <div className="banner-img">
        <img src={laptop} alt="Girl using laptop" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="banner-wave"
      >
        <path
          fill="#6b4700"
          fillOpacity="1"
          d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,165.3C672,160,768,192,864,197.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
