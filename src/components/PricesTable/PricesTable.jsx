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
          <div className="table__price">$115/hr</div>
          <div className="table__price">$129/hr</div>
          <div className="table__price">$130/hr</div>
          <div className="table__price">$145/hr</div>
        </div>
        <div className="table__box">
          <div className="table__box__title2">3 Movers & Truck</div>
          <div className="table__price">$149/hr</div>
          <div className="table__price">$145/hr</div>
          <div className="table__price">$179/hr</div>
          <div className="table__price">$160/hr</div>
          <div className="table__price">$180/hr</div>
        </div>
        <div className="table__box">
          <div className="table__box__title">4 Movers & Truck</div>
          <div className="table__price">$179/hr</div>
          <div className="table__price">$185/hr</div>
          <div className="table__price">$229/hr</div>
          <div className="table__price">$210/hr</div>
          <div className="table__price">$260/hr</div>
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

      <div className="table__container__mobile">
        <div className="table__box__mobile">
          <div className="table__box__mobile__title">2 Movers & Truck</div>
          <div className="table__price__mobile">
            <div className="mobile__box">
              <div className="mobile__left">Discount</div>
              <div className="mobile__right">$109/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Regular</div>
              <div className="mobile__right">$119/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Sub Peak</div>
              <div className="mobile__right">$129/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Peak</div>
              <div className="mobile__right">$179/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Hi-Peak</div>
              <div className="mobile__right">$250/hr</div>
            </div>
          </div>
        </div>
        <div className="table__box__mobile">
          <div className="table__box__mobile__title">3 Movers & Truck</div>
          <div className="table__price__mobile">
            <div className="mobile__box">
              <div className="mobile__left">Discount</div>
              <div className="mobile__right">$149/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Regular</div>
              <div className="mobile__right">$159/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Sub Peak</div>
              <div className="mobile__right">$179/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Peak</div>
              <div className="mobile__right">$219/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Hi-Peak</div>
              <div className="mobile__right">$300/hr</div>
            </div>
          </div>
        </div>
        <div className="table__box__mobile">
          <div className="table__box__mobile__title">4 Movers & Truck</div>
          <div className="table__price__mobile">
            <div className="mobile__box">
              <div className="mobile__left">Discount</div>
              <div className="mobile__right">$179/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Regular</div>
              <div className="mobile__right">$199/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Sub Peak</div>
              <div className="mobile__right">$229/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Peak</div>
              <div className="mobile__right">$269/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Hi-Peak</div>
              <div className="mobile__right">$400/hr</div>
            </div>
          </div>
        </div>
        <div className="table__box__mobile">
          <div className="table__box__mobile__title">Additional Movers/hr</div>
          <div className="table__price__mobile">
            <div className="mobile__box">
              <div className="mobile__left">Discount</div>
              <div className="mobile__right">$50/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Regular</div>
              <div className="mobile__right">$50/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Sub Peak</div>
              <div className="mobile__right">$50/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Peak</div>
              <div className="mobile__right">$60/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Hi-Peak</div>
              <div className="mobile__right">$70/hr</div>
            </div>
          </div>
        </div>
        <div className="table__box__mobile">
          <div className="table__box__mobile__title">Additional Truck/hr</div>
          <div className="table__price__mobile">
            <div className="mobile__box">
              <div className="mobile__left">Discount</div>
              <div className="mobile__right">$40/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Regular</div>
              <div className="mobile__right">$40/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Sub Peak</div>
              <div className="mobile__right">$40/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Peak</div>
              <div className="mobile__right">$40/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Hi-Peak</div>
              <div className="mobile__right">$40/hr</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricesTable;
