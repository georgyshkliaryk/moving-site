import React from "react";
import "./Header.scss";
import mainLogo from "../../../assets/images/logo_v4.svg";
import mainLogo3 from "../../../assets/images/main-logo3.png";

const Header = () => {
  return (
    <div>
      <div className="header__covid">We are open! <a href="/covid-updates">Read updates regarding COVID-19</a>.</div>
      <nav className="nav__container">
        <div className="nav__title">
          <a href="/">
            <img src={mainLogo3} alt="main-logo" className="wow rubberBand"/>
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
