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
        <a href="/" className="footer__link">
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
            <b>VIP Movers Company.</b> <br/> Clear pricing. Affordable rates.
          </div>
        </div>
        <div className="footer__about">
          Our team of dedicated professionals are familiar with every Boston
          neighborhood and meets every building requirements. Fully Licensed and
          Insured You do not have to worry about anything, everything is under
          our control. Every crew member is a part of a professionally trained
          team. We use special tools to perform a fast and effective job.
        </div>
      </div>
      <div className="footer__info">
        <div>151 Newton St, Waltham, MA, 02453. Licensing information: US DOT
        #3025065, MDPU #31853, MC #36474 <br/> © 2021 All Rights Reserved. VIP Movers Company. </div>
        <a href="/privacy">Privacy policy</a>
      </div>
      
    </div>
  );
};

export default Footer;
