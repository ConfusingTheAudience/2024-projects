import React from "react";
import { useNavigate } from "react-router-dom";
import "./pricing.css";

const Pricing = () => {
  const navigate = useNavigate();

  const handlePickPlan = (plan) => {
    navigate("/summary", { state: { plan } });
  };

  return (
    <div className="pricing">
      <h1 className="pricing-maintitle">Pricing List</h1>
      <div className="pricing-container">
        <div className="pricing-option option-1">
          <button className="btn pricing-btn" onClick={() => handlePickPlan('basic')}>
            Pick
          </button>
          <ul className="pricing-list">
            <li className="pricing-description">One site</li>
            <li className="pricing-description">Hosting</li>
            <li className="pricing-description">Domain</li>
            <li className="pricing-description">One time payment</li>
            <li className="pricing-description">Waiting Time: min. 1 week</li>
          </ul>
          <h3 className="pricing-title">Basic Plan</h3>
        </div>
        <div className="pricing-option option-2">
          <button className="btn pricing-btn" onClick={() => handlePickPlan('standard')}>
            Pick
          </button>
          <ul className="pricing-list">
            <li className="pricing-description">Three sites</li>
            <li className="pricing-description">Standard help</li>
            <li className="pricing-description">Security check</li>
            <li className="pricing-description">Domain and hosting</li>
            <li className="pricing-description">One time payment or by month</li>
            <li className="pricing-description">Waiting Time: min. 2 month</li>
          </ul>
          <h3 className="pricing-title">Standard Plan</h3>
        </div>
        <div className="pricing-option option-3">
          <button className="btn pricing-btn" onClick={() => handlePickPlan('premium')}>
            Pick
          </button>
          <ul className="pricing-list">
            <li className="pricing-description">+5 sites</li>
            <li className="pricing-description">24/7 help</li>
            <li className="pricing-description">High risk security</li>
            <li className="pricing-description">High database</li>
            <li className="pricing-description">Admin panel</li>
            <li className="pricing-description">Our storage provided</li>
            <li className="pricing-description">Payment by year available</li>
            <li className="pricing-description">Waiting Time: min. 3 month (year help offer)</li>
          </ul>
          <h3 className="pricing-title">Premium Plan</h3>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
