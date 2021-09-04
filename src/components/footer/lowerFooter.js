import React from "react";
import "./lowerFooter.css";
import Fade from "react-reveal/Fade";

function LowerFooter() {
  return (
    <div className="lower_footer">
      <Fade bottom>
        <div className="lfooter_section">
          <a href="/">Privacy & Policy</a>
          <a href="/">FAQ's</a>
          <a href="/">Get a Quote</a>
        </div>
      </Fade>
      <Fade bottom>
        <div className="lfooter_section">
          <p> © 2021 copyright all right reserved by xyz </p>
        </div>
      </Fade>
    </div>
  );
}

export default LowerFooter;
