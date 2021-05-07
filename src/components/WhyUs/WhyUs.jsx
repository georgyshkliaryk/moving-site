import React from "react";
import "./WhyUs.scss";

const WhyUs = () => {
  return (
    <div className="why__container">
      <div className="why__title">Why people choose VIP Movers?</div>
      <div className="why__options">
        <div className="why__option">
          <i class="fas fa-users"></i>
          <div className="why__option__title">Professional Young Team</div>
          <div className="why__option__description">
            VIP Movers are young professionals with 2+ years of experience in
            the moving industry. Only full-time employees. No "contractors" or
            "one-day" laborers.
          </div>
        </div>
        <div className="why__option">
          <i class="fas fa-umbrella"></i>
          <div className="why__option__title">We Care about Your Stuff</div>
          <div className="why__option__description">
            We protect your home and furniture with premium quality moving
            blankets and use special door-jamb and banister protections. You can
            check out some pictures here.
          </div>
        </div>
        <div className="why__option">
          <i class="fas fa-id-badge"></i>
          <div className="why__option__title">Fully Licensed and Insured</div>
          <div className="why__option__description">
            You do not have to worry about anything, everything is under our
            control.
          </div>
        </div>
        <div className="why__option">
          <i class="fas fa-tools"></i>
          <div className="why__option__title">
            Assembling/Reassembling Furniture
          </div>
          <div className="why__option__description">
            Every crew member is a part of a professionally trained team. We use
            special tools to perform a fast and effective job.
          </div>
        </div>
        <div className="why__option">
          <i class="fas fa-stopwatch"></i>
          <div className="why__option__title">
            Less than 30-minutes Respond Rate
          </div>
          <div className="why__option__description">
            Our managers typically answer your requests within 30 minutes. We
            are always available during working hours and would also answer your
            questions 24/7 via email.
          </div>
        </div> 
      </div>
      
    </div>
  );
};

export default WhyUs;
