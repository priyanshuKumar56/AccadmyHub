import React, { useState, useRef, useEffect } from "react";
import "../assets/css/theme-plugin.css";
import "../assets/css/theme_min.css";
import "../assets/css/themify-icons.css";
import Form from "../components/Sign_In";
function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownwin, setShowDropdownwin] = useState(false);

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);

  // Function to toggle the visibility of the dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleDropdownwin = () => {
    setShowDropdownwin(!showDropdownwin);
  };

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };
  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };
  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
    if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
      setShowDropdown1(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setShowDropdown2(false);
    }
    if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) {
      setShowDropdown3(false);
    }
  };
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  // Function to toggle the visibility

  useEffect(() => {
    // Attach event listener when component mounts
    window.addEventListener("click", handleClickOutside);
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      {/* preloader start */}

      {/* preloader end */}
      {/*header start*/}
      <header className="site-header">
        <div id="header-wrap">
          <div className="container">
            <div className="row">
              {/*menu start*/}
              <div className="col d-flex align-items-center justify-content-between">
                <a className="navbar-brand logo h2 mb-0" href="index.html">
                  Academy<span className="text-dark font-weight-bold">Hub</span>
                </a>
                <nav className="navbar navbar-expand-lg navbar-light ml-auto">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleDropdownwin}
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className={`collapse navbar-collapse ${
                      showDropdownwin ? "show" : ""
                    }`}
                    id="navbarNav"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item dropdown" ref={dropdownRef}>
                        <a
                          className="nav-link dropdown-toggle active"
                          href="#"
                          data-toggle="dropdown"
                          onClick={toggleDropdown}
                        >
                          Course
                        </a>
                        <ul
                          className={`dropdown-menu ${
                            showDropdown ? "show" : ""
                          }`}
                        >
                          <li>
                            <a className="dropdown-item" href="index.html">
                              Artificial Intelligence
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-2.html">
                              Machine Learning
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-3.html">
                              Deep Learning
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-4.html">
                              Natural Language Processing
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-5.html">
                              Computer Vision
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-6.html">
                              Generative AI
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-6.html">
                              Cloud Computing with AI
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-6.html">
                              Cyber Security with AI
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown" ref={dropdownRef1}>
                        <a
                          className="nav-link dropdown-toggle active"
                          href="#"
                          data-toggle="dropdown"
                          onClick={toggleDropdown1}
                        >
                          Tutorials
                        </a>
                        <ul
                          className={`dropdown-menu ${
                            showDropdown1 ? "show" : ""
                          }`}
                        >
                          <li>
                            <a className="dropdown-item" href="index.html">
                              Programming Language
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="about-us-1.html"
                                >
                                  Python
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="about-us-2.html"
                                >
                                  R
                                </a>
                              </li>

                              <li>
                                <a
                                  className="dropdown-item"
                                  href="career-single.html"
                                >
                                  Julia
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="career-single.html"
                                >
                                  Scala
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-2.html">
                              Data Manipulation Libraries
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-3.html">
                              Data Visualization Tools
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-4.html">
                              Machine Learning Libraries
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-5.html">
                              Statistical Analysis Tools
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-6.html">
                              Big Data Technologies
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-6.html">
                              Database Management Systems
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-6.html">
                              Cloud Computing Platforms
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-5.html">
                              Data Mining and Text Mining Tool
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-6.html">
                              Natural Language Processing Libraries
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-6.html">
                              Time Series Analysis Tools
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-6.html">
                              Data Engineering Tools
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-6.html">
                              Version Control Systems
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-5.html">
                              Data Warehousing Solutions
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index-6.html">
                              Geospatial Analysis Tools
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link" href="#" data-toggle="dropdown">
                          Future Ai
                        </a>
                      </li>
                      <li className="nav-item dropdown" ref={dropdownRef2}>
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                          onClick={toggleDropdown2}
                        >
                          Compiler
                        </a>
                        <ul
                          className={`dropdown-menu ${
                            showDropdown2 ? "show" : ""
                          }`}
                        >
                          <li></li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="product-list.html"
                            >
                              C++
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="product-single.html"
                            >
                              Python
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="product-cart.html"
                            >
                              Java
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="product-checkout.html"
                            >
                              SQL
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="btn btn-primary ml-4  d-lg-block"
                          onClick={toggleVisibility}
                        >
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/*menu end*/}
            </div>
          </div>
        </div>
      </header>
      {/* <Form isVisibleset={isVisible} togglecl={toggleVisibility} /> */}
    </>
  );
}

export default Header;
