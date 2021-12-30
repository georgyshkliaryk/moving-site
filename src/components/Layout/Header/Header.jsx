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
              <img src={mainLogo3} alt="main-logo" />
            </a>
          </div>
          <div className="nav__links">
            <div className="nav__link">
              <a href="/">Home</a>
            </div>
            <div className="nav__link">
              <a href="/services" id="services">
                Services <i className="fas fa-angle-down"></i>
              </a>
              <div className="services__sub">
                <a href="/services/#local">Local Moving</a>
                <a href="/services/#long">Long Distance</a>
                <a href="/services/#packing">Packing Services</a>
                <a href="/services/#storage">Storage</a>
                <a href="/services/#office">Office/Commercial</a>
              </div>
            </div>

            <div className="nav__link">
              <a href="/prices" id="prices">
                Prices <i className="fas fa-angle-down"></i>
              </a>
              <div className="services__sub">
                <a href="/prices/#local-prices">
                  Local&nbsp;Moving&nbsp;Prices
                </a>
                <a href="/prices/#long-prices">
                  Long&nbsp;Distance&nbsp;Prices
                </a>
                <a href="/prices/#storage-prices">Storage&nbsp;Prices</a>
              </div>
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
            <label htmlFor="hamburger" style={{ color: this.state.color }}>
              <i className="fas fa-bars"></i>
            </label>
            <div
              className="hamburger__content"
              style={{ display: this.state.show }}
            >
              <div className="nav__link">
                <a href="/">Home</a>
              </div>
              <div className="nav__link">
                <input type="checkbox" id="services__mobile" />
                <label htmlFor="services__mobile">
                  Services <i className="fas fa-angle-down"></i>
                  <i className="fas fa-angle-up"></i>
                </label>
                <div className="services__nav__content">
                  <a
                    href="/services/#local"
                    onClick={() => {
                      this.setState({ show: "none", color: "#f44336" });
                    }}
                  >
                    Local Moving
                  </a>
                  <a
                    href="/services/#long"
                    onClick={() => {
                      this.setState({ show: "none", color: "#f44336" });
                    }}
                  >
                    Long Distance
                  </a>
                  <a
                    href="/services/#packing2"
                    onClick={() => {
                      this.setState({ show: "none", color: "#f44336" });
                    }}
                  >
                    Packing Services
                  </a>
                  <a
                    href="/services/#storage"
                    onClick={() => {
                      this.setState({ show: "none", color: "#f44336" });
                    }}
                  >
                    Storage
                  </a>
                  <a
                    href="/services/#office2"
                    onClick={() => {
                      this.setState({ show: "none", color: "#f44336" });
                    }}
                  >
                    Office/Commercial
                  </a>
                </div>
              </div>
              <div className="nav__link">
                <input type="checkbox" id="prices__mobile" />
                <label htmlFor="prices__mobile">
                  Prices <i className="fas fa-angle-down"></i>
                  <i className="fas fa-angle-up"></i>
                </label>
                <div className="prices__nav__content">
                  <a
                    href="/prices/#local-prices"
                    onClick={() => {
                      this.setState({ show: "none", color: "#f44336" });
                    }}
                  >
                    Local&nbsp;Moving&nbsp;Prices
                  </a>
                  <a
                    href="/prices/#long-prices2"
                    onClick={() => {
                      this.setState({ show: "none", color: "#f44336" });
                    }}
                  >
                    Long&nbsp;Distance&nbsp;Prices
                  </a>
                  <a
                    href="/prices/#storage-prices2"
                    onClick={() => {
                      this.setState({ show: "none", color: "#f44336" });
                    }}
                  >
                    Storage&nbsp;Prices
                  </a>
                </div>
              </div>
              <div className="nav__link">
                <a href="/faq">FAQ</a>
              </div>
              <div className="nav__link">
                <a href="/about">About us</a>
              </div>
              <div className="nav__link">
                <a
                  href="/#contacts"
                  onClick={() => {
                    this.setState({ show: "none", color: "#f44336" });
                  }}
                >
                  Contact us
                </a>
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
                  <i className="fas fa-times"></i>
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
