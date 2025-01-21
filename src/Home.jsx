import React from "react";
import Landing_p from "./Pages/Landing_p";
import About_sevices from "./Pages/About_sevices";
import Header from "./Pages/Header";
import Clients from "./Pages/Clients";
import Course from "./Pages/Course";
import About from "./Pages/About_Us_&_feature";
import CodeEdi from "./Pages/CodeEditor_page";
import BlogSection from "./Pages/Blog";

export default function Home() {
  return (
    <>
      <Header />
      <Landing_p />
      <Course />
      <About_sevices />
      <CodeEdi />
      <About />
      <Clients />
      <BlogSection />
    </>
  );
}
