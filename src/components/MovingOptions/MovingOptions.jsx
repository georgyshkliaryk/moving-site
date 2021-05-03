import React from "react";
import "./MovingOptions.scss";
import localImg from "../../assets/images/services-local.webp"
import longImg from "../../assets/images/services-long.jpg";
import packingImg from "../../assets/images/services-packing.jpg";
import officeImg from "../../assets/images/services-office.png";
import storageImg from "../../assets/images/services-storage.jpg";

const MovingOptions = () => {
  return (
    <div className="moving__container">
        <div className="moving__page__title">Take a look at our services</div>
      <div className="moving__box">
        <div className="moving__left">
          <div className="moving__title">Local Movers</div>
          <div className="moving__description">
            If you still think of moving belongings yourself instead of hiring
            professional local movers, there are some important things to
            consider before making the final moving decision. Professional
            movers, who perform in the Greater Boston Local Moving services
            area, will surely be better in almost every moving aspect. Movers
            are familiar with the particular street locations and neighborhood
            hindrances, including truck restrictions, parking permits, traffic
            appearances, and workarounds. <span>MassMovers</span> will send a
            representative for a visual estimate before the moving date, making
            sure the quote, a moving manager provided, is accurate and you are
            not overcharged. What’s also important, Flash Moving Company will be
            able to send additional movers and moving equipment any time extra
            help is required during the moving process. Hiring professionals
            movers means you won’t have to worry about any moving-related
            difficulties, as well as the safety of your goods, extra packing
            materials, covers, and waste of your time and money.
          </div>
        </div>
        <img
          src={localImg}
          alt=""
          className="moving__right"
        />
      </div>
      <div className="moving__box">
        <img
          src={longImg}
          alt=""
          className="moving__right"
        />
        <div className="moving__left">
          <div className="moving__title">Long Distance Movers</div>
          <div className="moving__description">
            There are things for which you can watch forever: fire burning,
            water flowing, shining starry sky, and professional movers packing
            your <span>Long Distance Move</span>. <br />
            <br /> Have you ever heard one old storytelling about the hassle
            you’ll face while relocating from Boston to another state or moving
            across the country? Well, that’s an ancient myth. At least when it
            comes to MassMovers. Our <span>
              Long Distance Moving Company
            </span>{" "}
            will take the stress out of any Interstate Move. <br />
            <br /> Choosing our Long Distance Moving Service you choose
            complete, guaranteed, a one-price move based on a flat rate from
            Boston to a destination of your choice. No more changing estimates,
            headaches, and moving surprises.
          </div>
        </div>
      </div>
      <div className="moving__box">
        <div className="moving__left">
          <div className="moving__title">Packing Services</div>
          <div className="moving__description">
            If you are trying to avoid extra costs and save some money on your
            move, you should consider hiring professional packers. It’ll save
            your time, your money and will leave the stress out of your move.{" "}
            <br />
            <br />
            Any moving company that provides home packing services will send
            experienced, professional packers to your place and will deliver all
            necessary equipment such as boxes, packing paper, bubble wrap,
            stretch and shrink wrap, rolls of tape, blankets, and home
            protection. <br />
            <br /> Packers will use special techniques and skills to make sure
            your belongings are delivered safely and secured to any desired
            destination, whether it is a local move within the Boston area or a
            long-distance journey. <br />
            <br /> With Flash Movers, you are guaranteed to receive an
            outstanding, top-notch packing service and moving experience at
            affordable pricing with no hidden fees.
          </div>
        </div>
        <img
          src={packingImg}
          alt=""
          className="moving__right"
        />
      </div>
      <div className="moving__box">
        <img
          src={storageImg}
          alt=""
          className="moving__right"
        />
        <div className="moving__left">
          <div className="moving__title">Short- and Long-Term Storage</div>
          <div className="moving__description">
            Choosing a moving company that would store your belongings is almost
            the same as choosing a bank to open a saving account. It should be
            reliable; it should be trustworthy and, of course, safe and secured.{" "}
            <br />
            <br /> Every time it comes to short-term storage, people
            underestimate the importance of choosing an appropriate,
            well-maintained and climate-controlled storage unit for their needs.
            There are too many things to consider before making a storage
            decision.
            Even a week of extremely hot or cold temperatures could damage your
            possessions. <br />
            <br /> Whenever you need temporary storage, it is crucial to find
            moving professionals, experienced enough to take necessary care of
            your items and offer a storage solution that is right for you.{" "}
            <br /> <br />
            <span>From $100 (per month)</span>
          </div>
        </div>
      </div>
      <div className="moving__box">
        <div className="moving__left">
          <div className="moving__title">Office/Commercial Moving</div>
          <div className="moving__description">
            Moving your business or <span>office</span>? We understand that
            commercial moves sometimes need to take place after business hours,
            and we’re happy to oblige. As Boston’s preferred commercial moving
            specialists, it’s our pleasure to carefully pack your belongings,
            load them in our fully-equipped trucks, deliver them to you new
            location, unload, unpack, and place every item in its proper spot –
            all at a time that’s convenient for you. <br />
            <br /> Licensed and insured, Mozart Moving is your number one choice
            for business moves in Boston. <span>Our crew</span> will arrive
            early and stay until the job is completed to your satisfaction.
            We’ll protect your office furniture and equipment, so nothing gets
            dirty or damaged. We handle all the heavy lifting for you, and we
            always do it with a smile.
          </div>
        </div>
        <img
          src={officeImg}
          alt=""
          className="moving__right"
        />
      </div>
      <a className="btn__more" href="/prices">
        See full pricing
      </a>
    </div>
  );
};

export default MovingOptions;
