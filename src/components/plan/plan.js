import React from "react";
import "./plan.css";
import PlanCard from "./planCard";

function Plan() {
  return (
    <div className="plan">
      <div className="feature_header">
        <h1 className="feature_title">How do we create amazing products</h1>
        <p className="feature_desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="plan_cards_div">
        <PlanCard
          name="Personal"
          price="$49.00"
          img="/images/personal.png"
          desc="Only 2 Operators Only Abandoned Cart Facebook & Instagram Ads Order Notifications Landing Pages"
        />
        <PlanCard
          name="Enterprise"
          price="$159.00"
          img="/images/commercial.png"
          desc="Only 2 Operators Only Abandoned Cart Facebook & Instagram Ads Order Notifications Landing Pages"
        />
        <PlanCard
          name="Commercial"
          price="$249.00"
          img="/images/enterprise.png"
          desc="Only 2 Operators Only Abandoned Cart Facebook & Instagram Ads Order Notifications Landing Pages"
        />
      </div>
    </div>
  );
}

export default Plan;
