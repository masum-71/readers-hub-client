import React from "react";
import image from "../Assets/404.webp";

const NotFound = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex justify-center items-center">
        <img className="w-96 h-96 " src={image} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
