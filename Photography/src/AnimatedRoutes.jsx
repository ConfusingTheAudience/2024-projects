// src/components/AnimatedRoutes.js
import React, { useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

const pageOrder = ["/", "/about", "/portfolio", "/testimonials", "/contact"];

function AnimatedRoutes({ setIsAnimating }) {
  const location = useLocation();
  const nodeRef = useRef(null);
  const [previousLocation, setPreviousLocation] = useState(location);
  const [direction, setDirection] = useState("down");

  if (location.pathname !== previousLocation.pathname) {
    const currentIndex = pageOrder.indexOf(location.pathname);
    const previousIndex = pageOrder.indexOf(previousLocation.pathname);

    if (currentIndex > previousIndex) {
      setDirection("down");
    } else {
      setDirection("up");
    }

    setPreviousLocation(location);
  }

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        classNames={`page-${direction}`}
        timeout={1000}
        nodeRef={nodeRef}
        onEnter={() => setIsAnimating(true)}
        onExited={() => setIsAnimating(false)}
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AnimatedRoutes;
