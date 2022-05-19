import React from "react";
import "./Movers.scss";

const Movers = () => {
  return (
    <div>
      <div className="movers__container">
        <div className="movers__card wow fadeInUp">
          <div className="card__title">2 Movers + Truck</div>
          <div className="card__starting">Starting from</div>
          <div className="card__price">$130/hr</div>
          <div className="card__included">INCLUDED</div>
          <div className="option2__box">
            <div className="option2__title">
              Studio/1&nbsp;bedroom&nbsp;apartment
            </div>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">2 professional movers</div>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Clean Box Truck</div>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Free wrapping materials</div>
            <i className="fas fa-check-circle"></i>
          </div>
        </div>
        <div className="movers__card wow fadeInUp" data-wow-delay="0.2s">
          <div className="card__title">3 Movers + Truck</div>
          <div className="card__starting">Starting from</div>
          <div className="card__price">$170/hr</div>
          <div className="card__included">INCLUDED</div>
          <div className="option2__box">
            <div className="option2__title">
              1/2&nbsp;bedroom&nbsp;apartment
            </div>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">3 professional movers</div>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Clean Box Truck</div>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Free wrapping materials</div>
            <i className="fas fa-check-circle"></i>
          </div>
        </div>
        <div className="movers__card wow fadeInUp" data-wow-delay="0.4s">
          <div className="card__title">4 Movers + Truck</div>
          <div className="card__starting">Starting from</div>
          <div className="card__price">$199/hr</div>
          <div className="card__included">INCLUDED</div>
          <div className="option2__box">
            <div className="option2__title">
              2/3&nbsp;bedroom&nbsp;apartment
            </div>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">4 professional movers</div>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Clean Box Truck</div>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Free wrapping materials</div>
            <i className="fas fa-check-circle"></i>
          </div>
        </div>
        <div className="movers__card wow fadeInUp" data-wow-delay="0.6s">
          <div className="card__title">Additional Movers/hr</div>
          <div className="card__starting">Starting from</div>
          <div className="card__price">$30/hr</div>
          <div className="card__included">INCLUDED</div>
          <div className="option2__box">
            <div className="option2__title">Free wrapping materials</div>
            <i className="fas fa-check-circle"></i>
          </div>
        </div>
        <div className="movers__card wow fadeInUp" data-wow-delay="0.8s">
          <div className="card__title">Additional Truck/hr</div>
          <div className="card__starting">Starting from</div>
          <div className="card__price">$40/hr</div>
          <div className="card__included">INCLUDED</div>
          <div className="option2__box">
            <div className="option2__title">Clean Box Truck</div>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Free wrapping materials</div>
            <i className="fas fa-check-circle"></i>
          </div>
        </div>
      </div>
      <div className="prices__text">
        We charge hourly rates, based on <span>15 minutes</span> increments. We
        have a <span>3 hour minimum</span> charge policy.
      </div>
    </div>
  );
};

export default Movers;
