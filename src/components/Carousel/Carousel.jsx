import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.scss";

export default () => (
  <Carousel autoPlay emulateTouch className="carousel__container">
    <div>
      <img
        alt=""
        src="https://i.pinimg.com/originals/0b/de/fd/0bdefd1aabb4cf0fa5ea2f274a5d365f.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://ded7t1cra1lh5.cloudfront.net/media/626619/ca44f50475756471646f187612b96011911a4971/original/moving-company-hero.jpg?1614065562"
      />
    </div>
  </Carousel>
);
