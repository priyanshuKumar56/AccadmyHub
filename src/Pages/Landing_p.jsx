import React from "react";
import "../assets/css/theme-plugin.css";
import "../assets/css/theme_min.css";
import "../assets/css/themify-icons.css";
import { ReactTyped } from "react-typed";
function Landing_p() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row justify-content-center mb-8">
            <div className="col-12 col-lg-8 text-center">
              {/* Heading */}
              <h4>
                Created For
                <span
                  className="typer text-primary"
                  data-words="Future,Learn,Enhance Your Career"
                />
                <ReactTyped
                  style={{ color: "#1360ef" }}
                  strings={[
                    "Learn",
                    "Enhance your Career",
                    "Build Your Skills",
                    "Your Future",
                    "Get a Job",
                  ]}
                  typeSpeed={100}
                  loop
                />
                <span
                  style={{ fontSize: "1.2em", verticalAlign: "middle" }}
                  className="cursor"
                  data-cursordisplay="|"
                  data-owner="some-id"
                />
              </h4>
              <h2 className="display-5 mt-2 font-w-4">
                Start Learning AI Now!
                <br />
                With Zero Expense, Dive into AI Learning
              </h2>
              {/* Text */}
              <p className="lead text-muted">
                Join Our Network to Harness the Power of AI for Local and Global
                Progress.
              </p>
            </div>
          </div>
          {/* / .row */}
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div>
                {/* Image */}
                <img
                  src="images\about\07.png"
                  className="img-fluid"
                  alt="..."
                />
                <div className="video-btn video-btn-pos">
                  <a
                    className="play-btn popup-youtube"
                    href="https://biteable.com/watch/4147574/e6d5d6401f9bda6088d339f67c4984f5"
                  >
                    <i class="fa-solid fa-play"></i>
                  </a>
                  <div className="spinner-eff">
                    <div className="spinner-circle circle-1" />
                    <div className="spinner-circle circle-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / .container */}
      </section>
    </div>
  );
}

export default Landing_p;
