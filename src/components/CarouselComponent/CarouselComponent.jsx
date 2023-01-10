import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./CarouselComponent.scss";

import about1 from "../../assets/images/about1.jpeg";
import about2 from "../../assets/images/about2.jpeg";
import about3 from "../../assets/images/about3.jpeg";
import about4 from "../../assets/images/about4.jpeg";
import about5 from "../../assets/images/about5.jpeg";
import about6 from "../../assets/images/about6.jpeg";
import about7 from "../../assets/images/about7.jpeg";
import about8 from "../../assets/images/about8.jpeg";

const CarouselComponent = () => (
  <Carousel autoPlay emulateTouch className="carousel__container">
    <div>
      <img
        alt="about1_img"
        src={about1}
      />
    </div>
    <div>
      <img src={about2} 
      alt="about2_img" 
    />
    </div>
    <div>
      <img src={about3} 
      alt="about3_img" 
    />
    </div>
    <div>
      <img src={about4} 
      alt="about4_img" 
    />
    </div>
    <div>
      <img src={about5} 
      alt="about5_img" 
    />
    </div>
    <div>
      <img src={about6} 
      alt="about6_img" 
    />
    </div>
    <div>
      <img src={about7} 
      alt="about7_img" 
    />
    </div>
    <div>
      <img src={about8} 
      alt="about8_img" 
    />
    </div>
  </Carousel> 
);

export default CarouselComponent;
