import React from "react";
import "./Movers.scss";

const Movers = () => {
  return (
    <div>
      <div className="movers__container">
        <div className="movers__card">
          <div className="card__title">2 Movers</div>
          <div className="card__starting">Starting from</div>
          <div className="card__price">$109/hr</div>
          <div className="card__included">INCLUDED</div>
          <div className="option2__box">
            <div className="option2__title">Studio/1 bedroom apartment</div>
            <i class="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">2 professional movers</div>
            <i class="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Clean Box Truck</div>
            <i class="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Free wrapping materials</div>
            <i class="fas fa-check-circle"></i>
          </div>
        </div>
        <div className="movers__card">
          <div className="card__title">3 Movers</div>
          <div className="card__starting">Starting from</div>
          <div className="card__price">$149/hr</div>
          <div className="card__included">INCLUDED</div>
          <div className="option2__box">
            <div className="option2__title">Studio/1 bedroom apartment</div>
            <i class="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">3 professional movers</div>
            <i class="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Clean Box Truck</div>
            <i class="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Free wrapping materials</div>
            <i class="fas fa-check-circle"></i>
          </div>
        </div>
        <div className="movers__card">
          <div className="card__title">4 Movers</div>
          <div className="card__starting">Starting from</div>
          <div className="card__price">$179/hr</div>
          <div className="card__included">INCLUDED</div>
          <div className="option2__box">
            <div className="option2__title">Studio/1 bedroom apartment</div>
            <i class="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">4 professional movers</div>
            <i class="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Clean Box Truck</div>
            <i class="fas fa-check-circle"></i>
          </div>
          <div className="option2__box">
            <div className="option2__title">Free wrapping materials</div>
            <i class="fas fa-check-circle"></i>
          </div>
        </div>
      </div>
      <div className="prices__text">
        <span>Our Rates</span> are hourly based with <span>15 min</span>. increment charge policy and vary
        depending on crew size you demand for your move. Hourly rate includes
        movers, all equipped truck, gas, tolls, mileage, basic insurance and
        does not carry any hidden fees. <br/> Minimum <span>1/2hr</span> additional travel time is
        applied to all jobs in Greater Boston area. (15 min. for our movers to
        get to you address from our office plus 15 min. to get back when the
        move is finished.) <br/> We have a <span>3 hour minimum charge</span> policy in case your
        move takes less then three hours of the Total time (including traveling
        time).
      </div>
    </div>
  );
};

export default Movers;
