import React from "react";
import "../assets/styles/Header.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";

const Header: React.FC = () => {
  return (
    <header className="header text-light">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="header-logo d-flex align-items-center">
          <img src="Images/logo.png" alt="" />
          <span className="header-info-title text-warning">RESCUE LANE</span>
        </div>

        <div className="header-info header-info-1">
          <BiTimeFive className="time" color="yellow" />
          <div className="ms-2 header-info-content">
            <span className="header-info-title text-warning">OPEN TIME</span>
            <div className="open">
              <span className="header-info-subtitle">Open 24/7 || </span>
              <span className="header-info-subtitle">Mon-Sun </span>
            </div>
          </div>
        </div>

        <div className="header-info header-info-2">
          <FaPhoneAlt className="icon-phone" />
          <div className="header-info-content">
            <span className="header-info-title text-warning">CALL US NOW</span>
            <p>
              <a href="tel:0759595577">0759595577</a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
