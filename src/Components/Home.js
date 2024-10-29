import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../Assets/farm.png";
import BannerBackground from "../Assets/homeBg.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import "./scrollbar.css";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden px-24">
        {/* Background Image */}
        <div
          style={{
            backgroundImage: `url(${BannerBackground})`,
          }}
          className="absolute inset-0 h-full w-full bg-cover bg-fixed opacit-60 -z-10 parallax-bg"
        ></div>

        {/* Fade Overlay */}
        {/* <div className="absolute inset-0 h-full w-full -z-10 fade-overlay"></div> */}
        <div id="home-section" className="home-container relative z-10">
          <Navbar />
          <div className="home-banner-container pt-20 sm:pt-56 ">
            {/* <div className="home-bannerImage-container"></div> */}
            <div className="home-text-section">
              <h1 className="primary-heading text-white text-6xl sm:text-8xl">
                Plow. Plant. Prosper
              </h1>
              <p className="primary-text text-wrap max-w-96 text-gray-200 text-xl sm:text-2xl">
                "Access vital climatic data, crop water schedules, seasonal advice, and
                personalized fertilizer tips—all in one place!"
              </p>
              <Link to="/signup" className="rounded-md border border-transparent py-2 px-4 flex items-center text-center text-xl transition-all text-gray-50 hover:bg-gray-100 hover:text-gray-950 focus:bg-gray-100 active:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Sign Up <FiArrowRight />
              </Link>
             
            </div>
            <div className="home-image-section">
              {/* <img src={BannerImage} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
