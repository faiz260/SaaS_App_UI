import React from "react";
import "./about.css";
import About2 from "./about2";
import Fade from "react-reveal/Fade";

function Services() {
  return (
    <span>
      <div className="about">
        <div className="about_left">
          <Fade bottom>
            <h1 className="about_title">
              Effective tools for busy Administrators
            </h1>
          </Fade>
          <Fade bottom>
            <p className="about_desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Fade>
        </div>
        <div className="about_right">
          <Fade bottom>
            <div className="about_card">
              <img
                src="/images/crypto-creation.png"
                alt="card-icon"
                className="card_icon_2"
              />
              <h5>Awesome Theme</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="about_card">
              <img
                src="/images/growth-graph.png"
                alt="card-icon"
                className="card_icon_2"
              />
              <h5>Highly Scalable</h5>
              <p>
                Momboo is a HTML5 template based on Sass and Bootstrap 4 with
                modern and creative multipurpose design.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="about_card">
              <img
                src="/images/responsive-device.png"
                alt="card-icon"
                className="card_icon_2"
              />
              <h5>Responsive layout</h5>
              <p>
                Momboo is a HTML5 template based on Sass and Bootstrap 4 with
                modern and creative multipurpose design.
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <About2 />
    </span>
  );
}

export default Services;
