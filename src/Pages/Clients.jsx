import React from "react";
import "../assets/css/carousel_set.css"; // You can style the carousel in a separate CSS file

const companies = [
  { name: "Company A", logoUrl: "images/client/01.png" },
  { name: "Company B", logoUrl: "images/client/02.png" },
  { name: "Company C", logoUrl: "images/client/03.png" },
  { name: "Company D", logoUrl: "images/client/04.png" },
  { name: "Company E", logoUrl: "images/client/05.png" },
  { name: "Company F", logoUrl: "images/client/06.png" },
  // Add more companies as needed
];

class ClientCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % companies.length,
      }));
    }, 1000); // Change slide every 3 seconds (adjust as needed)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="client-carousel">
        {companies.map((company, index) => (
          <div
            key={index}
            className={
              index === currentIndex ? "slide active" : "slide active1"
            }
          >
            <img src={company.logoUrl} alt={company.name} />
          </div>
        ))}
      </div>
    );
  }
}

export default ClientCarousel;
