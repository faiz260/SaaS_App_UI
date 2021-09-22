import React from "react";
import Fade from "react-reveal/Fade";
import "./home.css";

function Home() {
  return (
    <div className="home" id="home">
      <Fade>
        <div className="home_left">
          <h1 className="title">Our Analysis is your financial results</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <button className="btn_1">Start now</button>
            <button className="btn_2">Watch Video</button>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="home_right">
          <img
            src="/images/web-development-team-2602869-2194257.png"
            alt="people"
          />
        </div>
      </Fade>
    </div>
  );
}

export default Home;
