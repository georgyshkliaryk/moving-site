import React from "react";
import "./FAQ.scss";

const FAQ = () => {
  return (
    <div className="faq__container">
      <div className="faq__box">
        <div className="faq__title">Moving</div>
        <div className="faq__card">
          <div className="faq__card__title">
            Do I have to be there during the move?
          </div>
          <div className="faq__card__text">
            As the customer, we need you or a representative to be present at
            all times during your local move so you can help guide us. It’s your
            responsibility to do a final walk through of the premises to ensure
            we’ve moved everything we were supposed to.
          </div>
        </div>
        <div className="faq__card">
          <div className="faq__card__title">When and how do I pay?</div>
          <div className="faq__card__text">
            Our time runs continuously until all tools and equipment are back in
            our truck and payment is completed. Having cash or a credit/debit
            card ready will save you time and money. <br />
            <br /> For Local Moves: <br />
            <br /> You must pay in full before the job ends on the day of move.
            We accept cash or credit/debit cards (VISA, MC, Discover, Amex). A
            3% convenience fee is added to all credit/debit card payments.
            Please note we do not accept checks. The name on the credit card
            must match the signer’s name as we require a signature on
            credit/debit card payments. <br />
            <br /> For Interstate Moves: <br />
            <br /> Payment is due at the end of the day of delivery. We accept
            cash or credit/debit cards (VISA, MC, Discover, Amex). A 3%
            convenience fee is added to all credit/debit card payments. Please
            note we do not accept checks. Having your payment ready ahead of
            time will save you time and money. The name on the credit card must
            match the signer’s name as we require a signature on credit/debit
            card payments.
          </div>
        </div>
        <div className="faq__card">
          <div className="faq__card__title">
            Do I need to get moving or parking permits?
          </div>
          <div className="faq__card__text">
            Yes. As the customer, you are responsible for requesting any moving
            permits if required. We recommend getting permits for all moves as
            they guarantee that the moving truck can be parked as close as
            possible to your doorway. Since you are familiar with the parking
            situation on your street, it’s your decision whether you can manage
            parking without a permit. Most situations require 35 to 40 feet to
            park the truck. We highly recommend getting permits at the North End
            and Beacon Hills areas. <br />
            <br /> If there is nowhere to park at the time of mover’s arrival,
            the crew will start your moving clock while they search for parking.
            Our drivers reserve the right to park anywhere at their discretion
            to better perform services, even if it is illegal and/or the driver
            must double park. The customer agrees to pay any parking fees or
            tickets assessed to the carrier for any vehicle under hire by the
            customer at the time of the charge.
          </div>
        </div>
        <div className="faq__card">
          <div className="faq__card__title">
            Do you provide loading/unloading services alone?
          </div>
          <div className="faq__card__text">
            Yes. However, in situations where Mozart Movers is only providing
            loading or unloading services, we are not responsible for any
            damages that may occur in transporting and are released of all
            liability after loading the truck prior to unloading. We are only
            responsible for items in our immediate care, custody and control.
          </div>
        </div>
        <div className="faq__card">
          <div className="faq__card__title">
            I’m scheduled for an afternoon move. When will you arrive?
          </div>
          <div className="faq__card__text">
            Mozart crews usually perform two jobs a day – one in the morning
            (starting around 9 a.m.) and one in the afternoon. Our morning ends
            when the very last piece of furniture is unloaded into the
            customer’s new place, which can be extremely hard to predict. <br />
            <br />
            Although we are known for our speed and try to make every move as
            quick as possible, there are many surprise factors that can speed up
            or delay the process. Therefore, we cannot tell the exact time of
            when the second job (afternoon) will take place – although it rarely
            happens before noon or after five. <br />
            <br /> Our crew always keeps in touch with the customer and calls
            when arrival time is clear. Your best option is to stay open minded
            and be patient, knowing we are doing all we can to be at your place
            as early, fresh, and cheerful as possible.
          </div>
        </div>
        <div className="faq__card">
          <div className="faq__card__title">
            How do you charge for services?
          </div>
          <div className="faq__card__text">
            Our Rates are hourly based with a 15 minute-increment charge policy.
            Rates vary depending on the crew size required for your move. Hourly
            rates have no hidden fees, and include movers, an all-equipped
            truck, gas, tolls, mileage, and basic insurance. <br /><br /> Additionally, we
            apply 1/2 hour travel time to all jobs in the Greater Boston area
            (15 min. for our movers to get to your address from our office plus
            15 min. to get back when the move is finished.) We have a 2-hour
            minimum charge policys
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
