import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { BsChatHeart, BsEnvelope } from "react-icons/bs";
import styles from "./navbar.module.css";

const Navbar = ({ isAnimating }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const blockMenu = (e) => {
    if (isAnimating) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarMenu}>
        <li
          className={`${styles.navbarList} ${
            activeIndex === 0 ? styles.active : ""
          }`}
        >
          <NavLink
            to="/"
            onClick={(e) => {
              blockMenu(e);
              setActiveIndex(0);
            }}
            className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
          >
            <ImHome />
          </NavLink>
        </li>
        <li
          className={`${styles.navbarList} ${
            activeIndex === 1 ? styles.active : ""
          }`}
        >
          <NavLink
            to="/about"
            onClick={(e) => {
              blockMenu(e);
              setActiveIndex(1);
            }}
            className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
          >
            <IoPersonCircleSharp />
          </NavLink>
        </li>
        <li
          className={`${styles.navbarList} ${
            activeIndex === 2 ? styles.active : ""
          }`}
        >
          <NavLink
            to="/portfolio"
            onClick={(e) => {
              blockMenu(e);
              setActiveIndex(2);
            }}
            className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
          >
            <FaBriefcase />
          </NavLink>
        </li>
        <li
          className={`${styles.navbarList} ${
            activeIndex === 3 ? styles.active : ""
          }`}
        >
          <NavLink
            to="/testimonials"
            onClick={(e) => {
              blockMenu(e);
              setActiveIndex(3);
            }}
            className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
          >
            <BsChatHeart />
          </NavLink>
        </li>
        <li
          className={`${styles.navbarList} ${
            activeIndex === 4 ? styles.active : ""
          }`}
        >
          <NavLink
            to="/contact"
            onClick={(e) => {
              blockMenu(e);
              setActiveIndex(4);
            }}
            className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
          >
            <BsEnvelope />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
