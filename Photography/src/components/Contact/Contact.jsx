import React from "react";
import styles from "./contact.module.css";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.description}>
        To schedule a session and discuss the rate, please contact me by phone
        or visit the studio. Payment depends on various factors such as the
        conditions, the number of photos, and their type. I also offer outdoor
        photo sessions!
      </p>
      <div className={styles.contactBox}>
        <div className={styles.locationBox}>
          <CiLocationOn size="100px" className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <p>Largo da Ameias, 3000-024, Coimbra</p>
            <p>We are open 8-15 PM</p>
          </div>
        </div>
        <div className={styles.phoneBox}>
          <CiPhone size="100px" className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <p>+351 25291 5219</p>
            <p>+351 28921 5612</p>
          </div>
        </div>
      </div>
      <div className={styles.anotherContact}>
        or...
        <Link to="https:instagram.com">
          <FaInstagram size="20px" className={styles.anotherContactLink} />
        </Link>
        <Link to="https:x.com">
          <FaXTwitter size="20px" className={styles.anotherContactLink} />
        </Link>
        <Link to="https:gmail.com">
          <CiMail size="20px" className={styles.anotherContactLink} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
