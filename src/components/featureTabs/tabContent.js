import React from "react";
import "./tabContent.css";
import Fade from "react-reveal/Fade";

function TabContent({ img }) {
  return (
    <div className="tab_content">
      <Fade left>
        <div className="tab_left">
          <img src={img} alt="tab_pic" />
        </div>
      </Fade>
      <Fade right>
        <div className="tab_right">
          <h1>
            Welcome to Title <span> Digital Marketing </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="lower_section">
            <span>
              <h5>Mobile Friendly</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </span>
            <span>
              <h5>Multiple Layouts</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </span>
          </div>
          <button className="about_btn">More About</button>
        </div>
      </Fade>
    </div>
  );
}

export default TabContent;
