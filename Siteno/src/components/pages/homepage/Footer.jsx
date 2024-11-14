import React from "react";
import { IoLogoIonitron } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo">
          <IoLogoIonitron className="ft-logo" />
          <span>Siteno</span>
        </div>
        <div className="footer-more">
          <h4 className="footer-title">More</h4>
          <Link to={"/company"} className="link footer-link">Company</Link>
          <Link to={"/prod"} className="link footer-link">Production</Link>
          <Link to={"/shed"} className="link footer-link">Shedule</Link>
          <Link to={"/bonuses"} className="link footer-link">Bonus</Link>
          <Link to={"/discounts"} className="link footer-link">Discounts</Link>
          <Link to={"/contract"} className="link footer-link">Contract</Link>
        </div>
        <div className="footer-resources">
          <h4 className="footer-title">Resources</h4>
          <Link to={"https://icons8.com/illustrations/author/ARh4OKrFtdfC"} className="link footer-link" target="_blank">Picture#1</Link>
          <Link to={"https://icons8.com/illustrations/author/ARh4OKrFtdfC"} className="link footer-link" target="_blank">Picture#2</Link>
          <Link to={"https://icons8.com/illustrations/author/ARh4OKrFtdfC"} className="link footer-link" target="_blank">Picture#3</Link>
          <Link to={"https://icons8.com/illustrations/author/ARh4OKrFtdfC"} className="link footer-link" target="_blank">Picture#4</Link>
          <Link to={"https://www.freepik.com/free-psd/yoga-class-pack-template-concept_7084952.htm#fromView=search&page=1&position=52&uuid=ed07e636-bb75-4d2c-8c57-7d73ebf079c2"} className="link footer-link" target="_blank">Layout#1</Link>
          <Link to={"https://www.freepik.com/free-psd/rugby-game-web-design-template_18093928.htm#fromView=search&page=1&position=47&uuid=ed07e636-bb75-4d2c-8c57-7d73ebf079c2"} className="link footer-link" target="_blank">Layout#2</Link>
          <Link to={"https://www.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_12216601.htm#fromView=search&page=1&position=20&uuid=ed07e636-bb75-4d2c-8c57-7d73ebf079c2"} className="link footer-link" target="_blank">Layout#3</Link>
          <Link to={"https://www.freepik.com/free-psd/user-interface-design-website-template_20548064.htm#fromView=search&page=1&position=21&uuid=ed07e636-bb75-4d2c-8c57-7d73ebf079c2"} className="link footer-link" target="_blank">Layout#4</Link>
          <Link to={"https://www.freepik.com/free-psd/american-food-website-app-template_7335301.htm#fromView=search&page=1&position=18&uuid=ed07e636-bb75-4d2c-8c57-7d73ebf079c2"} className="link footer-link" target="_blank">Layout#5</Link>
          <Link to={"https://www.freepik.com/free-psd/brunch-concept-website-template_7088308.htm#fromView=search&page=1&position=29&uuid=ed07e636-bb75-4d2c-8c57-7d73ebf079c2"} className="link footer-link" target="_blank">Layout#6</Link>
        </div>
        <div className="footer-links">
          <h4 className="footer-title">Links</h4>
          <Link to={"/privacy-policy"} className="link footer-link">Privacy Policy</Link>
          <Link to={"/security"} className="link footer-link">Security</Link>
          <Link to={"/cookies"} className="link footer-link">Cookies</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
