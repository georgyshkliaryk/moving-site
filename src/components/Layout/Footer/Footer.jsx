import React from "react";
import "./Footer.scss";
import logo from "../../../assets/images/logo_v4.svg";
import logo3 from "../../../assets/images/main-logo2.png";

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
          <img src={logo3} alt="footer-logo" />
          <div className="logo__description">
            <b>VIP Movers.</b> <br /> Picked by you, packed by us.
          </div>
        </div>
        <div className="footer__about">
          vipmoversboston@gmail.com <i class="fas fa-envelope"></i> <br/>
          (413)841-6497 <i class="fas fa-phone-square"></i> <br/><br/>
          <a href="https://instagram.com/vipmoversboston" target="_blank">instagram <i class="fab fa-instagram"></i></a> <br/>
          <a href="https://www.yelp.com/biz/vip-movers-boston-boston" target="_blank">yelp <i class="fab fa-yelp"></i></a>
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
