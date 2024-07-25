import React from "react";
// import "./BlogSection.css"; // Make sure to create a CSS file named BlogSection.css and include the necessary styles

const BlogCard = ({
  link,
  date,
  category,
  title,
  description,
  comments,
  views,
  likes,
}) => (
  <div className="card border-0 bg-transparent">
    <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">
      {date}
      <br />
      July
    </div>
    <img
      className="card-img-top shadow rounded"
      src="images/blog/01.png"
      alt="Image"
    />
    <div className="card-body pt-5">
      <a className="d-inline-block text-muted mb-2" href="#">
        {category}
      </a>
      <h2 className="h5 font-weight-medium">
        <a className="link-title" href="blog-single.html">
          {title}
        </a>
      </h2>
      <p>{description}</p>
    </div>
    <div className="card-footer bg-transparent border-0 pt-0">
      <ul className="list-inline mb-0">
        <li className="list-inline-item pr-4">
          <a href="#" className="text-muted">
            <i class="fa-regular fa-comment text-primary"></i> {comments}
          </a>
        </li>
        <li className="list-inline-item pr-4">
          <a href="#" className="text-muted">
            <i class="fa-regular fa-eye text-primary"></i> {views}
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const BlogSection = () => {
  const blogCardsData = [
    {
      link: "images/blog/01.png",
      date: "15",
      category: "Sass",
      title: "Bootsland Perfect Performance landing Page",
      description:
        "Businesses need access to development resources serspiciatis unde omnis iste natus error.",
      comments: 131,
      views: 255,
      likes: 14,
    },
    {
      date: "15",
      category: "Marketing",
      title: "The most powerfull template that make you.",
      description:
        "Businesses need access to development resources serspiciatis unde omnis iste natus error.",
      comments: 131,
      views: 255,
      likes: 14,
    },
    {
      date: "15",
      category: "Landing",
      title: "A brand for a company is like a reputation person.",
      description:
        "Businesses need access to development resources serspiciatis unde omnis iste natus error.",
      comments: 131,
      views: 255,
      likes: 14,
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="row align-items-end mb-5">
          <div className="col-12 col-md-12 col-lg-4">
            <div>
              <span className="badge badge-primary-soft p-2">
                <i class="fa-solid fa-b rotation"></i>
              </span>
              <h2 className="mt-4 mb-0">From Our Blog List Latest Feed</h2>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 ml-auto">
            <div>
              <p className="lead mb-0">
                All types of businesses need access to development resources, so
                we give you the option to decide how much you need to use.
              </p>
            </div>
          </div>
        </div>
        {/* / .row */}
        <div className="row">
          {blogCardsData.map((cardData, index) => (
            <div key={index} className="col-12 col-lg-4 mb-6 mb-lg-0">
              <BlogCard
                date={cardData.date}
                category={cardData.category}
                title={cardData.title}
                description={cardData.description}
                comments={cardData.comments}
                views={cardData.views}
                likes={cardData.likes}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
