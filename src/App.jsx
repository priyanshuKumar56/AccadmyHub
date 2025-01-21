import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Landing_p from "./Pages/Landing_p";
import About_sevices from "./Pages/About_sevices";
import Header from "./Pages/Header";
import Clients from "./Pages/Clients";
// import "./assets/css/theme_min.css";
import "@ionic/react/css/core.css";
import "./assets/css/line-awesome.min.css";
import { Routes, Route } from "react-router-dom";
import Course from "./Pages/Course";

import About from "./Pages/About_Us_&_feature";
import CodeEdi from "./Pages/CodeEditor_page";
import BlogSection from "./Pages/Blog";
import Footer from "./Pages/Footer";
import Documentation from "./Pages/Documentaion";
import Home from "./Home";

// import HorizontalAnimation from "./Pages/Horizontal_View";
// import React from 'react'

function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2000); // Change the delay time (in milliseconds) according to your requirement

    return () => clearTimeout(timeout);
  }, []); // useEffect will only run once when the component mounts

  return (
    <>
      {visible && (
        <div id="ht-preloader">
          <div className="loader clear-loader">
            <span></span>
            <p>GlocalAi</p>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doc" element={<Documentation />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
