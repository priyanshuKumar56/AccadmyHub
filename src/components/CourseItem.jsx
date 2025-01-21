import React, { useState } from "react";
import { Search, Star, Clock, BookOpen, Users } from "lucide-react";
import "./card_cour.css";
const CourseListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Programming",
    "Marketing",
    "Data Science",
    "Design",
  ];

  const courses = [
    {
      id: 1,
      title: "Web Development Masterclass",
      category: "Programming",
      duration: "12 weeks",
      lectures: 148,
      students: 1234,
      image: "/api/placeholder/400/250",
      price: 99.99,
      rating: 4.8,
      instructor: "John Smith",
      level: "Intermediate",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Digital Marketing Fundamentals",
      category: "Marketing",
      duration: "8 weeks",
      lectures: 98,
      students: 856,
      image: "/api/placeholder/400/250",
      price: 79.99,
      rating: 4.6,
      instructor: "Sarah Johnson",
      level: "Beginner",
      tags: ["SEO", "Social Media", "Content"],
    },
  ];

  const StarRating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="star-icon filled" />);
      } else {
        stars.push(<Star key={i} className="star-icon" />);
      }
    }

    return <div className="star-rating">{stars}</div>;
  };

  return (
    <div className="course-listing">
      <div className="course-header">
        <h2>Featured Courses</h2>
        <p>Start your learning journey today</p>

        {/* Search Bar */}
        <div className="search-bar">
          <Search className="search-icon" />
          <input type="text" placeholder="Search courses..." />
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <span className="course-level">{course.level}</span>
            </div>

            <div className="course-content">
              <div className="course-category">{course.category}</div>
              <h3>{course.title}</h3>

              <div className="course-rating">
                <StarRating rating={course.rating} />
                <span>{course.rating}</span>
              </div>

              <div className="course-stats">
                <div>
                  <Clock className="stats-icon" />
                  <span>{course.duration}</span>
                </div>
                <div>
                  <BookOpen className="stats-icon" />
                  <span>{course.lectures} lectures</span>
                </div>
                <div>
                  <Users className="stats-icon" />
                  <span>{course.students} students</span>
                </div>
              </div>

              <div className="course-instructor">By {course.instructor}</div>

              <div className="course-tags">
                {course.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="course-footer">
                <div className="price">${course.price}</div>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
