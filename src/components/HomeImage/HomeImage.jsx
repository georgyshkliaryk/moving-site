import React from "react";
import "./HomeImage.scss";
import { Parallax } from "react-parallax";

import logo from "../../assets/images/home-image-blur4.jpg";
import ContactHeader from "../ContactHeader/ContactHeader";

const HomeImage = () => {
  return (
    <div className="image__container">
      <Parallax blur={0} bgImage={logo} bgImageAlt="the cat" strength={200}>
        <ContactHeader />
        <div className="test"></div>
        <div className="image__title">
          Your First Choice for the Best Boston Moving Company!
          <div className="image__description">Picked by you, packed by us.</div>
        </div>
        <div className="image__buttons">
          <a href="/about" className="image__button wow fadeIn">
            More about us &nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
          </a>
          <a href="/services" className="image__button wow fadeIn">
            What we offer &nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
          </a>
          <a href="/prices" className="image__button wow fadeIn">
            Pricing &nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </Parallax>
    </div>
  );
};

export default HomeImage;
