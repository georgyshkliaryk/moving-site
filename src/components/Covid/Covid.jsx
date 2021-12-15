import React from "react";
import "./Covid.scss";
import covidImg from "../../assets/images/covid-blur.jpg";
import { Parallax } from "react-parallax";
import ContactHeader from "../ContactHeader/ContactHeader";

const Covid = () => {
  return (
    <div className="covid__container">
      <div className="about__container">
        <Parallax
          blur={0}
          bgImage={covidImg}
          bgImageAlt="covid-image"
          strength={200}
        >
          <ContactHeader />
          <div className="about__content">
            <div className="about__title">Updates regarding COVID-19</div>
            <div className="about__description">
              Dear Clients, <br />
              <br /> Our company is still open for business (moving and storage
              services were listed on the "key" page list) as we adjust to new
              ways of working while helping you. Any improvements will be
              communicated to you. As our team at VIP Movers Company & Storage
              has been keeping an eye on developments, we have decided to work
              with and monitor information from authorities. We want to help
              reduce the effect of Covid-19 on the businesses and communities we
              represent, so here's what we're going to do: <br /> <br /> Safety
              for Everyone
            </div>
          </div>
        </Parallax>
      </div>
      <div className="covid__text">
        <div className="covid__title">
          <i class="fas fa-thermometer-half"></i> Pre-move team member Wellnes
          check:
        </div>
        <div className="covid__content">
          To help educate and raise awareness among our team members, we have
          posted signs and symptoms of COVID-19. Any team member who feels
          uneasy about coming into the office because they believe or think they
          might have come into touch with an infected individual will not come
          in, and we have extra staff on standby. All team members will have
          hand cleaning supplies on hand when they arrive at our offices.
        </div>
      </div>
      <div className="covid__text">
        <div className="covid__title">
          <i class="fas fa-head-side-mask"></i>
          Examination gloves and masks are worn:
        </div>
        <div className="covid__content">
          As an added measure of hygiene and self-protection, move team members
          will wear 4 mil thick inspection gloves when conducting move services.
          After each pass, the gloves will be discarded.
        </div>
      </div>
      <div className="covid__text">
        <div className="covid__title">
          <i class="fas fa-hands-wash"></i>Truck & equipment cleaning:
        </div>
        <div className="covid__content">
          After each step, all high-touch surfaces, such as door handles and
          steering wheels, will be wiped down.
        </div>
      </div>
      <div className="covid__text">
        <div className="covid__title">
          <i class="fas fa-people-arrows"></i>Social distancing:
        </div>
        <div className="covid__content">
          Team members will practice the 6' social distancing between team
          members and customers as they arrive at our customers' homes or
          offices.
        </div>
      </div>
      <div className="covid__text">
        <div className="covid__title">
          <i class="fas fa-door-open"></i>
          Open doorways and windows when available:
        </div>
        <div className="covid__content">
          Where possible, we would ask our customers to open outside doors and
          windows during a residential move to improve air circulation.
        </div>
      </div>
      <div className="covid__contact">
        <b>If you would like additional information, please contact us:</b>{" "}
        <br />
        <br /> Phone: <span>617-764-6461</span> <br />
        <br /> E-mail: <span>vipmoversboston@gmail.com</span> <br />
        <br />
        <br />
        Thank you, The Team of <span>VIP Movers Boston</span>.
      </div>
    </div>
  );
};

export default Covid;
