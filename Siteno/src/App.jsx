import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/homepage/Home";
import Pricing from "./components/pages/pricing/Pricing";
import Projects from "./components/pages/projectspage/Projects";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import NotFound from "./components/pages/NotFound";
import PricingSummary from "./components/pages/pricing/PricingSummary";
import Contact from "./components/pages/contact/Contact";
import "./components/pages/homepage/homepage.css" // import styles for all the components from homepage

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "summary",
    element: <PricingSummary />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      const loadData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setLoading(false);
        localStorage.setItem("hasVisited", "true");
      };

      loadData();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <span className="spinner"></span>
        </div>
      ) : (
        // just in case I want to "pack it" in div for larger screen sizes box
        <>
          <RouterProvider router={router} />
        </>
      )}
    </>
  );
}

export default App;
