import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseFilter = ({ categories, onFilterChange }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: calculateSlidesToShow(),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Adjust as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function calculateSlidesToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      return 3;
    } else if (screenWidth >= 480) {
      return 2;
    } else {
      return 1;
    }
  }

  return (
    <div className="portfolio-filter">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category}>
            <button
              data-filter={`.cat${category}`}
              className="mb-3 mb-sm-0 border-blue-600 button"
              onClick={() => onFilterChange([category])}
            >
              {category === "0" ? "Design" : " " + category}
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

CourseFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default CourseFilter;
