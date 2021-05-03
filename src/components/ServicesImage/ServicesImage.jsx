import React from "react";
import "./ServicesImage.scss";
import { Parallax } from "react-parallax";
import ContactHeader from "../ContactHeader/ContactHeader";
import servicesImg from "../../assets/images/services-logo-blur.jpg";

const ServicesImage = () => {
  return (
    <div className="services__page__container">
      <Parallax
        blur={0}
        bgImage={servicesImg}
        bgImageAlt="prices-image"
        strength={200}
        z-index={-2}
      >
        <ContactHeader />
        <div className="services__content">
          <div className="services__page__title">Moving services.</div>
          <div className="services__page__description">
            Flat Rates without any hidden fees and extra charges
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ServicesImage;
