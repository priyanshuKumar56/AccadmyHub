import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/theme-plugin.css";
import "../assets/css/theme_min.css";
import "../assets/css/themify-icons.css";

const Header = () => {
  const [dropdowns, setDropdowns] = useState({
    main: false,
    course: false,
    tutorials: false,
    compiler: false,
    mobileMenu: false,
  });

  const dropdownRefs = {
    course: useRef(null),
    tutorials: useRef(null),
    compiler: useRef(null),
  };

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleClickOutside = (event) => {
    Object.entries(dropdownRefs).forEach(([key, ref]) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdowns((prev) => ({
          ...prev,
          [key]: false,
        }));
      }
    });
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const courseItems = [
    { path: "/ai", text: "Artificial Intelligence" },
    { path: "/ml", text: "Machine Learning" },
    { path: "/dl", text: "Deep Learning" },
    { path: "/nlp", text: "Natural Language Processing" },
    { path: "/cv", text: "Computer Vision" },
    { path: "/gen-ai", text: "Generative AI" },
    { path: "/cloud-ai", text: "Cloud Computing with AI" },
    { path: "/cyber-ai", text: "Cyber Security with AI" },
  ];

  const compilerItems = [
    { path: "/compiler/cpp", text: "C++" },
    { path: "/compiler/python", text: "Python" },
    { path: "/compiler/java", text: "Java" },
    { path: "/compiler/sql", text: "SQL" },
  ];

  return (
    <header className="site-header">
      <div id="header-wrap">
        <div className="container">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-between">
              <Link to="/" className="navbar-brand logo h2 mb-0">
                Academy<span className="text-dark font-weight-bold">Hub</span>
              </Link>

              <nav className="navbar navbar-expand-lg navbar-light ml-auto">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => toggleDropdown("mobileMenu")}
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div
                  className={`collapse navbar-collapse ${
                    dropdowns.mobileMenu ? "show" : ""
                  }`}
                >
                  <ul className="navbar-nav ml-auto">
                    {/* Course Dropdown */}
                    <li className="nav-item dropdown" ref={dropdownRefs.course}>
                      <button
                        className="nav-link dropdown-toggle active"
                        onClick={() => toggleDropdown("course")}
                      >
                        Course
                      </button>
                      <ul
                        className={`dropdown-menu ${
                          dropdowns.course ? "show" : ""
                        }`}
                      >
                        {courseItems.map((item, index) => (
                          <li key={index}>
                            <Link className="dropdown-item" to={item.path}>
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>

                    {/* Tutorials Dropdown */}
                    <li
                      className="nav-item dropdown"
                      ref={dropdownRefs.tutorials}
                    >
                      <button
                        className="nav-link dropdown-toggle active"
                        onClick={() => toggleDropdown("tutorials")}
                      >
                        Tutorials
                      </button>
                      <ul
                        className={`dropdown-menu ${
                          dropdowns.tutorials ? "show" : ""
                        }`}
                      >
                        <li>
                          <Link className="dropdown-item" to="/doc">
                            Programming Language
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/doc">
                            Data Manipulation Libraries
                          </Link>
                        </li>
                        {/* Add other tutorial items similarly */}
                      </ul>
                    </li>

                    {/* Future AI Link */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/future-ai">
                        Future AI
                      </Link>
                    </li>

                    {/* Compiler Dropdown */}
                    <li
                      className="nav-item dropdown"
                      ref={dropdownRefs.compiler}
                    >
                      <button
                        className="nav-link dropdown-toggle"
                        onClick={() => toggleDropdown("compiler")}
                      >
                        Compiler
                      </button>
                      <ul
                        className={`dropdown-menu ${
                          dropdowns.compiler ? "show" : ""
                        }`}
                      >
                        {compilerItems.map((item, index) => (
                          <li key={index}>
                            <Link className="dropdown-item" to={item.path}>
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>

                    {/* Login Button */}
                    <li className="nav-item">
                      <Link
                        to="/login"
                        className="btn btn-primary ml-4 d-lg-block"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
