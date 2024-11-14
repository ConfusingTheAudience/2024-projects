import React from "react";
import photo from "../../assets/about-photo.jpg";
import video from "../../assets/about-video.mp4";
import styles from "./about.module.css";
import { Link } from "react-router-dom";
import { TbBrandMcdonalds } from "react-icons/tb";
import { TbBrandToyota } from "react-icons/tb";
import { TbBrandVinted } from "react-icons/tb";
import { TbBrandQq } from "react-icons/tb";
import { TbBrandLoom } from "react-icons/tb";
import { GrStatusPlaceholder } from "react-icons/gr";


const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.leftSide}>
        <div className={styles.overlay}></div>
        <video
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.textBox}>
          <h1 className={styles.title}>About me</h1>
          <div className={styles.descriptionBox}>
            <span className={styles.descriptionMainTitle}>
              Emmanuel Davies, 35 years old from Coibra, Portugal
            </span>
            <p>
              I have been photographing for 20 years. I have hundreds of
              projects behind me from people photography to landscapes and
              objects.
            </p>
            <p>
              After 10 years of operating by myself, I set up a photography
              company named <span className={styles.important}>Compro</span> and
              hire <span className={styles.important}>professionals</span> for
              the studio from photographers to lighting technicians giving the{" "}
              <span className={styles.important}>highest quality</span> photos
              and a nice <span className={styles.important}>atmosphere</span>{" "}
              while taking them.
            </p>
            <p>
              I also run a{" "}
              <Link
                to="https:youtube.com"
                target="_blank"
                className={styles.youtubeChannel}
              >
                youtube channel
              </Link>{" "}
              where I insert parts of my training courses and some of my
              sessions.
            </p>
          </div>
          <div className={styles.cooperationBox}>
            <h2 className={styles.brandText}>Brands I work with</h2>
            <div className={styles.brandBox}>
              <span className={styles.brand}>
                <TbBrandLoom size="50px" />
              </span>
              <span className={styles.brand}>
                <TbBrandMcdonalds size="50px" />
              </span>
              <span className={styles.brand}>
                <TbBrandToyota size="50px" />
              </span>
              <span className={styles.brand}>
                <TbBrandVinted size="50px" />
              </span>
              <span className={styles.brand}>
                <TbBrandQq size="50px" />
              </span>
              <span className={styles.brand}>
                <TbBrandLoom size="50px" />
              </span>
              <span className={styles.brand}>
                <TbBrandMcdonalds size="50px" />
              </span>
              <span className={styles.brand}>
                <TbBrandToyota size="50px" />
              </span>
              <span className={styles.brand}>
                <GrStatusPlaceholder size="50px" />
              </span>
              <span className={styles.brand}>
                <GrStatusPlaceholder size="50px" />
              </span>
              <span className={styles.brand}>
                <GrStatusPlaceholder size="50px" />
              </span>
              <span className={styles.brand}>
                <GrStatusPlaceholder size="50px" />
              </span>
              <span className={styles.brand}>
                <GrStatusPlaceholder size="50px" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={photo} alt="photo" className={styles.img} />
      </div>
    </div>
  );
};

export default About;
