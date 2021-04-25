import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <nav className="nav__container">
        <div className="nav__title">
            <a href="">MassMoving</a>
        </div>
        <div className="nav__links">
          <div className="nav__link">
            <a href="">Home</a>
          </div>
          <div className="nav__link">
            <a href="">Services</a>
          </div>
          <div className="nav__link">
            <a href="">Prices</a>
          </div>
          <div className="nav__link">
            <a href="">About us</a>
          </div>
          <div className="nav__link">
            <a href="">Contact us</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
