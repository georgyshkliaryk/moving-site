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
            We provide many moving solutions for your Boston, MA move, We are a
            full service Boston moving company providing: Packing, Moving and
            Storage for local and long distance moves. <br /> <br /> We provide
            competitive Boston moving rates to get you the best service and best
            value. Call us now for a no obligation, no hassle Boston moving
            quote at (413) 841-6497. We service all of Boston and the Greater
            Boston area including: Allston, Brookline, Cambridge, Framingham,
            Lexington, Needham, Wellesley, Weston and all of New England. <br /> <br /> When
            it comes to long distance moving, we can provide same day delivery
            moving from Boston to New York starting at $950, moving from Boston
            to Florida starting at $3500 and cross country moves from Boston to
            Chicago rates starting at $3000. Our hourly Boston moving rates
            start at just $109 per hour.
          </div>
        </div>
        <div className="rates__right">
          <div className="right1">
            <div className="right1__title">HOURLY RATES</div>
            <div className="right1__content">
              <div className="right1__content__title">Starting from</div>
              <div className="right1__price">$109/hr</div>
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
