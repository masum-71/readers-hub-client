import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero md:h-96"
      style={{ backgroundImage: `url("https://i.ibb.co/SmzCFmF/home-bg.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello Readers</h1>
          <p className="mb-5 relative">
            Buy your desire book at cheapest rate from
            <span> Reader's Hub </span>
            <img
              className="h-10 hidden md:block absolute -right-0"
              src={
                "https://i.ibb.co/60GGv8H/line-removebg-preview-removebg-preview.png"
              }
              alt=""
            />
          </p>
          <Link to="/login" className="btn bg-pink-600 mt-4">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
