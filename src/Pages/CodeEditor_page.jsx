import React, { useState, useEffect } from "react";
import "../components/coustom_code.css";
import AOS from "aos";
import "aos/dist/aos.css";
const CodeEdi = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [showanimation, setShowAni] = useState(false);
  const handlemove = () => {
    setShowAni(!showanimation);
  };
  return (
    <div className="set_zindex bg_color_in  position-relative">
      <div className="container_code ">
        <div className="row align-items-center">
          <div
            className={`col-12 col-lg-5 col-xl-8  order-lg-2 transform_img mb-8 mb-lg-0 ${
              showanimation ? "transform_img_remove" : ""
            }`}
            onMouseEnter={handlemove}
            onMouseLeave={handlemove}
          >
            {/* Image */}
            <img
              src="/images/destop_image/mockup-card2s.svg"
              className="img-fluid above_mok1"
              alt="..."
            />
            <img
              src="/images/destop_image/mockup-card2.svg"
              className="img-fluid above_mok2"
              alt="..."
            />
            <img
              src="/images/destop_image/mockup-content-first-screen.svg"
              className="img-fluid another_mok"
              alt="..."
            />
            <img
              src="/images/destop_image/mockup2-bg.svg"
              className="img-fluid another_mok cover_this "
              alt="..."
            />
            <img
              src="/images/destop_image/mockup3-bg.svg"
              className="img-fluid another_mok cover_this cover_thiss"
              alt="..."
            />

            <div></div>
            {/* <img src="/images/hero/02.png" className="img-fluid" alt="..." /> */}
          </div>
          <div className="col-12 col-lg-7 col-xl-4 order-lg-1">
            {/* Heading */}
            <h5 className="badge badge-light">
              Build anything you want using our Code editor
            </h5>
            <h1 className="display-4 text-white mt-3">
              Become part of the early adopter's programme.
            </h1>
            {/* Text */}
            <p className="lead text-light">
              Stay in the flow with instant dev experiences. No more hours
              stashing/pulling/installing locally — just click, and start
              coding.
            </p>
            <button className="move_editor_btn">
              Try Our Free Editor <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        {/* / .row */}
      </div>
      <div className="svg_set">
        <svg
          className="star_svg"
          width="100%"
          height="224"
          viewBox="0 0 1368 224"
          fill="#f9f9f9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="20.5" r="0.5" fill="#f9f9f9" fillOpacity="0.5" />
          <circle
            cx="32.5"
            cy="40.5"
            r="0.5"
            fill="#f9f9f9"
            fillOpacity="0.2"
          />
          <circle
            cx="72.5"
            cy="30.5"
            r="0.5"
            fill="#f9f9f9"
            fillOpacity="0.5"
          />
          <circle cx="92.5" cy="0.5" r="0.5" fill="#f9f9f9" fillOpacity="0.5" />
          <circle cx="142.5" cy="20.5" r="0.5" fill="white" fillOpacity="0.2" />
          <circle cx="201.5" cy="30.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="231.5" cy="50.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="271.5" cy="40.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="291.5" cy="10.5" r="0.5" fill="white" fillOpacity="0.1" />
          <circle cx="341.5" cy="30.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="0.5" cy="91.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="30.5" cy="111.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="70.5" cy="101.5" r="0.5" fill="white" fillOpacity="0.4" />
          <circle cx="90.5" cy="71.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="140.5" cy="91.5" r="0.5" fill="white" fillOpacity="0.3" />
          <circle cx="344.5" cy="20.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="374.5" cy="40.5" r="0.5" fill="white" fillOpacity="0.1" />
          <circle cx="414.5" cy="30.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="434.5" cy="0.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="484.5" cy="20.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="543.5" cy="30.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="573.5" cy="50.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="613.5" cy="40.5" r="0.5" fill="white" fillOpacity="0.2" />
          <circle cx="633.5" cy="10.5" r="0.5" fill="white" fillOpacity="0.3" />
          <circle cx="683.5" cy="30.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="342.5" cy="91.5" r="0.5" fill="white" fillOpacity="0.1" />
          <circle
            cx="372.5"
            cy="111.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="412.5"
            cy="101.5"
            r="0.5"
            fill="white"
            fillOpacity="0.1"
          />
          <circle cx="432.5" cy="71.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="482.5" cy="91.5" r="0.5" fill="white" fillOpacity="0.1" />
          <circle cx="686.5" cy="20.5" r="0.5" fill="white" fillOpacity="0.3" />
          <circle cx="716.5" cy="40.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="756.5" cy="30.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="776.5" cy="0.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="826.5" cy="20.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="885.5" cy="30.5" r="0.5" fill="white" fillOpacity="0.4" />
          <circle cx="915.5" cy="50.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="955.5" cy="40.5" r="0.5" fill="white" fillOpacity="0.3" />
          <circle cx="975.5" cy="10.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle
            cx="1025.5"
            cy="30.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle cx="684.5" cy="91.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle
            cx="714.5"
            cy="111.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="754.5"
            cy="101.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle cx="774.5" cy="71.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="824.5" cy="91.5" r="0.5" fill="white" fillOpacity="0.2" />
          <circle
            cx="1028.5"
            cy="20.5"
            r="0.5"
            fill="white"
            fillOpacity="0.1"
          />
          <circle
            cx="1058.5"
            cy="40.5"
            r="0.5"
            fill="white"
            fillOpacity="0.1"
          />
          <circle
            cx="1098.5"
            cy="30.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle cx="1118.5" cy="0.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle
            cx="1168.5"
            cy="20.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="1227.5"
            cy="30.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="1257.5"
            cy="50.5"
            r="0.5"
            fill="white"
            fillOpacity="0.3"
          />
          <circle
            cx="1297.5"
            cy="40.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="1317.5"
            cy="10.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1367.5"
            cy="30.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="1026.5"
            cy="91.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1056.5"
            cy="111.5"
            r="0.5"
            fill="white"
            fillOpacity="0.1"
          />
          <circle
            cx="1096.5"
            cy="101.5"
            r="0.5"
            fill="white"
            fillOpacity="0.1"
          />
          <circle
            cx="1116.5"
            cy="71.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1166.5"
            cy="91.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle cx="2.5" cy="132.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="32.5" cy="152.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="72.5" cy="142.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="92.5" cy="112.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle
            cx="142.5"
            cy="132.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="201.5"
            cy="142.5"
            r="0.5"
            fill="white"
            fillOpacity="0.1"
          />
          <circle
            cx="231.5"
            cy="162.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="271.5"
            cy="152.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="291.5"
            cy="122.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="341.5"
            cy="142.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle cx="0.5" cy="203.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="30.5" cy="223.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="70.5" cy="213.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle cx="90.5" cy="183.5" r="0.5" fill="white" fillOpacity="0.5" />
          <circle
            cx="140.5"
            cy="203.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="344.5"
            cy="132.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="374.5"
            cy="152.5"
            r="0.5"
            fill="white"
            fillOpacity="0.1"
          />
          <circle
            cx="414.5"
            cy="142.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="434.5"
            cy="112.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="484.5"
            cy="132.5"
            r="0.5"
            fill="white"
            fillOpacity="0.1"
          />
          <circle
            cx="543.5"
            cy="142.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="573.5"
            cy="162.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="613.5"
            cy="152.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="633.5"
            cy="122.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="683.5"
            cy="142.5"
            r="0.5"
            fill="white"
            fillOpacity="0.1"
          />
          <circle
            cx="342.5"
            cy="203.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="372.5"
            cy="223.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="412.5"
            cy="213.5"
            r="0.5"
            fill="white"
            fillOpacity="0.3"
          />
          <circle
            cx="432.5"
            cy="183.5"
            r="0.5"
            fill="white"
            fillOpacity="0.4"
          />
          <circle
            cx="482.5"
            cy="203.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="686.5"
            cy="132.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="716.5"
            cy="152.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="756.5"
            cy="142.5"
            r="0.5"
            fill="white"
            fillOpacity="0.4"
          />
          <circle
            cx="776.5"
            cy="112.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="826.5"
            cy="132.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="885.5"
            cy="142.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="915.5"
            cy="162.5"
            r="0.5"
            fill="white"
            fillOpacity="0.1"
          />
          <circle
            cx="955.5"
            cy="152.5"
            r="0.5"
            fill="white"
            fillOpacity="0.3"
          />
          <circle
            cx="975.5"
            cy="122.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1025.5"
            cy="142.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="684.5"
            cy="203.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="714.5"
            cy="223.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="754.5"
            cy="213.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="774.5"
            cy="183.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="824.5"
            cy="203.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1028.5"
            cy="132.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1058.5"
            cy="152.5"
            r="0.5"
            fill="white"
            fillOpacity="0.3"
          />
          <circle
            cx="1098.5"
            cy="142.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1118.5"
            cy="112.5"
            r="0.5"
            fill="white"
            fillOpacity="0.4"
          />
          <circle
            cx="1168.5"
            cy="132.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1227.5"
            cy="142.5"
            r="0.5"
            fill="white"
            fillOpacity="0.3"
          />
          <circle
            cx="1257.5"
            cy="162.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1297.5"
            cy="152.5"
            r="0.5"
            fill="white"
            fillOpacity="0.2"
          />
          <circle
            cx="1317.5"
            cy="122.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1367.5"
            cy="142.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1026.5"
            cy="203.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1056.5"
            cy="223.5"
            r="0.5"
            fill="white"
            fillOpacity="0.4"
          />
          <circle
            cx="1096.5"
            cy="213.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1116.5"
            cy="183.5"
            r="0.5"
            fill="white"
            fillOpacity="0.5"
          />
          <circle
            cx="1166.5"
            cy="203.5"
            r="0.5"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
        <div className="svg_first">
          <svg
            fill="none"
            height="488"
            viewBox="0 0 1440 488"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <linearGradient
              id="a"
              gradientUnits="userSpaceOnUse"
              x1="-4.11625"
              x2="-4.11621"
              y1="-92.7575"
              y2="433.759"
            >
              <stop offset="0" stopColor="#ff6869" />
              <stop offset=".484375" stopColor="#ff927a" />
              <stop offset="1" stopColor="#ff5f8f" stopOpacity="0" />
            </linearGradient>
            <path
              d="m-158 228.759c381.046-411 572.046-153.25 825.046-101s289 130 457.004 115c168-15 987 245 987 245h-2269.05z"
              fill="url(#a)"
            />
          </svg>
        </div>

        <div className="secont_svg">
          <svg
            fill="#8f64d7"
            height="349"
            viewBox="0 0 1440 349"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <linearGradient
              id="a"
              gradientUnits="userSpaceOnUse"
              x1="702.623"
              x2="663.222"
              y1="-88.0755"
              y2="221.307"
            >
              <stop offset="0" stopColor="#61d2cc" stopOpacity=".6" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <path
              d="m1228.49 36.985c-212.8-81.8929-387.893-4.9796-609.876 14-221.982 18.9796-208.612-4.9539-374-23.5-165.3878-18.54613-259.4914 79.548-338.614 99.329v221.982h1576.19l-18.53-234.886s-21.98 5.118-235.17-76.925z"
              fill="url(#a)"
            />
          </svg>
        </div>
      </div>

      {/* / .container */}
      <div className="shape-1 bottom" style={{ height: "100px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 100"
          preserveAspectRatio="none"
          className="w-100 h-100"
        >
          <circle fill="#f9f9f9" cx="0" cy="100" r="100" />
          <circle fill="#f9f9f9" cx="200" cy="100" r="100" />
        </svg>
      </div>
    </div>
  );
};

export default CodeEdi;
