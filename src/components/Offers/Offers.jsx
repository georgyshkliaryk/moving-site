import React from "react";
import "./Offers.scss";
import localMoving from "../../assets/images/local_moving.svg";
import longMoving from "../../assets/images/long_moving.svg";
import packing from "../../assets/images/packing.svg";
import office from "../../assets/images/office.svg";
import localImg from "../../assets/images/services-local.webp";
import longImg from "../../assets/images/services-long.jpg";
import packingImg from "../../assets/images/services-packing.jpg";
import officeImg from "../../assets/images/services-office.png";
import storageImg from "../../assets/images/services-storage.jpg";

const Offers = () => {
  return (
    <div className="offers__container">
      <div className="offers__title">What do we offer?</div>
      <div className="offers__description">
        Take a look at what we offer and choose the right one for you:
      </div>
      <div className="offers__options">
        <div className="offers__option" id="opt1">
          <img src={localImg} alt="localMoving" />
          <div className="option__title">Local moving</div>
          <div className="option__description">
            VIP Movers is familiar with the Boston area and can provide all of
            the relocation services you'll need to make your transition inside
            the city a breeze.
          </div>
          <a href="/services">
            Read more &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="offers__option">
          <img src={longImg} alt="longMoving" />
          <div className="option__title">Long distance moving</div>
          <div className="option__description">
            When you use our Long Distance Moving Service, you get a full,
            guaranteed, one-price transfer from Boston to a destination of your
            choice for a flat rate. There will be no more adjusting forecasts,
            headaches, or shifting surprises.
          </div>
          <a href="/services">
            Read more &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="offers__option">
          <img src={packingImg} alt="packing" />
          <div className="option__title">Packing services</div>
          <div className="option__description">
            If you need help packing a few pieces or your entire home or office,
            we'll pack and secure even your most valuable possessions with great
            care.
          </div>
          <a href="/services">
            Read more &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="offers__option" id="opt4">
          <img src={officeImg} alt="office" />
          <div className="option__title">Office/Commercial</div>
          <div className="option__description">
            Our versatile, skilled full-service relocation services will switch
            your Boston-based office at a time that is convenient for you – day
            or night.
          </div>
          <a href="/services">
            Read more &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="offers__option" id="opt4">
          <img src={storageImg} alt="office" />
          <div className="option__title">Storage</div>
          <div className="option__description">
            For years, we have provided safe and secure flexible storage options
            in the Boston area, ranging from short-term solutions to long-term
            secure storage needs.
          </div>
          <a href="/services">
            Read more &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offers;
