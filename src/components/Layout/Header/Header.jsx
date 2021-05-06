import React from "react";
import "./Header.scss";
import mainLogo from "../../../assets/images/logo_v4.svg";

const Header = () => {
  return (
    <div>
      <nav className="nav__container">
        <div className="nav__title">
          <a href="/">
            <img src={mainLogo} alt="main-logo" />
            <span>MassMoving</span>
          </a>
        </div>
        <div className="nav__links">
          <div className="nav__link">
            <a href="/">Home</a>
          </div>
          <div className="nav__link">
            <a href="/services">Services</a>
          </div>
          <div className="nav__link">
            <a href="/prices">Prices</a>
          </div>
          <div className="nav__link">
            <a href="/">FAQ</a>
          </div>
          <div className="nav__link">
            <a href="/about">About us</a>
          </div>
          <div className="nav__link">
            <a href="/#contacts">Contact us</a>
          </div>
        </div>
        <i class="fas fa-bars nav__hamburger"></i>
      </nav>
    </div>
  );
};

export default Header;
