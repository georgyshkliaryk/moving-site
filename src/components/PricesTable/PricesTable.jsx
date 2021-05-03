import React from "react";
import "./PricesTable.scss";

const PricesTable = () => {
  return (
    <div className="prices__table__container">
      <div className="table__title">How can you get our services?</div>
      <div className="table__description">
        See the table below for fixed hourly rates on moving home.
      </div>
      <div className="table__container">
        <div className="table__box fake">
          <div className="table__box__title fake"></div>
          <div className="table__price">Discount</div>
          <div className="table__price">Regular</div>
          <div className="table__price">Sub Peak</div>
          <div className="table__price">Peak</div>
          <div className="table__price">Hi-Peak</div>
        </div>
        <div className="table__box">
          <div className="table__box__title">2 Movers & Truck</div>
          <div className="table__price">$109/hr</div>
          <div className="table__price">$119/hr</div>
          <div className="table__price">$129/hr</div>
          <div className="table__price">$179/hr</div>
          <div className="table__price">$250/hr</div>
        </div>
        <div className="table__box">
          <div className="table__box__title2">3 Movers & Truck</div>
          <div className="table__price">$149/hr</div>
          <div className="table__price">$159/hr</div>
          <div className="table__price">$179/hr</div>
          <div className="table__price">$219/hr</div>
          <div className="table__price">$300/hr</div>
        </div>
        <div className="table__box">
          <div className="table__box__title">4 Movers & Truck</div>
          <div className="table__price">$179/hr</div>
          <div className="table__price">$199/hr</div>
          <div className="table__price">$229/hr</div>
          <div className="table__price">$269/hr</div>
          <div className="table__price">$400/hr</div>
        </div>
        <div className="table__box">
          <div className="table__box__title2">Additional Movers/hr</div>
          <div className="table__price">$50/hr</div>
          <div className="table__price">$50/hr</div>
          <div className="table__price">$50/hr</div>
          <div className="table__price">$60/hr</div>
          <div className="table__price">$70/hr</div>
        </div>
        <div className="table__box">
          <div className="table__box__title">Additional Truck/hr</div>
          <div className="table__price">$40/hr</div>
          <div className="table__price">$40/hr</div>
          <div className="table__price">$40/hr</div>
          <div className="table__price">$40/hr</div>
          <div className="table__price">$40/hr</div>
        </div>
      </div>
    </div>
  );
};

export default PricesTable;
