import React, { useState } from "react";
import { IoLogoIonitron } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [isMenuShowed, setIsMenuShowed] = useState(false);

  function closeMenu() {
    setIsMenuShowed(false);
  }

  return (
    <>
      {/* desktop navbar */}
      <nav className="navbar-container">
        <div className="navbar-box">
          <div className="logo-container">
            <IoLogoIonitron className="logo" />
          </div>
          <ul>
            <NavLink to={"/"} className={"navbar-list"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/pricing"} className={"navbar-list"}>
              <li>Pricing</li>
            </NavLink>
            <NavLink to={"/contact"} className={"navbar-list"}>
              <li>Contact</li>
            </NavLink>
            <NavLink to={"/projects"} className={"navbar-list"}>
              <li>Projects</li>
            </NavLink>
          </ul>
        </div>
        <NavLink to="/contact?name=Anonim&message=I%20need%20quick%20message%20back%20from%20you">
          <button className="btn navbar-btn">Quick contact</button>
        </NavLink>
      </nav>
      {/* mobile navbar */}
      <nav className="navbar-containermobile">
        <div className="navbar-boxmobile">
          <div className="logo-containermobile">
            <IoLogoIonitron className="logomobile" />
          </div>
          {isMenuShowed ? (
            <FaTimes
              className="togglermobile"
              onClick={() => setIsMenuShowed(!isMenuShowed)}
            />
          ) : (
            <FaBars
              className="togglermobile"
              onClick={() => setIsMenuShowed(!isMenuShowed)}
            />
          )}
          <ul className={`list-mobile ${isMenuShowed ? "open" : "close"}`}>
            <NavLink to={"/"} className={"navbar-list"} onClick={closeMenu}>
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/pricing"}
              className={"navbar-list"}
              onClick={closeMenu}
            >
              <li>Pricing</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={"navbar-list"}
              onClick={closeMenu}
            >
              <li>Contact</li>
            </NavLink>
            <NavLink
              to={"/projects"}
              className={"navbar-list"}
              onClick={closeMenu}
            >
              <li>Projects</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
