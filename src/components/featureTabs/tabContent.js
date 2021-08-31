import React from "react";
import "./tabContent.css";

function TabContent() {
  return (
    <div className="tab_content">
      <div className="tab_left"></div>
      <div className="tab_right">
        <h1>
          Welcome to Mombo <span> Digital Marketing </span>
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
    </div>
  );
}

export default TabContent;
