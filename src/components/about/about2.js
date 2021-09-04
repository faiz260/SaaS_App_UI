import React from "react";
import "./about2.css";
import Fade from "react-reveal/Fade";

function Services() {
  return (
    <div className="about2">
      <Fade left>
        <div className="about2_left">
          <img src="/images/marketing_team.png" alt="marketing_team" />
        </div>
      </Fade>
      <Fade right>
        <div className="about2_right">
          <h1 className="about2_title">Marketing experts are ready to help</h1>
          <p className="about2_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="about2_desc2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <div>
            <button className="about_btn">More About</button>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Services;
