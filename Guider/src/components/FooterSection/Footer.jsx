import React from "react";
import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="footer-links">
          <h2>Links</h2>
          <a href="#privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="#cookies" className="footer-link">Cookies</a>
          <a href="#guide-book" className="footer-link">Guide Book</a>
          <a href="#my-trips" className="footer-link">My trips</a>
        </div>
        <div className="footer-socials">
          <h2>Socials</h2>
          <a href="#">
            <FaFacebookF size={"36px"} className="footer-social"/>
          </a>
          <a href="#">
           <FaXTwitter size={"36px"} className="footer-social"/>
          </a>
          <a href="#">
            <FaInstagram size={"36px"} className="footer-social"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
