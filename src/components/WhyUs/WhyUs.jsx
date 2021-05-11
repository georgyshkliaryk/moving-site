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
          <div className="why__option__title">
            We're concerned about your stuff.
          </div>
          <div className="why__option__description">
            We use high quality moving blankets and special door-jamb and
            banister protections to protect your home and furniture. You can see
            some of the photos <a href="/about">here</a>.
          </div>
        </div>
        <div className="why__option">
          <i class="fas fa-id-badge"></i>
          <div className="why__option__title">Fully Insured and Licensed</div>
          <div className="why__option__description">
            You don't have to be concerned about anything, everything is in our
            possession.
          </div>
        </div>
        <div className="why__option">
          <i class="fas fa-tools"></i>
          <div className="why__option__title">
            Assembling/Reassembling Furniture
          </div>
          <div className="why__option__description">
            Every member of the crew is part of a well-trained team. To complete
            a job quickly and efficiently, we employ specialized equipment.
          </div>
        </div>
        <div className="why__option">
          <i class="fas fa-stopwatch"></i>
          <div className="why__option__title">
            30 minutes or less Rate of response
          </div>
          <div className="why__option__description">
            In most cases, our managers respond to your requests within 30
            minutes. We are available during business hours and will respond to
            your questions via email 24 hours a day, 7 days a week.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
