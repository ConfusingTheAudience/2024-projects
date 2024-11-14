import React, { useState } from "react";
import "./projects.css";
import layout1 from "../../../assets/layout1.jpg";
import layout2 from "../../../assets/layout2.jpg";
import layout3 from "../../../assets/layout3.jpg";
import layout4 from "../../../assets/layout4.jpg";
import layout5 from "../../../assets/layout5.jpg";
import layout6 from "../../../assets/layout6.jpg";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const data = [
  {
    id: 0,
    websiteName: "Yoga Site",
    url: "https://yogaforhealthyy.com/",
    name: "yogaforhealthyy.com",
    layout: layout1,
    destiny: "website",
  },
  {
    id: 1,
    websiteName: "Get Music Make Music LP",
    url: "https://musicalafindera.com/",
    name: "musicalafindera.com",
    layout: layout2,
    destiny: "website",
  },
  {
    id: 2,
    websiteName: "(ROLT) Rugby Online Leagues Transmitter",
    url: "https://rugbylistaonline.com/",
    name: "rugbylistaonline.com",
    layout: layout3,
    destiny: "website",
  },
  {
    id: 3,
    websiteName: "YourResta",
    url: "https://yrestafood.com/",
    name: "yrestafood.com",
    layout: layout4,
    destiny: "store",
  },
  {
    id: 4,
    websiteName: "Burger Eat House",
    url: "https://eatburgerfrfr.com/",
    name: "eatburgerfrfr.com",
    layout: layout5,
    destiny: "store",
  },
  {
    id: 5,
    websiteName: "Meet Celebrity Event",
    url: "https://celebmeeterevent.com/",
    name: "celebmeeterevent.com",
    layout: layout6,
    destiny: "website",
  },
];

const Projects = () => {
  const [certainPages, showCertainPages] = useState(data);
  const [activeButton, setActiveButton] = useState("all");

  function showAll() {
    showCertainPages(data);
    setActiveButton("all");
  }
  function showOnlyWebsites() {
    const filter = data.filter((layoutToShow) => layoutToShow.destiny === "website");
    showCertainPages(filter);
    setActiveButton("websites");
  }
  function showOnlyStores() {
    const filter = data.filter((layoutToShow) => layoutToShow.destiny === "store");
    showCertainPages(filter);
    setActiveButton("stores");
  }

  return (
    <div className="projects">
      <h1 className="projects-title">Projects done</h1>
      <div className="projects-chooser">
        <span
          className={`projects-pick ${activeButton === "all" ? "active" : ""}`}
          onClick={() => showAll()}
        >
          All
        </span>
        <span>/</span>
        <span
          className={`projects-pick ${
            activeButton === "websites" ? "active" : ""
          }`}
          onClick={() => showOnlyWebsites()}
        >
          Websites
        </span>
        <span>/</span>
        <span
          className={`projects-pick ${
            activeButton === "stores" ? "active" : ""
          }`}
          onClick={() => showOnlyStores()}
        >
          Online Stores
        </span>
      </div>
      {/* dynamic key to force rerender animation all time if I filter */}
      <div className="projects-layouts" key={certainPages.length}>
        {certainPages.map((page) => (
          <div className="layout-box" key={page.id}>
            <h3 className="layout-name">
              {page.websiteName}
              <TiArrowRightThick className="layout-arrow" />
              <Link
                to={page.url}
                className="link layout-website"
                target="_blank"
              >
                {page.name}
              </Link>
            </h3>
            <img
              src={page.layout}
              alt={`layout${page.id + 1}`}
              className="layout-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
