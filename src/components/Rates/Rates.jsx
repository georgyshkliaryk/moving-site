import React from "react";
import "./Rates.scss";
import { Parallax } from "react-parallax";
import rates from "../../assets/images/rates4.jpg";

const Rates = () => {
  return (
    <div className="rates__container">
      <Parallax
        blur={0}
        bgImage={rates}
        bgImageAlt="moving-family"
        strength={200}
      >
        <div className="fake"></div>
      </Parallax>
      <div className="rates__container2">
        <div className="rates__left">
          <div className="rates__title">Best Boston moving rates</div>
          <div className="rates__description">
            We provide a variety of moving services for your Boston, MA
            relocation. We are a full-service Boston moving company that offers
            packing, moving, and storage for both local and long-distance
            transfers. <br /> <br /> We provide competitive Boston moving rates
            in order to provide you with the best quality and value. Call (413)
            841-6497 right now for a no-obligation, no-hassle Boston moving
            quote. Allston, Brookline, Cambridge, Framingham, Lexington,
            Needham, Wellesley, Weston, and all of New England are among the
            cities we serve in Boston and the Greater Boston area. <br /> <br />{" "}
          </div>
        </div>
        <div className="rates__right">
          <div className="right1">
            <div className="right1__title">HOURLY RATES</div>
            <div className="right1__content">
              <div className="right1__content__title">Starting from</div>
              <div className="right1__price">$125/hr</div>
            </div>
          </div>
          <div className="right2">
            <div className="right2__title">LONG DISTANCE</div>
            <div className="right2__content">
              <div className="right2__content__title">Boston - New York</div>
              <div className="right2__price">
                <span>from</span> $950
              </div>
              <div className="right2__content__title">Florida</div>
              <div className="right2__price">
                <span>from</span> $3500
              </div>
              <div className="right2__content__title">Chicago</div>
              <div className="right2__price">
                <span>from</span> $3000
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="btn__more" href="/prices">
        See more prices
      </a>
    </div>
  );
};

export default Rates;
