import React from "react";
import pic2 from "../../../assets/pic2.png";
import pic3 from "../../../assets/pic3.png";
import pic4 from "../../../assets/pic4.png";
import { Link } from "react-router-dom";
import { BiCoinStack } from "react-icons/bi";

const Offer = () => {
  const offers = [
    {
      title: "Time",
      description:
        "Small projects take about a week, larger ones take longer while we always make it within the time limit",
    },
    {
      title: "Security",
      description:
        "We use the best possible solutions to protect data and users, we work with professionals in the field",
    },
    {
      title: "Contract",
      description:
        "Everything is carried out through an electronic contract, without unnecessary paperwork",
    },
  ];

  return (
    <div className="grid-wrapper">
      <div className="grid">
        {offers.map((offer, index) => (
          <div className={`griditem griditem-${index + 1}`} key={index}>
            <div className="overlay"></div>
            <h3 className="griditem-title">{offer?.title}</h3>
            <p className="griditem-description">{offer?.description}</p>
          </div>
        ))}
        <div className="griditem griditem-4">
          <Link to={"/pricing"} className="btn griditem-btn">
            Check out prices
            <BiCoinStack />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
