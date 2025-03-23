import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Layout from "./Styling/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="video-section">
        <video controls className="home-vid">
          <source
            src="/demo/assets/videos/landing-page-vid.MOV"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <img
        className="home-pic"
        src="/demo/assets/images/homepage-image.jpg"
        alt="Demo content"
      />
      <div className="about-section">
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
