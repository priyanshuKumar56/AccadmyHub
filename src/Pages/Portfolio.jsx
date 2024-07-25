// Portfolio.js
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CourseData from "../Data/course_data";
import CourseItem from "../components/CourseItem";
import CourseFilter from "../components/CourseFilter";
import CourseAnimation from "../components/Head_course_name";
import "../components/Course_card.css";

import AOS from "aos";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const filteredItems = CourseData.filter((item) =>
    selectedCategory.length
      ? item.category.some((cat) => selectedCategory.includes(cat))
      : true
  );

  return (
    <>
      <div className="container">
        <img
          data-aos="fade-left"
          style={{
            width: "400px",
            position: "absolute",
            left: "0px",
            marginTop: "10px",
          }}
          className="responsive-image"
          src="images/portfolio/pngwing_com.png"
          alt=""
        />
        <CourseAnimation />
        {/* / .row */}
        <div className="row">
          <div className="col text-center">
            <CourseFilter
              categories={[
                ...new Set(CourseData.flatMap((item) => item.category)),
              ]}
              onFilterChange={setSelectedCategory}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="grid columns-3 row popup-gallery">
              <div className="grid-sizer" />
              {filteredItems.map((item) => (
                <CourseItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
