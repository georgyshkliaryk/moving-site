import React from "react";
import "./FAQ.scss";

const FAQ = () => {
  return (
    <div className="faq__container">
      <div className="faq__box">
        <div className="faq__title">
          <i className="fas fa-truck"></i> Moving
        </div>{" "}
        &nbsp;
        <input type="checkbox" id="faq1" defaultChecked />
        <label htmlFor="faq1" className="faq1__label">
          <i className="fas fa-caret-down" title="Read more"></i>
          <i className="fas fa-caret-up" title="Read less"></i>
        </label>
        <div className="faq1">
          <div className="faq__card">
            <div className="faq__card__title">
              Do I have to be there during the move?
            </div>
            <div className="faq__card__text">
              We require that you or a representative be present at all times
              during your local transfer so that you can assist us. It is your
              duty to conduct a final walkthrough of the premises to ensure that
              everything is in working order. double-check that we've moved
              everything we're supposed to.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">When and how do I pay?</div>
            <div className="faq__card__text">
              Our clock continues to tick until all of our tools and supplies
              have been returned to our truck and payment has been received. You
              can save time and money if you have cash or a credit/debit card on
              hand. <br />
              <br /> For Local Moves: <br />
              <br /> Before the work finishes on the day of the transfer, you
              must pay in full. Cash or credit/debit cards (VISA, MC, Discover,
              Amex) are accepted. Both credit/debit card purchases are subject
              to a 3% convenience charge. Since we need a signature on
              credit/debit card payments, the name on the credit card must match
              the name on the signature. <br />
              <br /> For Interstate Moves: <br />
              <br /> Payment must be made by the end of the delivery day. We
              accept cash, as well as credit and debit cards (VISA, MC,
              Discover, Amex). Both credit/debit card purchases are subject to a
              3% convenience charge. You will save time and money if you have
              your payment ready ahead of time. Since we need a signature on
              credit/debit card purchases, the name on the credit card must
              match the name on the signature.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">
              Do you provide loading/unloading services alone?
            </div>
            <div className="faq__card__text">
              Yes, indeed. However, if VIP Movers is just delivering loading or
              unloading services, we are not liable for any losses that may
              arise during transportation and are excluded from all
              responsibility after loading the truck and before unloading. Only
              the things in our immediate care, possession, and control are our
              responsibility.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">
              I’m scheduled for an afternoon move. When will you arrive?
            </div>
            <div className="faq__card__text">
              VIP Movers crews usually work two jobs a day, one in the morning
              (beginning about 9:00 a.m.) and one in the afternoon. Our day ends
              when the last piece of furniture is delivered to the customer's
              new home, which can be incredibly difficult to predict. <br />
              <br />
              Despite the fact that we are known for our pace and strive to make
              every step as quickly as possible, there are a number of
              unexpected variables that can speed up or slow down the process.
              As a result, we can't predict when the second job (afternoon) will
              take place – but it rarely occurs before noon or after five
              o'clock. <br />
              <br /> Our team communicates with the customer on a regular basis
              and calls when the arrival time is verified. Your best choice is
              to keep an open mind and be patient, trusting that we will do
              whatever we can to arrive at your location as early, fresh, and
              cheerful as possible.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">
              How do you charge for services?
            </div>
            <div className="faq__card__text">
              Our rates are based on an hourly basis with a 15-minute increment
              procedure. The cost of your step is determined by the size of the
              crew needed. There are no hidden costs in the hourly rates, and
              they include movers, a fully fitted truck, petrol, tolls, mileage,
              and basic insurance. <br />
              <br /> In addition, all workers in the Greater Boston area are
              given a half-hour travel time (15 minutes for our movers to get to
              your address from our office, plus 15 minutes to return when the
              transfer is completed.) We have a 2-hour fee minimum scheme.
            </div>
          </div>
        </div>
      </div>

      <div className="faq__box">
        <div className="faq__title">
          <i className="fas fa-boxes"></i> Specific Items
        </div>{" "}
        &nbsp;
        <input type="checkbox" id="faq2" />
        <label htmlFor="faq2" className="faq2__label">
          <i className="fas fa-caret-down" title="Read more"></i>
          <i className="fas fa-caret-up" title="Read less"></i>
        </label>
        <div className="faq2">
          <div className="faq__card">
            <div className="faq__card__title">Refrigerators</div>
            <div className="faq__card__text">
              We only transport refrigerators and freezers that are empty.
              Please empty the contents to ensure safe transport. We are
              delighted to load and unload these last.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">Aquariums</div>
            <div className="faq__card__text">
              We only move empty aquariums. (This means empty of water and also
              empty of all living creatures).
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">Grandfather Clocks</div>
            <div className="faq__card__text">
              You are responsible for removing the pendulum, chimes and weights.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">Flat Screen TVs</div>
            <div className="faq__card__text">
              Extreme temperatures, minor bumps, and altitude shifts can all
              harm flat screen televisions. The best packaging is the original.
              In any case, please notice that we are not responsible for TVs
              working after delivery unless there is physical evidence of
              external harm or negligence (visible damage). Please take note of
              item #6 in our LIABILITY EXCLUSION.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">Appliances</div>
            <div className="faq__card__text">
              VIP Movers is not liable for any harm to plumbing or electrical
              equipment, as well as any water damage resulting from the
              installation or removal of washers and dryers.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">Heavy and Oversized Items</div>
            <div className="faq__card__text">
              As long as the job can be performed safely, our crew members can
              carry your pianos, appliances, and objects weighing more than 300
              pounds. Floor surfaces can, unfortunately, be damaged. VIP Movers
              will not be held liable if you want to take this chance.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">
              Dresser Drawers, File Cabinets, and Desk Drawers
            </div>
            <div className="faq__card__text">
              Please clean all drawers in your dresser, file cabinets, and desk.
              Remember that your furniture will have to be lifted and
              transported, so it will be more difficult to carry if it is
              overstuffed and heavy. When moving furniture through difficult
              obstacles, such as a winding staircase, it's usually safer to
              remove everything, including the drawers, because it might be
              necessary to turn the furniture on its side or upside-down to get
              it through.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">Waterbeds</div>
            <div className="faq__card__text">
              We will gladly switch your waterbed if you have one. We are not,
              however, waterbed specialists. We will follow your orders, but
              before our crew leaves, you must conduct a final inspection. We
              will not dispatch crew members to make modifications later. If you
              prefer to have your bed moved by a waterbed business, please do
              so.
            </div>
          </div>
        </div>
      </div>

      <div className="faq__box">
        <div className="faq__title">
          <i className="fas fa-hammer"></i> Equipment
        </div>{" "}
        &nbsp;
        <input type="checkbox" id="faq3" />
        <label htmlFor="faq3" className="faq3__label">
          <i className="fas fa-caret-down" title="Read more"></i>
          <i className="fas fa-caret-up" title="Read less"></i>
        </label>
        <div className="faq3">
          <div className="faq__card">
            <div className="faq__card__title">
              How do you protect my belongings?
            </div>
            <div className="faq__card__text">
              VIP Movers is worried about the security of your possessions.
              That's why we have plenty of blankets to wrap your belongings in
              and moving straps to secure them to the truck's wall to keep them
              from changing. We also have dollies and hand trucks, as well as
              equipment for dismantling and reassembling even the most difficult
              of furniture. We also don't charge for the use of the protective
              gear we have (blankets, tape, plastic wrap, mattress cover, etc.).
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">
              How do you get heavy items upstairs in difficult moving
              situations?
            </div>
            <div className="faq__card__text">
              Boston is one of the United States' oldest cities, dating back to
              a time when people didn't need massive armoires on the first
              floor. It's a different story now. Hoisting is the answer since
              massive armoires and tiny spiral staircases don't mix. <br />
              <br /> VIP Movers are professionals in the field and have all of
              the requisite hoisting equipment. The cost of hoisting is $30.00
              per flight/per piece. If you have a sliding door on the upper
              floor balcony, we will carry your furniture up through the doors.{" "}
              <br />
              <br />
              However, some furniture is simply too large for the window, so
              please weigh your windows before moving. There are times when
              hoisting is not a good idea. We leave it to the discretion of the
              movers, and we ask that you honor their decision not to hoist a
              specific piece to prevent injuries.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">
              Will your trucks fit on my street?
            </div>
            <div className="faq__card__text">
              The VIP Movers Truck is a moving van with a lift gate or ramp, as
              well as a box that is large enough to accommodate most household
              moves. The moving van is not only longer than a car, but it is
              also much bigger. As a result, before making the switch, please
              take a practical look at your street. <br />
              <br /> Some streets are narrow, and some overpasses have a low
              clearance. When attempting to wedge a large truck into a narrow
              driveway, there are several ways to avoid scratching someone's
              parked vehicle. For these times, we have smaller vehicles. Let's
              make a plan ahead of time! <br />
              <br />
              We also ask that you assess the number of items you want to
              transport in a practical manner. We can only legally run the
              massive 26′ truck. Some families, on the other hand, are much
              larger. There are a few options for dealing with this scenario,
              the most popular of which is to make a second trip or order a
              second vehicle.
            </div>
          </div>
        </div>
      </div>

      <div className="faq__box">
        <div className="faq__title">
          <i className="fas fa-exclamation-triangle"></i> Disclaimer
        </div>{" "}
        &nbsp;
        <input type="checkbox" id="faq4" />
        <label htmlFor="faq4" className="faq4__label">
          <i className="fas fa-caret-down" title="Read more"></i>
          <i className="fas fa-caret-up" title="Read less"></i>
        </label>
        <div className="faq4">
          <div className="faq__card">
            <div className="faq__card__title">
              What if my relocation necessitates more effort than anticipated?
            </div>
            <div className="faq__card__text">
              If the transfer necessitates work outside the scope of the
              original service order, VIP Movers reserves the right to complete
              other responsibilities first. <br />
              <br /> For instance, you originally requested services for only
              two (2) rooms to be moved. You determine on the day of the
              transfer that you want additional rooms transferred that were not
              requested at the time of the order, as well as additional
              pick-ups/drop-offs, etc., greatly increasing the overall move
              time. We reserve the right to delay additional-requested services
              until our next availability and/or after completion of other jobs
              that day in order to keep our schedule on track for the next
              transfer.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">
              What if I have a damage claim?
            </div>
            <div className="faq__card__text">
              Any injury claims must be sent to our claims department in
              writing. On the day of your transfer, all applicable notices about
              these damages must be written on the bill of lading before the
              movers arrive. Remove yourself from the situation. Both our movers
              and our customers must test the furniture thoroughly as part of
              our company's standards. The client, on the other hand, is
              responsible for the final inspection. <br />
              <br />
              Upon completion of a transfer, all of our customers sign a bill of
              lading. “The above services were provided, and all goods were
              delivered in good order, except as noted,” it states. This
              document is important for any insurance provider in noting charges
              on the same day to ensure that the damage happened that day and
              that compensation will be given. <br />
              <br /> We are not obligated to respond to or process a claim until
              payment is made in full. Do not believe that you will be able to
              subtract the money from the final bill in the event of injury.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">
              How many crew members will be working my move?
            </div>
            <div className="faq__card__text">
              VIP Movers reserves the right to assign a specific number of
              movers to each task, based on our current schedule, availability,
              and weather conditions, among other factors.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">What if I need to cancel?</div>
            <div className="faq__card__text">
              Although we recognize that plans change, we do have certain
              restrictions when it comes to canceling our moving services.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">
              Is there a limit to how long your crews will work?
            </div>
            <div className="faq__card__text">
              We reserve the right to work for a maximum of 12 hours per day. To
              avoid breaking DOT hours of service rules for drivers, we may need
              to shorten a job or send a substitute driver in some
              circumstances.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">What is the weather is bad?</div>
            <div className="faq__card__text">
              If there is inclement weather, such as heavy/freezing rain, snow
              emergency, hurricane warning, weather travel ban, etc., VIP Movers
              reserves the right to reschedule the move at an agreed upon time,
              without liability.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">Flexible Policy</div>
            <div className="faq__card__text">
              – Applies to all discounted dates (check rates calendar) <br /> –
              100% deposit refund with at least 24 hours cancellation notice{" "}
              <br /> – No reschedule fee
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">Moderate Policy</div>
            <div className="faq__card__text">
              – Applies to all regular dates (check rates calendar) <br />– 100%
              deposit refund with at least 72 hours cancellation notice <br />–
              Each rescheduling with less than 4 business days notice is subject
              to a $99 fee.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">Strict Policy</div>
            <div className="faq__card__text">
              – Applies to all sub-peak, peak, high-peak dates (check rates
              calendar) <br />
              – The deposit will not be refunded in the case of any
              cancellation. <br />– Each rescheduling with less than 5 business
              days’ notice is subject to a $99 fee.
            </div>
          </div>
          <div className="faq__card">
            <div className="faq__card__title">Super Strict policy</div>
            <div className="faq__card__text">
              – Applies to all long distance moves <br /> – The deposit will not
              be refunded in the case of any cancellation. <br /> – Each
              rescheduling with less than 5 business days’ notice is subject to
              a $149 fee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
