import React from "react";
import "./services.css";
import { FiMonitor } from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";
import { ReactComponent as Monitor } from "../../assets/monitor.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as Design } from "../../assets/web-design.svg";

function Services() {
  return (
    <div className="services">
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div>
          <button className="about_btn">More About</button>
        </div>
      </div>
      <div className="service_right">
        <span>
          <div className="service_card">
            <div className="icon_div">
              <Monitor className="card_icon" />
            </div>
            <h3>Web Development</h3>
          </div>
          <div className="service_card">
            <div className="icon_div">
              <Edit className="card_icon" />
            </div>
            <h3>Logo & Identity</h3>
          </div>
        </span>
        <div>
          <div className="service_card">
            <div className="icon_div">
              <Design className="card_icon" />
            </div>
            <h3>Graphics Design</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
