// PricingRadioButton.jsx
import React from "react";
import "./pricing.css";

const PricingRadioButton = ({ id, name, value, checked, onChange, disabled, label, }) => {
  return (
    <div className={`radio-option ${disabled ? "disabled" : ""}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id} className="radio-dot"></label>
      <span className={disabled ? "disabled" : ""}>{label}</span>
    </div>
  );
};

export default PricingRadioButton;
