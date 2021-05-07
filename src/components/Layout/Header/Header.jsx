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
            <span>VIP Movers</span>
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
            <a href="/faq">FAQ</a>
          </div>
          <div className="nav__link">
            <a href="/about">About us</a>
          </div>
          <div className="nav__link">
            <a href="/#contacts">Contact us</a>
          </div>
        </div>
        <div className="nav__hamburger">
          <input type="checkbox" id="hamburger" />
          <label for="hamburger">
            <i class="fas fa-bars"></i>
          </label>
          <div className="hamburger__content">
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
              <a href="/faq">FAQ</a>
            </div>
            <div className="nav__link">
              <a href="/about">About us</a>
            </div>
            <div className="nav__link">
              <a href="/#contacts">Contact us</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
