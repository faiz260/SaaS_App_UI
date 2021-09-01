import React from "react";
import "./team.css";
import TeamMember from "./teamMember";

function Team() {
  return (
    <div className="team">
      <div className="feature_header">
        <h1 className="feature_title">Our amazing team</h1>
        <p className="feature_desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="cards_div">
        <TeamMember name="Nancy Bayers" src="/images/2.png" />
        <TeamMember name="Alex Johnson" src="/images/3.png" />
        <TeamMember name="Nancy Bayers" src="/images/1.png" />
        <TeamMember name="Alex Johnson" src="/images/4.png" />
      </div>
    </div>
  );
}

export default Team;
