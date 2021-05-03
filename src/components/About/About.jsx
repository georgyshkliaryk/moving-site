import React from "react";
import "./About.scss";
import aboutImg from "../../assets/images/about-image3-blur.jpg";
import { Parallax } from "react-parallax";
import ContactHeader from "../ContactHeader/ContactHeader";

const About = () => {
  return (
    <div className="about__container">
      <Parallax
        blur={0}
        bgImage={aboutImg}
        bgImageAlt="about-image"
        strength={200}
      >
        <ContactHeader />
        <div className="about__content">
          <div className="about__title">About our company</div>
          <div className="about__description">
            Our team offers commercial, residential, local, office and long-distance
            moving services. As well as packing, POD loading/unloading, inside
            move and storage services. <br/> We are young and promising company. That is why we aimed our business strategy on
            providing great quality service and creating excellent teamwork of
            professionals in order to make you feel safe and relaxed before,
            during, and after your move day. <br/> No unexpected surprises or extra
            charges. Only high-quality moving and custom service.
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
