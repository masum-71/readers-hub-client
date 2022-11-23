import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer rounded-lg footer-center p-4 bg-blue-50 text-base-content my-6">
        <div>
          <p className="font-bold">
            Copyright © 2022 - All right reserved by{" "}
            <span className="text-pink-600">Masum Billah</span>
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">Find me on Social Media:</p>
          <div className="flex">
            <a target="blank" href="https://www.facebook.com/Masum.1971/">
              {" "}
              <FaFacebook className="text-2xl text-blue-700 mr-4"></FaFacebook>{" "}
            </a>
            <a target="blank" href="https://github.com/masum-71">
              <FaGithub className="text-2xl"></FaGithub>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
