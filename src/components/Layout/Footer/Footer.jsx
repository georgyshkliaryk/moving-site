import React from "react";
import "./Footer.scss";
import logo from "../../../assets/images/logo_v4.svg";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__menu">
        <a href="/" className="footer__link">
          Home
        </a>
        <a href="/services" className="footer__link">
          Services
        </a>
        <a href="/prices" className="footer__link">
          Prices
        </a>
        <a href="/faq" className="footer__link">
          FAQ
        </a>
        <a href="/about" className="footer__link">
          About us
        </a>
      </div>
      <div className="footer__content">
        <div className="footer__logo">
          <img src={logo} alt="footer-logo" />
          <div className="logo__description">
            <b>VIP Movers Company.</b> <br /> Picked by you, packed by us.
          </div>
        </div>
        <div className="footer__about">
          Every Boston neighborhood is familiar to our team of committed
          professionals, and we fulfill all building specifications. Fully
          Insured and Licensed You don't have to be concerned about anything
          because everything is in our possession. Every member of the crew is
          part of a well-trained team. To complete a job quickly and
          efficiently, we employ specialized equipment.
        </div>
      </div>
      <div className="footer__info">
        <div>
          31 Pearson Rd , Somerville 02144, MA. <br /> © 2021 All Rights
          Reserved. VIP Movers Company.{" "}
        </div>
        <a href="/privacy">Privacy policy</a>
      </div>
    </div>
  );
};

export default Footer;
