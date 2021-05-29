import React from "react";
import "./Movers.scss";

const Movers = () => {
  return (
    <div>
      <div className="movers__container">
        <div className="movers__card wow fadeInUp">
          <div className="card__title">2 Movers + Truck</div>
          <div className="card__starting">Starting from</div>
          <div className="card__price">$125/hr</div>
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
        <div className="movers__card wow fadeInUp" data-wow-delay="0.2s">
          <div className="card__title">3 Movers + Truck</div>
          <div className="card__starting">Starting from</div>
          <div className="card__price">$160/hr</div>
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
        <div className="movers__card wow fadeInUp" data-wow-delay="0.4s">
          <div className="card__title">4 Movers + Truck</div>
          <div className="card__starting">Starting from</div>
          <div className="card__price">$199/hr</div>
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
        <span>Our Rates</span> are hourly based with <span>15 min</span>. The
        policy of increment charges varies depending on the crew size you need
        for your shift. There are no hidden costs in the hourly rate since it
        covers movers, a fully fitted truck, petrol, tolls, mileage, and basic
        insurance. <br /> Minimum <span>1/2hr</span> additional travel time is
        applied to all jobs in Greater Boston area. (Our movers will take 15
        minutes to get to your address from our office, plus 15 minutes to
        return when the transfer is completed.) <br /> We have a{" "}
        <span>3 hour minimum charge</span> policy in case your move takes less
        then three hours of the Total time (including traveling time).
      </div>
    </div>
  );
};

export default Movers;
