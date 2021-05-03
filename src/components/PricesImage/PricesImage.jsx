import React from "react";
import "./PricesImage.scss";
import { Parallax } from "react-parallax";
import ContactHeader from "../ContactHeader/ContactHeader";
import pricesImg from "../../assets/images/prices-blur.jpg";

const PricesImage = () => {
  return (
    <div className="prices__container">
      <Parallax
        blur={0}
        bgImage={pricesImg}
        bgImageAlt="prices-image"
        strength={200}
        z-index={-2}
      >
        <ContactHeader />
        <div className="prices__content">
          <div className="prices__title">
            Moving prices. Without any hidden fees and extra charges
          </div>
          <div className="prices__description">
            MassMoving provide fair prices for all types of moving, whether it
            be local moving, <br /> interstate moving, commercial moving,
            packaging or storing – we can help.
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default PricesImage;
