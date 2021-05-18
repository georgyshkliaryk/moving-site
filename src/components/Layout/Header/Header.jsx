import React from "react";
import "./Header.scss";
import mainLogo from "../../../assets/images/logo_v4.svg";
import mainLogo3 from "../../../assets/images/main-logo3.png";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      show: "none",
      color: "#f44336",
    };
  }

  render() {
    return (
      <div>
        <div className="header__covid">
          We are open!{" "}
          <a href="/covid-updates">Read updates regarding COVID-19</a>.
        </div>
        <nav className="nav__container">
          <div className="nav__title">
            <a href="/">
              <img src={mainLogo3} alt="main-logo" className="wow rubberBand" />
            </a>
          </div>
          <div className="nav__links">
            <div className="nav__link">
              <a href="/">Home</a>
            </div>
            <div className="nav__link">
              <a href="/services">Services</a>
            </div>
            <div className="nav__link">
              <a href="/prices">Prices</a>
            </div>
            <div className="nav__link">
              <a href="/faq">FAQ</a>
            </div>
            <div className="nav__link">
              <a href="/about">About us</a>
            </div>
            <div className="nav__link">
              <a href="/#contacts">Contact us</a>
            </div>
          </div>

          <div className="nav__hamburger">
            <input
              type="checkbox"
              id="hamburger"
              onChange={() => {
                if (this.state.show == "block") {
                  this.setState({ show: "none", color: "#f44336" });
                }
                if (this.state.show == "none") {
                  this.setState({ show: "block", color: "grey" });
                }
              }}
            />
            <label for="hamburger" style={{ color: this.state.color }}>
              <i class="fas fa-bars"></i>
            </label>
            <div
              className="hamburger__content"
              style={{ display: this.state.show }}
            >
              <div className="nav__link">
                <a href="/">Home</a>
              </div>
              <div className="nav__link">
                <a href="/services">Services</a>
              </div>
              <div className="nav__link">
                <a href="/prices">Prices</a>
              </div>
              <div className="nav__link">
                <a href="/faq">FAQ</a>
              </div>
              <div className="nav__link">
                <a href="/about">About us</a>
              </div>
              <div className="nav__link">
                <a href="/#contacts">Contact us</a>
              </div>
              <div className="nav__link">
                <a
                  onClick={() => {
                    if (this.state.show == "block") {
                      this.setState({ show: "none", color: "#f44336" });
                    }
                    if (this.state.show == "none") {
                      this.setState({ show: "block", color: "grey" });
                    }
                  }}
                >
                  <i class="fas fa-times"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

//export default Header;
