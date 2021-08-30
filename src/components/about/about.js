import React from "react";
import "./about.css";

function Services() {
  return (
    <div className="about">
      <div className="about_left">
        <h1 className="about_title">Effective tools for busy Administrators</h1>
        <p className="about_desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="about_right">
        <div className="about_card">
          <img src="/images/crypto-creation.png" className="card_icon_2" />
          <h5>Awesome Theme</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="about_card">
          <img src="/images/growth-graph.png" className="card_icon_2" />
          <h5>Highly Scalable</h5>
          <p>
            Momboo is a HTML5 template based on Sass and Bootstrap 4 with modern
            and creative multipurpose design.
          </p>
        </div>
        <div className="about_card">
          <img src="/images/responsive-device.png" className="card_icon_2" />
          <h5>Responsive layout</h5>
          <p>
            Momboo is a HTML5 template based on Sass and Bootstrap 4 with modern
            and creative multipurpose design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
