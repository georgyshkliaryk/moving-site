import React from "react";
import emailjs from "emailjs-com";

import "./Quote.scss";
import contacts2 from "../../assets/images/contacts2.svg";

const Quote = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_iccmvgc",
        e.target,
        "user_6EwKIk0rCp4wKaNhjX1Zb"
      )
      .then(
        (result) => {
          alert(
            "Thanks for the request! Our team will contact you as soon as possible!"
          );
        },
        (error) => {
          alert(
            "There was an error sending the request. Please try again later."
          );
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="why__quote__title" id="contacts">
        Stay in touch with Us!
      </div>
      <div className="quote__container">
        <div className="quote wow jackInTheBox" data-wow-delay="0.5s">
          <div className="quote__title">
            <i className="fas fa-list"></i> Get a free quote now!
            <div className="quote__title__content">
              Your contact information is safe with us and will not be shared
              with anyone.
            </div>
          </div>
          <form className="quote__form" onSubmit={sendEmail}>
            <div className="input__container">
              <div className="input__flex">
                <span>
                  <i className="fas fa-user-alt"></i>
                </span>
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name*"
                  id="first-name"
                  required
                />
                <input type="text" name="last-name" placeholder="Last Name" />
              </div>
            </div>
            <div className="input__container">
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              <input type="email" name="email" placeholder="Email*" required />
            </div>
            <div className="input__container phone">
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
              <input type="phone" name="phone" placeholder="Phone*" required />
            </div>
            <span className="date__text">Desired moving date*</span>
            <div className="input__container date">
              <span>
                <i className="far fa-calendar-alt"></i>
              </span>
              <input type="date" name="date" required />
            </div>
            <div className="input__container">
              <div className="input__flex">
                <span>
                  <i className="fas fa-map-marked-alt"></i>
                </span>
                <input
                  type="text"
                  name="move-from"
                  placeholder="Move From*"
                  id="move-from"
                  required
                />
                <input
                  type="text"
                  name="move-to"
                  placeholder="Move To*"
                  required
                />
              </div>
            </div>
            <div className="input__container">
              <span>
                <i className="fas fa-box-open"></i>
              </span>
              <select name="service" id="">
                <option value="Local moving">Local moving</option>
                <option value="Long distace moving">Long distace moving</option>
                <option value="Office/Commercial">Office/Commercial</option>
                <option value="Storage">Storage</option>
              </select>
            </div>
            <div className="input__container">
              <span>
                <i className="fas fa-home"></i>
              </span>
              <select name="size" id="">
                <option value="Room or less apartment">
                  Room or less apartment
                </option>
                <option value="Studio">Studio</option>
                <option value="1 bedroom apartment">1 bedroom apartment</option>
                <option value="2 bedroom apartment">2 bedroom apartment</option>
                <option value="3 bedroom apartment">3 bedroom apartment</option>
                <option value="1 bedroom house">1 bedroom house</option>
                <option value="2 bedroom house">2 bedroom house</option>
                <option value="3 bedroom house">3 bedroom house</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type="submit">Request a quote</button>
          </form>
          <div className="quote__warning">
            By clicking on “Request a Quote”, I agree to being contacted by
            text, SMS, email, or phone in connection with my upcoming move from
            or on behalf of VIP Movers Company.
          </div>
        </div>
        <div className="contacts">
          <img
            src={contacts2}
            alt="contacts"
            className="contacts__img wow fadeInRight"
            data-wow-delay="0.3s"
          />
          <div className="contacts__content">
            <div className="contacts__links">
              <div>
                <i className="fas fa-phone-alt"></i>
                &nbsp;&nbsp;&nbsp;617-764-6461
              </div>
              <div>
                <i className="fas fa-envelope"></i>
                &nbsp;&nbsp;&nbsp;vipmoversboston@gmail.com
              </div>
              <div>
                <i className="far fa-clock"></i>&nbsp;&nbsp;&nbsp;9am — 6pm
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;151
                31 Pearson Rd , Somerville 02144
              </div>
            </div>
            <div className="contacts__socials">
              <a
                href="https://www.instagram.com/vipmoversboston/"
                target="_blank"
                title="instagram.com"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.yelp.com/biz/vip-movers-boston-boston"
                target="_blank"
                title="yelp.com"
                rel="noreferrer"
              >
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.226900023373!2d-71.11670508430635!3d42.40161314046856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e376d8cfb914c3%3A0x9681ce0b21c872d0!2zMzEgUGVhcnNvbiBSZCwgU29tZXJ2aWxsZSwgTUEgMDIxNDQsINCh0KjQkA!5e0!3m2!1sru!2sby!4v1620771053814!5m2!1sru!2sby"
        allowFullScreen={true}
        loading="lazy"
        title="map"
      ></iframe>
    </div>
  );
};

export default Quote;
