import React from "react";
import "./Welcome.scss";
import welcomeLogo from "../../assets/images/welcome2.svg";

const Welcome = () => {
  return (
    <div className="welcome__container">
      <div className="welcome__title">
        Welcome to VIP Movers Company - New Boston MA Movers Company!
      </div>
      <div className="welcome__section">
        <div className="welcome__description wow fadeInLeft">
          We have a simple mission – to help take the stress out of relocating.
          Whether you have been planning to move into your dream home, need to
          move for work, or have an unexpected reason, we are here for you.{" "}
          <br /> <br />
          Our team of young professionals has worked for large moving brands,
          and specialized in cross country moves. Our founder has worked
          alongside & handpicked the team members at VIP because they are the
          best professionals in safety protocols and handling your important
          belongings. 
          <a className="btn__more" href="/about">
            More about our company
          </a>
        </div>
        <img src={welcomeLogo} alt="welcomeLogo" className="wow fadeInRight" />
      </div>
    </div>
  );
};

export default Welcome;
