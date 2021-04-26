import React from "react";
import "./Offers.scss";
import localMoving from "../../assets/images/local_moving.svg";
import longMoving from "../../assets/images/long_moving.svg";

const Offers = () => {
  return (
    <div className="offers__container">
      <div className="offers__title">What can we offer?</div>
      <div className="offers__options">
        <div className="offers__option" id="opt1">
          <img src={localMoving} alt="localMoving" />
          <div className="option__title">Local moving</div>
          <div className="option__description">
            MassMoving local Boston movers understand the Boston area and
            specializes in all relocation services you need to make your move
            within the Boston area a breeze.
          </div>
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
        </div>
        <div className="offers__option">
          <div className="option__title">Packing services</div>
          <div className="option__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            ratione deserunt autem minus nemo, harum repellat aspernatur
            repudiandae odio nostrum doloremque inventore illo ipsam fugiat
            soluta temporibus incidunt dolorem eum.
          </div>
        </div>
        <div className="offers__option">
          <div className="option__title">Storage</div>
          <div className="option__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            ratione deserunt autem minus nemo, harum repellat aspernatur
            repudiandae odio nostrum doloremque inventore illo ipsam fugiat
            soluta temporibus incidunt dolorem eum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
