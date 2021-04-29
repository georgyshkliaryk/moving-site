import React from "react";
import "./Offers.scss";
import localMoving from "../../assets/images/local_moving.svg";
import longMoving from "../../assets/images/long_moving.svg";
import packing from "../../assets/images/packing.svg";
import office from "../../assets/images/office.svg";

const Offers = () => {
  return (
    <div className="offers__container">
      <div className="offers__title">What do we offer?</div>
      <div className="offers__description">
        Take a look at what we can suggest, and choose the best option for you:
      </div>
      <div className="offers__options">
        <div className="offers__option" id="opt1">
          <img src={localMoving} alt="localMoving" />
          <div className="option__title">Local moving</div>
          <div className="option__description">
            MassMoving local Boston movers understand the Boston area and
            specializes in all relocation services you need to make your move
            within the Boston area a breeze.
          </div>
          <a href="">
            Read more &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="offers__option">
          <img src={longMoving} alt="longMoving" />
          <div className="option__title">Long distance moving</div>
          <div className="option__description">
            Choosing our Long Distance Moving Service you choose complete,
            guaranteed, a one-price move based on a flat rate from Boston to a
            destination of your choice. No more changing estimates, headaches,
            and moving surprises.
          </div>
          <a href="">
            Read more &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="offers__option">
          <img src={packing} alt="packing" />
          <div className="option__title">Packing services</div>
          <div className="option__description">
            Whether you need help with packing just a few things or your entire
            home or office, we’ll take great care packing and protecting even
            your most delicate items.
          </div>
          <a href="">
            Read more &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="offers__option" id="opt4">
          <img src={office} alt="office" />
          <div className="option__title">Office/Commercial</div>
          <div className="option__description">
            Our flexible, professional full-service relocation services are
            available to move your Boston-based office at a time – day or night
            – that works for you.
          </div>
          <a href="">
            Read more &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="offers__option" id="opt4">
          <img src={office} alt="office" />
          <div className="option__title">Storage</div>
          <div className="option__description">
            From short-term solutions to long-term secure storage needs, we have
            provided safe and secure flexible storage options in Boston area for
            years.
          </div>
          <a href="">
            Read more &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offers;
