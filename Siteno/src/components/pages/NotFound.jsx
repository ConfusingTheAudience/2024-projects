import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h1 className="notfound-title">Sorry, this site doesn't exist</h1>
        <p className="notfound-description">get back to Home</p>
        <Link to={"/"} className="btn notfound-btn">
          Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
