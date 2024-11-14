// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Router>
      <Navbar isAnimating={isAnimating} />
      <AnimatedRoutes setIsAnimating={setIsAnimating} />
    </Router>
  );
}

export default App;
