import React from "react";
import "./Quote.scss";
import contacts from "../../assets/images/contacts.svg";

const Quote = () => {
  return (
    <div>
      <div className="why__quote__title" id="contacts">
        Stay in touch with Us!
      </div>
      <div className="quote__container">
        <div className="quote">
          <div className="quote__title">
            <i class="fas fa-list"></i> Get a free quote now!
            <div className="quote__title__content">
              Your contact information is safe with us and will not be shared
              with anyone.
            </div>
          </div>
          <form action="" className="quote__form">
            <div className="input__container">
              <span>
                <i class="fas fa-envelope"></i>
              </span>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="input__container">
              <span>
                <i class="fas fa-phone-alt"></i>
              </span>
              <input type="phone" name="phone" placeholder="Phone" />
            </div>
            <div className="input__container">
              <span>
                <i class="far fa-calendar-alt"></i>
              </span>
              <input
                type="text"
                name="date"
                placeholder="Move date"
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => {
                  e.currentTarget.type = "text";
                  e.currentTarget.placeholder = "Move date";
                }}
              />
            </div>
            <div className="input__container">
              <span>
                <i class="fas fa-box-open"></i>
              </span>
              <select name="service" id="">
                <option value="local">Local moving</option>
                <option value="long">Long distace moving</option>
                <option value="office">Office/Commercial</option>
                <option value="storage">Storage</option>
              </select>
            </div>
            <button type="submit">Request a quote</button>
          </form>
          <div className="quote__warning">
            By clicking on “Request a Quote”, I agree to being contacted by
            text, SMS, email, or phone in connection with my upcoming move from
            or on behalf of MassMoving Company.
          </div>
        </div>
        <div className="contacts">
          <img src={contacts} alt="contacts" className="contacts__img" />
          <div className="contacts__content">
            <div className="contacts__links">
              <div>
                <i class="fas fa-phone-alt"></i>&nbsp;&nbsp;&nbsp;(413) 841-6497
              </div>
              <div>
                <i class="fas fa-envelope"></i>
                &nbsp;&nbsp;&nbsp;vipmoversboston@gmail.com
              </div>
              <div>
                <i class="far fa-clock"></i>&nbsp;&nbsp;&nbsp;9am — 6pm
              </div>
              <div>
                <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;151
                31 Pearson Rd , Somerville 02144
              </div>
            </div>
            <div className="contacts__socials">
              <a
                href="https://www.instagram.com/vipmoversboston/"
                target="_blank"
                title="instagram.com"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                title="facebook.com"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                title="whatsapp.com"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.226900023373!2d-71.11670508430635!3d42.40161314046856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e376d8cfb914c3%3A0x9681ce0b21c872d0!2zMzEgUGVhcnNvbiBSZCwgU29tZXJ2aWxsZSwgTUEgMDIxNDQsINCh0KjQkA!5e0!3m2!1sru!2sby!4v1620771053814!5m2!1sru!2sby" allowfullscreen="" loading="lazy"></iframe>
    </div>
  );
};

export default Quote;
