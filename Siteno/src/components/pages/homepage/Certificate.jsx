import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Certificate = () => {
  return (
    <div className="certificate-container">
      <h3 className="cert-title">We are certified!</h3>
      <div className="cert-box">
        <div className="cert-items">
          <FaCheckCircle />
          <span className="cert-name">Certificate of Authenticity by</span>
          <h4>HPSSA</h4>
        </div>
        <div className="cert-items">
          <FaCheckCircle />
          <span className="cert-name">Safety Certificate by</span>
          <h4>YEON</h4>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
