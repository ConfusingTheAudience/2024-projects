import React, { useState } from "react";
import "./about.css";
import person from "../../assets/person.jpg";

const introduceText = (
  <>
    <h4>Hi!</h4>
    <p>
      Nice to meet you, my name is James Loue, I'm 28 years old and I'm from
      Norway
    </p>
    <h4>How it started?</h4>
    <p>
      As a child, I was always interested in travel, fascinated by different
      cultures and traditions. However, it wasn't until I was twenty, when I
      visited Spain for work, that I truly fell in love with the place. That
      experience gave me the motivation to continue traveling, and over the next
      five years, I visited more than 30 countries across Europe
    </p>
    <h4>For how long I guide?</h4>
    <p>
      I have been traveling the world for eight years, and I have been working
      as a professional guide for three years. I have guided hundreds of
      satisfied clients
    </p>
  </>
);

const countriesText = (
  <>
    <h4>My guide offer available at</h4>
    <ul>
      <li>Madrid, Spain</li>
      <li>Vienna, Austria</li>
      <li>Venice, Italy</li>
      <li>Rome, Italy</li>
      <li>Bern, Switzerland</li>
      <li>Paris, France</li>
      <li>Lisbon, Portugal</li>
      <li>Amsterdam, Netherlands</li>
      <li>Zagreb, Croatia</li>
    </ul>
  </>
);

const About = () => {
  const [activeButton, setActiveButton] = useState("introduce");
  const [showFirstText, setShowFirstText] = useState(true);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "introduce") {
      setShowFirstText(true);
    } else if (buttonName === "countries") {
      setShowFirstText(false);
    }
  };

  return (
    <div id="about" className="about-container">
      <h1 className="section-heading">About me</h1>
      <div className="about-box">
        <div className="panel">
          <div className="menu">
            <div className="menu-navigation">
              <button
                className={`menu-btn ${
                  activeButton === "introduce" && "active"
                }`}
                onClick={() => handleClick("introduce")}
              >
                Who am I?
              </button>
              <button
                className={`menu-btn ${
                  activeButton === "countries" && "active"
                }`}
                onClick={() => handleClick("countries")}
              >
                My countries list
              </button>
            </div>
            <div className="menu-displayer">
              {showFirstText === true ? introduceText : countriesText}
            </div>
          </div>
        </div>
        <div className="guide-img-box">
          <div className="guide-img">
            <img src={person} alt="guide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
