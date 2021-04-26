import React from "react";
import "./ContactHeader.scss";

const ContactHeader = () => {
  return (
    <div className="socials__container">
      <div className="phone">
        <a href="tel:+74951234567"><i class="fas fa-phone-alt"></i> &nbsp;&nbsp;&nbsp; +1-123-45-67</a>
        <a href="mailto:massmoving@gmail.com"><i class="fas fa-envelope"></i>&nbsp;&nbsp;&nbsp; massmoving@gmail.com</a>
      </div>
      <div className="socials">
        <a href="https://www.intagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://www.whatsapp.com" target="_blank"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  );
};

export default ContactHeader;
