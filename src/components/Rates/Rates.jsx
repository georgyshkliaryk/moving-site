import React from "react";
import "./Rates.scss";
import { Parallax } from "react-parallax";
import rates from "../../assets/images/rates.jpg";

const Rates = () => {
  return (
    <div className="rates__container">
      <Parallax blur={0} bgImage={rates} bgImageAlt="moving-family" strength={200}>
        <div className="fake"></div>
      </Parallax>
      <div className="rates__container2">
        <div className="rates__left">
          <div className="rates__title">Best Boston moving rates</div>
          <div className="rates__description">
            We provide many moving solutions for your Boston, MA move, We are a
            full service Boston moving company providing: Packing, Moving and
            Storage for local and long distance moves. We provide competitive
            Boston moving rates to get you the best service and best value. Call
            us now for a no obligation, no hassle Boston moving quote at (617)
            782-9811. We service all of Boston and the Greater Boston area
            including: Allston, Brookline, Cambridge, Framingham, Lexington,
            Needham, Wellesley, Weston and all of New England. When it comes to
            long distance moving, we can provide same day delivery moving from
            Boston to New York starting at $900, moving from Boston to Florida
            starting at $1050 and cross country moves from Boston to California
            rates starting at $1350. Our hourly Boston moving rates start at
            just $99 per hour.
          </div>
        </div>
        <div className="rates__right">
          <div className="right1">
            <div className="right1__title">HOURLY RATES</div>
            <div className="right1__content">
              <div className="right1__content__title">Starting from</div>
              <div className="right1__price">$99/hr</div>
            </div>
          </div>
          <div className="right2">
            <div className="right2__title">LONG DISTANCE</div>
            <div className="right2__content">
              <div className="right2__content__title">Boston - New York</div>
              <div className="right2__price"><span>from</span> $900</div>
              <div className="right2__content__title">Florida</div>
              <div className="right2__price"><span>from</span> $1050</div>
              <div className="right2__content__title">California</div>
              <div className="right2__price"><span>from</span> $1350</div>
            </div>
          </div>
        </div>
      </div>
      <a className="btn__more">See more prices</a>
    </div>
  );
};

export default Rates;
