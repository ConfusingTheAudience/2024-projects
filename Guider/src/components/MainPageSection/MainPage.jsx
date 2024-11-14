import React from "react";
import person from "../../assets/person.jpg";
import { MdArrowDropDownCircle } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import "./mainpage.css";

const MainPage = () => {

  const handleScrollToPricing = () => {
    document.getElementById("pricing").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleScrollToAbout = () => {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="mainpage-container">
      <div className="bridge-bg"></div>
      <div className="text-box">
        <h1>Hello!</h1>
        <div className="guide-info">
          <img src={person} alt="guide" />
          <p>
            Your local guide{" "}
            <span onClick={handleScrollToAbout}>James Loue</span> here
          </p>
        </div>
      </div>
      <div className="side-box">
        <MdOutlineTravelExplore className="icon-bg side-box-bg" />
        <p>Travel</p>
        <p>Explore</p>
        <p>Enroll</p>
        <MdArrowDropDownCircle
          className="arrow-icon"
          onClick={handleScrollToPricing}
        />
      </div>
    </div>
  );
};

export default MainPage;
