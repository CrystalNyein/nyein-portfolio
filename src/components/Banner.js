import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner">
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="banner-wave"
      >
        <path
          fill="#6b4700"
          fillOpacity="1"
          d="M0,160L48,138.7C96,117,192,75,288,53.3C384,32,480,32,576,80C672,128,768,224,864,266.7C960,309,1056,299,1152,245.3C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
