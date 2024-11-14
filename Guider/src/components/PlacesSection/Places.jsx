import React from "react";
import "./places.css";
import madrid from "../../assets/madrid.jpg";
import venice from "../../assets/venice.jpg";
import vienna from "../../assets/vienna.jpg";
import { GiGlobe } from "react-icons/gi";

const locationInfo = [
  {
    country: "Spain",
    city: "Madrid",
    img: madrid,
  },
  {
    country: "Italy",
    city: "Venice",
    img: venice,
  },
  {
    country: "Austria",
    city: "Vienna",
    img: vienna,
  },
];

const Places = () => {
  return (
    <div className="places-container">
      <h1 className="section-heading places-heading">Popular places</h1>
      <div className="places-box">

        <div className="phone">
          <div className="smartphone">
            <span className="smartphone-text">BOOK TOUR</span>
            <span className="smartphone-message smartphone-message-1">
              I want to hire guide!
            </span>
            <span className="smartphone-message smartphone-message-2">
              Nothing easier...
            </span>
          </div>
        </div>

        <div className="places">
          {locationInfo.map((location, index) => (
            <div className="single-place" key={index}>
              <div className="overlay"></div>
              <img src={location.img} alt="madrid" className="place-block" />
              <div className="place-info">
                <h3>{location.country}</h3>
                <p>{location.city}</p>
              </div>
            </div>
          ))}

          <div className="single-place single-place-last">
            <GiGlobe className="icon-bg info-bg" />
            <p className="place-block place-block-4">
              I'm in love with Spain, Italy and Austria mostly but I can offer
              guide on almost every country from Europe. For more information
              contact me via email.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Places;
