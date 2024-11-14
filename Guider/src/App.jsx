import MainPage from "./components/MainPageSection/MainPage";
import About from "./components/AboutSection/About";
import Pricing from "./components/PricingSection/Pricing";
import Places from "./components/PlacesSection/Places";
import Footer from "./components/FooterSection/Footer";
import Contact from "./components/ContactSection/Contact";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="container-spinner">
          <span className="spinner"></span>
        </div>
      ) : (
        // just in case I want to "pack it" in div for larger screen sizes box
        <>
          <MainPage />
          <About />
          <Pricing />
          <Places />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
