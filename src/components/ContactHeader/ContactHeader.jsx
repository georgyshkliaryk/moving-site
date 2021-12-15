import React from "react";
import "./ContactHeader.scss";

const ContactHeader = () => {
  return (
    <div className="socials__container">
      <div className="phone">
        <a href="tel:6177646461">
          <i class="fas fa-phone-alt"></i>&nbsp;&nbsp;&nbsp;617-764-6461
        </a>
        <a href="mailto:vipmoversboston@gmail.com">
          <i class="fas fa-envelope"></i>
          &nbsp;&nbsp;&nbsp;vipmoversboston@gmail.com
        </a>
        <a href="/#contacts" className="quote__link">
          <i class="fas fa-list"></i>&nbsp;&nbsp;&nbsp;Request a free quote
        </a>
      </div>
      <div className="socials">
        <a
          href="https://www.instagram.com/vipmoversboston/"
          target="_blank"
          title="instagram.com"
          rel="noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.yelp.com/biz/vip-movers-boston-boston"
          target="_blank"
          title="yelp.com"
          rel="noreferrer"
        >
          <i class="fab fa-yelp"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactHeader;
