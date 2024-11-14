import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const data = [
  {
    title: "Quick Start",
    text: "Immediately when we receive an order we start working",
  },
  {
    title: "Database",
    text: "Plug in and use the advanced database",
  },
  {
    title: "Storage",
    text: "We store information on the site up to a month back, so no fresh data will be lost in case of failure",
  },
  {
    title: "Helper",
    text: "We offer the tools necessary to investigate website problems, and we offer 24/7 support",
  },
  {
    title: "High Quality",
    text: "Everything is prepared with people in mind, so we use the best possible solutions in case of future improvements",
  },
];

const Workflow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntervalActive, setIsIntervalActive] = useState(true);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    let intervalId;

    if (isIntervalActive) {
      intervalId = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(intervalId);
  }, [isIntervalActive]);

  const nextSlide = () => {
    setFadeClass("fade-out");

    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < data.length - 1) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
      setFadeClass("fade-in");
    }, 500);
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(data.length - 1);
    }
  };

  const handleMouseEnter = () => {
    setIsIntervalActive(false);
  };

  const handleMouseLeave = () => {
    setIsIntervalActive(true);
  };

  return (
    <div className="workflow-grid">
      <div
        className={`workflowitem ${fadeClass}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="workflowitem-title">{data[currentIndex].title}</h2>
        <p className="workflowitem-text">{data[currentIndex].text}</p>
      </div>
      <div className="changer">
        <div className="left">
          <MdChevronLeft className="arrow" onClick={handlePrev} />
        </div>
        <div className="right">
          <MdChevronRight className="arrow" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
