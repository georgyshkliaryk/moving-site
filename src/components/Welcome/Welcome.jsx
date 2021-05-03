import React from "react";
import "./Welcome.scss";
import welcomeLogo from "../../assets/images/welcome_logo3.svg";

const Welcome = () => {
  return (
    <div className="welcome__container">
      <div className="welcome__title">
        Welcome to MassMoving - New Boston MA Movers Company!
      </div>
      <div className="welcome__section">
        <div className="welcome__description">
          Are you looking for the best Boston Movers with a verifiable
          reputation for quality? Nothing signifies quality more than the
          distinguished awards that Marathon Moving has been awarded. We
          received Best of Boston Award from Boston Magazine. MassMoving also
          received its’ 15th straight Super Service award from Angie’s List and
          maintains an A+ rating at the BBB. Our reputation for excellence is
          unparalleled, and is further evidenced by the fact that over 90% of
          our customers are either repeat or referral. Moving Experience Are you
          looking for a mover in Boston with experience in all types of moves?
          Marathon Moving has been in business for over 20 years and has
          completed over 40,000 moves of all shapes and sizes. Whether its’
          local, long distance, or even an international move we will be ready
          for your call. Let our Massachusetts professional movers put their
          experience to work for you. Moving Packing We are the local Boston
          moving company that provides the best value? MassMoving's competitive
          moving rates and top quality moving crews provide the value you are
          looking for in local movers in Massachusetts.
          <a className="btn__more" href="/about">More about our company</a>
        </div>
        <img src={welcomeLogo} alt="welcomeLogo" />
      </div>
    </div>
  );
};

export default Welcome;
