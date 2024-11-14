import React, { useEffect, useState } from "react";
import photo from "../../assets/home-photo.jpg";
import styles from "./mainpage.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.leftSide}>
        <span className={styles.welcome}>Welcome, my name is</span>
        <h1 className={styles.title}>Emmanuel Davies</h1>
        <span className={styles.profession}>Professional Photographer</span>
        <p className={styles.description}>
          I'm originally from Portugal and I do photography there. It is my
          passion, which I share with others by creating photography workshops,
          I have my own photography studio{" "}
          <span className={styles.studioName}>"Compro"</span> where I offer the
          whole process from the creation of photos to its processing
        </p>
        <div className={styles.socials}>
          <Link
            className={styles.link}
            to="https:instagram.com"
            target="_blank"
          >
            <FaInstagram size="50px" className={styles.icons} />
          </Link>
          <Link className={styles.link} to="https:x.com" target="_blank">
            <FaXTwitter size="50px" className={styles.icons} />
          </Link>
          <Link className={styles.link} to="https:youtube.com" target="_blank">
            <FaYoutube size="50px" className={styles.icons} />
          </Link>
          <Link className={styles.link} to="https:gmail.com" target="_blank">
            <CiMail size="50px" className={styles.icons} />
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={photo} alt="photo" className={styles.img} />
      </div>
    </div>
  );
};

export default MainPage;
