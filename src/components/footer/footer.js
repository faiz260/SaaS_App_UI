import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import LowerFooter from "./lowerFooter";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <div>
      <div className="footer">
        <Fade bottom>
          <div className="footer_section">
            <h1 className="footer_logo">Title</h1>
            <p className="logo_desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
          </div>
        </Fade>
        <span>
          <Fade bottom>
            <div className="footer_section">
              <h3>Useful</h3>
              <a href="/">Web Design</a>
              <a href="/">Development</a>
              <a href="/">Wordpress</a>
              <a href="/">Online Marketing</a>
              <a href="/">SEO Marketing</a>
            </div>
          </Fade>
          <Fade bottom>
            <div className="footer_section">
              <h3>About Us</h3>
              <a href="/">Support Center</a>
              <a href="/">Customer Support</a>
              <a href="/">About Us</a>
              <a href="/">Copyright</a>
              <a href="/">Popular Campaign</a>
            </div>
          </Fade>
          <Fade bottom>
            <div className="footer_section">
              <h3>Contact Us</h3>
              <p>301 The Greenhouse London, E2 8DY UK</p>
              <a href="/">support@gmail.com</a>
              <a href="/">123-456-897</a>
              <div>
                <button className="social_btn">
                  <FaFacebookF className="social_icon" />
                </button>
                <button className="social_btn">
                  <AiOutlineInstagram className="social_icon" />
                </button>
                <button className="social_btn">
                  <AiOutlineTwitter className="social_icon" />
                </button>
                <button className="social_btn">
                  <GrLinkedinOption className="social_icon" />
                </button>
              </div>
            </div>
          </Fade>
        </span>
      </div>
      <LowerFooter />
    </div>
  );
}

export default Footer;
