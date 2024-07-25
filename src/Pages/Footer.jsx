import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-6 bg-primary position-relative"
      data-bg-img="assets/images/bg/03.png"
    >
      <div className="shape-1" style={{ height: "150px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#fff" }}
          />
        </svg>
      </div>
      <div className="container mt-11">
        <div className="row">
          <div className="col-12 col-lg-5 col-xl-4 mr-auto mb-6 mb-lg-0">
            <div className="subscribe-form bg-warning-soft p-5 rounded">
              <h5 className="mb-4 text-white">Newsletter</h5>
              <h6 className="text-light">Subscribe Our Newsletter</h6>
              <form id="mc-form" className="group">
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  className="email form-control"
                  id="mc-email"
                  placeholder="Email Address"
                  required=""
                  style={{ height: "60px" }}
                />
                <input
                  className="btn btn-outline-light btn-block mt-3 mb-2"
                  type="submit"
                  name="subscribe"
                  value="Subscribe"
                />
              </form>
              <small className="text-light">
                Get started for 1 Month free trial No Purchace required.
              </small>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row">
              {/* Pages */}
              <div className="col-12 col-sm-4 navbar-dark">
                <h5 className="mb-4 text-white">Pages</h5>
                <ul className="navbar-nav list-unstyled mb-0">
                  <li className="mb-3 nav-item">
                    <a className="nav-link" href="about-us-1.html">
                      About
                    </a>
                  </li>
                  <li className="mb-3 nav-item">
                    <a className="nav-link" href="product-grid.html">
                      Shop
                    </a>
                  </li>
                  <li className="mb-3 nav-item">
                    <a className="nav-link" href="faq.html">
                      Faq
                    </a>
                  </li>
                  <li className="mb-3 nav-item">
                    <a className="nav-link" href="blog-card.html">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact-us.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/* Service */}
              <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                <h5 className="mb-4 text-white">Service</h5>
                <ul className="navbar-nav list-unstyled mb-0">
                  <li className="mb-3 nav-item">
                    <a className="nav-link" href="#">
                      Content Writing
                    </a>
                  </li>
                  <li className="mb-3 nav-item">
                    <a className="nav-link" href="#">
                      Documentation
                    </a>
                  </li>
                  <li className="mb-3 nav-item">
                    <a className="nav-link" href="login.html">
                      Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="career.html">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              {/* Legal */}
              <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                <h5 className="mb-4 text-white">Legal</h5>
                <ul className="navbar-nav list-unstyled mb-0">
                  <li className="mb-3 nav-item">
                    <a className="nav-link" href="terms-and-conditions.html">
                      Term Of Service
                    </a>
                  </li>
                  <li className="mb-3 nav-item">
                    <a className="nav-link" href="privacy-policy.html">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-sm-6">
                <a className="footer-logo text-white h2 mb-0" href="index.html">
                  Glocal<span className="font-weight-bold">Ai.</span>
                </a>
              </div>
              <div className="col-12 col-sm-6 mt-6 mt-sm-0">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="text-light ic-2x" href="#">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a className="text-light ic-2x" href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-light ic-2x" href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-light ic-2x" href="#">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-white text-center mt-8">
          <div className="col">
            <hr className="mb-4" />
            Copyright 2019 GlocalAi Theme by{" "}
            <u>
              <a className="text-white" href="#">
                ThemeHt
              </a>
            </u>{" "}
            | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
