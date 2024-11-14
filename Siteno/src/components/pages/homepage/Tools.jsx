import React, { useEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import pic1 from "../../../assets/pic1.png";

const Tools = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className="tools">
        <h1 className="tool-title">We are using:</h1>
        <div className="tool-box">
          <div className="tool-technologies">

            <div ref={ref} className={`front ${isVisible ? "visible" : ""}`}>

              <div className="box-container">
                <div className="icon-box">
                  <span className="tooltip">HTML5</span>
                  <FaHtml5 color="orange" className="icon" />
                </div>
                <div className="icon-box">
                  <span className="tooltip">CSS3</span>
                  <FaCss3Alt color="blue" className="icon" />
                </div>
                <div className="icon-box">
                  <span className="tooltip">Javascript</span>
                  <IoLogoJavascript color="red" className="icon" />
                </div>
              </div>

              <div className="technologies-text">For Frontend</div>

            </div>

            <div ref={ref} className={`frontframeworks ${isVisible ? "visible" : ""}`}>

              <div className="box-container">
                <div className="icon-box">
                  <span className="tooltip">React</span>
                  <FaReact color="lightblue" className="icon" />
                </div>
                <div className="icon-box">
                  <span className="tooltip">NextJS</span>
                  <RiNextjsFill className="icon" />
                </div>
              </div>

              <div className="technologies-text">Frameworks</div>

            </div>

              <div ref={ref} className={`back ${isVisible ? "visible" : ""}`}>

                <div className="box-container">
                  <div className="icon-box">
                    <span className="tooltip">Python</span>
                    <FaPython className="icon" />
                  </div>
                  <div className="icon-box">
                    <span className="tooltip">MongoDB</span>
                    <DiMongodb color="green" className="icon" />
                  </div>
                </div>

                <div className="technologies-text">For Backend</div>

              </div>

            </div>
          <img src={pic1} alt="img" className="tool-img" />
          </div>

        </div>
    </>
  );
};

export default Tools;
