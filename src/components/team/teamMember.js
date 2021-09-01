import React from "react";
import "./teamMember.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";

function TeamMember({ name, src }) {
  return (
    <div className="card_div">
      <img src={src} alt="team_member_img" className="member_img" />
      <div className="team_card">
        <h3 className="team_title">{name}</h3>
        <p className="team_position">Co-Founder</p>
        <div className="btn_div">
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
    </div>
  );
}

export default TeamMember;
