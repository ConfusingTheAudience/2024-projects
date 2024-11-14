import React from "react";
import "./pricing.css";
import { MdOutlineTour } from "react-icons/md";
import { VscScreenNormal } from "react-icons/vsc";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Pricing = () => {
  return (
    <div id="pricing" className="pricing-container">
      <h1 className="section-heading pricing-heading">Enroll Guides</h1>
      <div className="prices">
        <div className="price-option price-option1">
          <MdOutlineTour className="icon-bg price-icon-bg price-icon-bg-1" />
          <h2>1 day</h2>
          <p>One day tour of 5 hours</p>
          <ul>
            <li>Cultural storytelling</li>
            <li>Showing and tasting the most popular dishes</li>
          </ul>
          <button>20$</button>
        </div>
        <div className="price-option price-option-2">
          <VscScreenNormal className="icon-bg price-icon-bg price-icon-bg-2" />
          <h2>2 day tour</h2>
          <p>Divided by up to eight hours each day</p>
          <ul>
            <li>Sightseeing</li>
            <li>Special driver around the city</li>
            <li>Food and drink test</li>
            <li>Getting to know from the kitchen how food is prepared</li>
          </ul>
          <button>50$</button>
        </div>
        <div className="price-option price-option3">
          <MdOutlineWorkspacePremium className="icon-bg price-icon-bg price-icon-bg-3" />
          <h2>3 days</h2>
          <p>Unlimited time</p>
          <ul>
            <li>Cooking Traditional food byself</li>
            <li>Visiting local stores in search of ingredients</li>
            <li>Sightseeing</li>
            <li>Cultural cognition</li>
            <li>And everything from the previous plans</li>
            <li className="special">I can also organize group tour</li>
          </ul>
          <button>100$</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
