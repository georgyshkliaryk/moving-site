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
            Our movers can help with industrial, residential, state, office, and
            long-distance moves. Packing, POD loading/unloading, inside
            transfer, and storage facilities are also available. <br /> <br />{" "}
            We are a new and exciting company. That is why, in order to make you
            feel comfortable and relaxed before, during, and after your
            transfer, we focused our business plan on delivering excellent
            service and forming an excellent team of professionals. <br />{" "}
            <br /> There are no hidden fees or taxes. Only the best moving and
            custom services are provided.
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
