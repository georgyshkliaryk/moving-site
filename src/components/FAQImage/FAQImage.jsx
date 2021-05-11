import React from "react";
import "./FAQImage.scss";
import { Parallax } from "react-parallax";
import ContactHeader from "../ContactHeader/ContactHeader";
import faqImg from "../../assets/images/faq-blur.jpg";

const FAQImage = () => {
  return (
    <div>
      <Parallax
        blur={0}
        bgImage={faqImg}
        bgImageAlt="faq-image"
        strength={200}
      >
        <ContactHeader />
        <div className="about__content">
          <div className="about__title">Frequently asked questions</div>
          <div className="about__description">
          Here are some of the most common questions we receive from customers.
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default FAQImage;
