import React from "react";
import "./MovingOptions.scss";
import localImg from "../../assets/images/services-local.webp";
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
            If you're still considering moving your belongings yourself rather
            than hiring licensed local movers, there are a few items to think
            about before making your final decision. Skilled movers who work in
            the Boston Local Moving services sector would undoubtedly be
            superior in almost every aspect of moving. VIP Movers are familiar
            with the specific street locations and neighborhood stumbling
            blocks, such as truck limits, parking permits, traffic appearances,
            and workarounds. <br />
            <br /> <span>VIP Movers</span> will send a representative for a
            visual estimate prior to the moving date, ensuring that the quote
            given by the moving manager is correct and that you are not
            overcharged. Importantly, VIP Movers Company will be able to
            dispatch additional movers and moving equipment if additional
            assistance is needed during the moving phase. When you hire skilled
            movers, you won't have to think about any moving-related issues,
            such as the protection of your belongings, extra packing materials,
            covers, or wasting your time and money.
          </div>
        </div>
        <img src={localImg} alt="" className="moving__right adapt" />
      </div>
      <div className="moving__box">
        <img src={longImg} alt="" className="moving__right" />
        <div className="moving__left adapt">
          <div className="moving__title">Long Distance Movers</div>
          <div className="moving__description">
            There are some things that you will watch for an eternity: a fire
            burning, water streaming, a starry sky shining brightly, and skilled
            movers packing your <span>Long Distance Move</span>. <br />
            <br /> Have you ever heard an old tale about the difficulties you'll
            encounter while relocating from Boston to another state or around
            the country? That is, after all, an old legend. At least, that's the
            case when it comes to VIP movers. Our{" "}
            <span>Long Distance Moving Company</span> will take the stress out
            of any Interstate Move. <br />
            <br /> When you use our Long Distance Moving Service, you get a
            full, guaranteed, one-price transfer from Boston to a destination of
            your choice for a flat rate. There will be no more adjusting
            forecasts, headaches, or shifting surprises.
          </div>
        </div>
      </div>
      <div className="moving__box">
        <div className="moving__left">
          <div className="moving__title">Packing Services</div>
          <div className="moving__description">
            Are you on the lookout for low-cost long-distance movers? You can
            hire VIP movers to transport you from Massachusetts to any location
            in the United States. We provide not only excellent service but also
            competitive pricing; with our moving business, all of your
            belongings can arrive safely at their new place. Our company is
            Fully Licensed Insured! We offer Flat Rates and we wont charge you
            extra hidden fees. We take care of the packing, loading, delivery,
            and unloading. <br /> <br /> You won't have to worry about your
            belongings making it safely to their new location if you hire
            <span>VIP Movers</span> for your long-distance transfer.
          </div>
        </div>
        <img src={packingImg} alt="" className="moving__right adapt" />
      </div>
      <div className="moving__box">
        <img src={storageImg} alt="" className="moving__right" />
        <div className="moving__left adapt">
          <div className="moving__title">Short- and Long-Term Storage</div>
          <div className="moving__description">
            Choosing a moving company to store your belongings is similar to
            deciding which bank to open a savings account with. It needs to be
            dependable, trustworthy, and, of course, safe and stable. <br />
            <br /> People consistently underestimate the value of selecting a
            suitable, well-maintained, and climate-controlled storage unit for
            their needs when it comes to short-term storage. Before making a
            storage decision, there are far too many factors to weigh. Even a
            week of extreme heat or cold will cause harm to your belongings.{" "}
            <br />
            <br /> When you need temporary storage, it's critical to find movers
            that are skilled enough to take proper care of your belongings and
            have an appropriate storage solution. <br /> <br />
            <span>From $130 (per month)</span>
          </div>
        </div>
      </div>
      <div className="moving__box">
        <div className="moving__left">
          <div className="moving__title">Office/Commercial Moving</div>
          <div className="moving__description">
            Moving your business or <span>office</span>? We realize that
            commercial transfers must often take place outside of normal
            business hours, and we are happy to help. It's our pleasure, as
            Boston's preferred commercial moving specialists, to carefully pack
            your belongings, load them into our fully-equipped trucks, transport
            them to your new venue, unload, unpack, and position every object in
            its proper spot – all at a time that's convenient for you. <br />
            <br /> VIP Movers is your best choice for business movements in
            Boston because it is licensed and insured. <span>
              Our crew
            </span>{" "}
            will arrive early and stay until the job is completed to your
            satisfaction. We'll keep your office furniture and appliances clean
            and in good working order. We'll take care of all the heavy lifting
            for you, and we'll do it with a smile on our faces.
          </div>
        </div>
        <img src={officeImg} alt="" className="moving__right" />
      </div>
      <a className="button__more" href="/prices">
        See full pricing
      </a>
    </div>
  );
};

export default MovingOptions;
