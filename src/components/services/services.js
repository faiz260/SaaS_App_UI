import React from "react";
import "./services.css";
import { ReactComponent as Monitor } from "../../assets/monitor.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as Design } from "../../assets/web-design.svg";
import Fade from "react-reveal/Fade";

function Services() {
  return (
    <div className="services" id="services">
      <Fade bottom>
        <div className="service_left">
          <h1 className="service_title">
            Effective tools for busy Administrators
          </h1>
          <p className="service_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="service_desc2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <div>
            <button className="about_btn">More About</button>
          </div>
        </div>
      </Fade>
      <div className="service_right">
        <span>
          <Fade bottom>
            <div className="service_card">
              <div className="icon_div">
                <Monitor className="card_icon" />
              </div>
              <h3>Web Development</h3>
            </div>
          </Fade>
          <Fade bottom>
            <div className="service_card">
              <div className="icon_div">
                <Edit className="card_icon" />
              </div>
              <h3>Logo & Identity</h3>
            </div>
          </Fade>
        </span>
        <div>
          <Fade bottom>
            <div className="service_card">
              <div className="icon_div">
                <Design className="card_icon" />
              </div>
              <h3>Graphics Design</h3>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Services;
