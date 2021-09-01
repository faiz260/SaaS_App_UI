import React from "react";
import "./planCard.css";

function PlanCard({ name, price, img, desc }) {
  return (
    <div className="plan_card">
      <h1 className="card_title">{name}</h1>
      <p className="card_tagline">Create Your first online plan</p>
      <img className="card_img" src={img} alt="card-img" />
      <h1 className="card_price">{price}</h1>
      <p className="card_desc">{desc}</p>
      <button className="card_button">Purchase</button>
    </div>
  );
}

export default PlanCard;
