import React, { useEffect } from "react";
// import "./About.css";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-lg-5 col-xl-5 mb-8 mb-lg-0 order-lg-1">
            <img src="images/about/06.png" alt="Image" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="mb-8">
              <h2 className="font-w-6">
                One Platform, Deep Insight Why Choose GlocalAI
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="d-flex align-items-start">
                  <div className="mr-3 p-3 border rounded border-light shadow-primary">
                    <img
                      className="img-fluid"
                      src="images/icon/01.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="mb-3 text-primary">Content You Can Trust</h5>
                    <p className="mb-0">
                      A dedicated group of experts continually working to create
                      programming resources that is accurate and easier to
                      understand.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="d-flex align-items-start">
                  <div className="mr-3 p-3 border rounded border-light shadow-primary">
                    <img
                      className="img-fluid"
                      src="images/icon/03.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="mb-3 text-primary">Learn by Doing</h5>
                    <p className="mb-0">
                      The only way to learn to program is by writing code. We
                      provide a lot of complete examples so that run and edit
                      code on your own.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-6">
                <div className="d-flex align-items-start">
                  <div className="mr-3 p-3 border rounded border-light shadow-primary">
                    <img
                      className="img-fluid"
                      src="images/icon/04.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="mb-3 text-primary">Programming made easy</h5>
                    <p className="mb-0">
                      We focus on simplicity. Programming tutorials and examples
                      written in simple, understandable language for beginners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-6">
                <div className="d-flex align-items-start">
                  <div className="mr-3 p-3 border rounded border-light shadow-primary">
                    <img
                      className="img-fluid"
                      src="images/icon/02.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="mb-3 text-primary">
                      Open sourse Code Editor
                    </h5>
                    <p className="mb-0">
                      Serspiciatis unde omnis iste natus laudantium, totam rem
                      aperiam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
