import React from "react";
import "../assets/css/line-awesome.min.css";
import "../assets/css/theme-plugin.css";
import "../assets/css/theme_min.css";
import "../assets/css/themify-icons.css";
function About_sevices() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-6 mb-6 mb-lg-0">
              <img
                src="images/svg/marketing-roadmap.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
              <div>
                <h2 className="mt-3">
                  Land your first job with our Learning Paths!
                </h2>
                <p className="lead">
                  We use the latest technologies it voluptatem accusantium
                  doloremque laudantium, totam rem aperiam.
                </p>
              </div>
              <div className="d-flex flex-wrap justify-content-start">
                <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="mb-0 ml-3">
                      Interactive and Highly Intuitive Lessons
                    </p>
                  </div>
                </div>
                <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="mb-0 ml-3">Save Time, Save Money</p>
                  </div>
                </div>

                <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="mb-0 ml-3">Best Environment</p>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-outline-primary mt-5">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About_sevices;
