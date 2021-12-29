import React from "react";
import "./PricesTable.scss";

import nycImg from "../../assets/images/nyc.jpg";
import philaImg from "../../assets/images/phila.jpg";
import washingtonImg from "../../assets/images/washington.jpg";
import floridaImg from "../../assets/images/florida.jpg";
import nashvilleImg from "../../assets/images/nashville.jpg";
import chicagoImg from "../../assets/images/chicago.jpg";

const PricesTable = () => {
  return (
    <div className="prices__table__container">
      <div className="table__title">How can you get our services?</div>
      <div className="table__description" id="local-prices">
        See the table below for fixed hourly rates on moving home.
      </div>
      <div className="table__container">
        {/* <div className="table__subtitle">Local Moving / Office Moving</div>
        <div className="table__box fake">
          <div className="table__box__title fake"></div>
          <div className="table__price">Starting grocery</div>
          <div className="table__price">Peak</div>
          <div className="table__price">Hi-Peak</div>
        </div>
        <div className="table__box wow flipInX">
          <div className="table__box__title">2 Movers & Truck</div>
          <div className="table__price">$125/hr</div>
          <div className="table__price">$140/hr</div>
          <div className="table__price">$160/hr</div>
        </div>
        <div className="table__box ">
          <div className="table__box__title2">3 Movers & Truck</div>
          <div className="table__price">$160/hr</div>
          <div className="table__price">$180/hr</div>
          <div className="table__price">$250/hr</div>
        </div>
        <div className="table__box  wow flipInX" data-wow-delay="0.2s">
          <div className="table__box__title">4 Movers & Truck</div>
          <div className="table__price">$199/hr</div>
          <div className="table__price">$240/hr</div>
          <div className="table__price">$260/hr</div>
        </div>
        <div className="table__box">
          <div className="table__box__title2">Additional Movers/hr</div>
          <div className="table__price">$30/hr</div>
          <div className="table__price">$40/hr</div>
          <div className="table__price">$50/hr</div>
        </div>
        <div
          className="table__box  wow flipInX"
          data-wow-delay="0.4s"
          id="long-prices"
        >
          <div className="table__box__title">Additional Truck/hr</div>
          <div className="table__price">$40/hr</div>
          <div className="table__price">$40/hr</div>
          <div className="table__price">$40/hr</div>
        </div> */}
        <div className="table__subtitle">Long distance moving</div>
        <div className="long__prices__container">
          <div className="long__prices__box">
            <img src={nycImg} alt="nyc" />
            <div className="long__prices__text">
              <span>NYC</span> - Starting at $950
            </div>
          </div>
          <div className="long__prices__box">
            <img src={washingtonImg} alt="washington" />
            <div className="long__prices__text">
              <span>Washington DC</span> - Starting at $1450
            </div>
          </div>
          <div className="long__prices__box">
            <img src={philaImg} alt="philadelphia" />
            <div className="long__prices__text">
              <span>Philadelphia</span> - Starting at $1150
            </div>
          </div>
          <div className="long__prices__box">
            <img src={floridaImg} alt="florida" />
            <div className="long__prices__text">
              <span>Florida</span> - Starting at $3500
            </div>
          </div>
          <div className="long__prices__box">
            <img src={nashvilleImg} alt="nashville" />
            <div className="long__prices__text">
              <span>Nashville, TN</span> - Starting at $3100
            </div>
          </div>
          <div className="long__prices__box" id="storage-prices">
            <img src={chicagoImg} alt="chicago" />
            <div className="long__prices__text">
              <span>Chicago</span> - Starting at $3000
            </div>
          </div>
        </div>
      </div>
      <div className="table__container__mobile">
        {/* <div className="table__subtitle">Local/Office Moving</div>
        <div className="table__box__mobile">
          <div className="table__box__mobile__title">2 Movers & Truck</div>
          <div className="table__price__mobile">
            <div className="mobile__box">
              <div className="mobile__left">Regular</div>
              <div className="mobile__right">$125/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Peak</div>
              <div className="mobile__right">$140/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Hi-Peak</div>
              <div className="mobile__right">$160/hr</div>
            </div>
          </div>
        </div>
        <div className="table__box__mobile">
          <div className="table__box__mobile__title">3 Movers & Truck</div>
          <div className="table__price__mobile">
            <div className="mobile__box">
              <div className="mobile__left">Regular</div>
              <div className="mobile__right">$160/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Peak</div>
              <div className="mobile__right">$180/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Hi-Peak</div>
              <div className="mobile__right">$250/hr</div>
            </div>
          </div>
        </div>
        <div className="table__box__mobile">
          <div className="table__box__mobile__title">4 Movers & Truck</div>
          <div className="table__price__mobile">
            <div className="mobile__box">
              <div className="mobile__left">Regular</div>
              <div className="mobile__right">$199/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Peak</div>
              <div className="mobile__right">$240/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Hi-Peak</div>
              <div className="mobile__right">$260/hr</div>
            </div>
          </div>
        </div>
        <div className="table__box__mobile">
          <div className="table__box__mobile__title">Additional Movers/hr</div>
          <div className="table__price__mobile">
            <div className="mobile__box">
              <div className="mobile__left">Regular</div>
              <div className="mobile__right">$30/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Peak</div>
              <div className="mobile__right">$40/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Hi-Peak</div>
              <div className="mobile__right">$50/hr</div>
            </div>
          </div>
        </div>
        <div className="table__box__mobile">
          <div className="table__box__mobile__title">Additional Truck/hr</div>
          <div className="table__price__mobile">
            <div className="mobile__box">
              <div className="mobile__left">Regular</div>
              <div className="mobile__right">$40/hr</div>
            </div>
            <div className="mobile__box">
              <div className="mobile__left">Peak</div>
              <div className="mobile__right">$40/hr</div>
            </div>
            <div className="mobile__box" id="long-prices2">
              <div className="mobile__left">Hi-Peak</div>
              <div className="mobile__right">$40/hr</div>
            </div>
          </div>
        </div> */}

        <div className="table__subtitle">Long distance moving</div>
        <div className="long__mobile__box">
          <img src={nycImg} alt="nyc" />
          <div className="long__mobile__text">
            <span>NYC</span> - Starting at $950
          </div>
        </div>
        <div className="long__mobile__box">
          <img src={washingtonImg} alt="washington" />
          <div className="long__mobile__text">
            <span>Washington DC</span> - Starting at $1450
          </div>
        </div>
        <div className="long__mobile__box">
          <img src={philaImg} alt="philadelphia" />
          <div className="long__mobile__text">
            <span>Philadelphia</span> - Starting at $1150
          </div>
        </div>
        <div className="long__mobile__box">
          <img src={floridaImg} alt="florida" />
          <div className="long__mobile__text">
            <span>Florida</span> - Starting at $3500
          </div>
        </div>
        <div className="long__mobile__box">
          <img src={nashvilleImg} alt="nashville" />
          <div className="long__mobile__text">
            <span>Nashville, TN</span> - Starting at $3100
          </div>
        </div>
        <div className="long__mobile__box">
          <img src={chicagoImg} alt="chicago" />
          <div className="long__mobile__text" id="storage-prices2">
            <span>Chicago</span> - Starting at $3000
          </div>
        </div>
      </div>

      <div className="table__subtitle last">Storage</div>
      <div className="storage__prices__container">
        <div className="storage__prices__box">
          <div className="storage__title">Room or&nbsp;Less</div>
          <div className="storage__price">$130.00</div>
        </div>
        <div className="storage__prices__box">
          <div className="storage__title">Studio</div>
          <div className="storage__price">$150.00</div>
        </div>
        <div className="storage__prices__box">
          <div className="storage__title">1 Bedroom</div>
          <div className="storage__price">$190.00</div>
        </div>
        <div className="storage__prices__box">
          <div className="storage__title">2 Bedroom</div>
          <div className="storage__price sale">
            <span>$250.00</span> <p>$290.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricesTable;
