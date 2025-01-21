// Documentation.js
import React, { useState } from "react";
import {
  Search,
  BookOpen,
  ChevronRight,
  Code,
  Database,
  BarChart2,
} from "lucide-react";
import "./doc.css";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState("programming");
  const [searchTerm, setSearchTerm] = useState("");

  const topics = {
    programming: {
      title: "Programming Languages",
      icon: <Code />,
      content: [
        {
          name: "Python",
          description:
            "The most versatile programming language for data science, machine learning, and general-purpose programming.",
          features: [
            "Dynamic typing and binding",
            "Built-in data structures",
            "Extensive standard library",
            "Rich ecosystem of third-party packages",
            "Support for multiple programming paradigms",
            "Excellent documentation and community",
          ],
          code: `# Python example code...`, // Your existing code examples here
          subsections: [
            {
              title: "Built-in Data Structures",
              content: "Lists, Tuples, Sets, Dictionaries",
            },
            {
              title: "Object-Oriented Programming",
              content: "Classes, Objects, Inheritance, Polymorphism",
            },
            {
              title: "Exception Handling",
              content: "Try-except blocks, Custom exceptions",
            },
          ],
        },
        // Add other programming languages here
      ],
    },
    // Other topics remain the same
  };

  return (
    <div className="documentation">
      <nav className="nav-header">
        <div className="nav-container">
          <div className="nav-title">
            <BookOpen />
            <h1>Tutorial Documentation</h1>
          </div>
          <div className="search-box">
            <Search />
            <input
              type="text"
              placeholder="Search documentation..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </nav>

      <div className="main-content">
        <div className="sidebar">
          <div className="sidebar-container">
            <h2>Topics</h2>
            <ul className="topic-list">
              {Object.entries(topics).map(([key, value]) => (
                <li
                  key={key}
                  className={`topic-item ${activeTab === key ? "active" : ""}`}
                  onClick={() => setActiveTab(key)}
                >
                  {value.icon}
                  <span>{value.title}</span>
                  <ChevronRight
                    className={activeTab === key ? "rotate-90" : ""}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="content-area">
          <h2>{topics[activeTab].title}</h2>

          {topics[activeTab].content.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <div className="features-section">
                <h4>Key Features</h4>
                <div className="features-grid">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-dot"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {item.subsections && (
                <div className="subsections">
                  <h4>Topics Covered</h4>
                  <div className="subsections-grid">
                    {item.subsections.map((subsection, idx) => (
                      <div key={idx} className="subsection-item">
                        <h5>{subsection.title}</h5>
                        <p>{subsection.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="code-block">
                <h4>Example Code:</h4>
                <pre>{item.code}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
