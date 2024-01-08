import React from "react";
import "../../../public/assets/css/card.css";
// import card1 from "../../public/assets/images/card1.webp";
import card1 from "../../../public/assets/images/card1.webp";
import card2 from "../../../public/assets/images/card2.webp";
import card3 from "../../../public/assets/images/card3.webp";
const Card: React.FC = () => {
  return (
    <>
      <div className="pinkdesign">
        <div className="headtext">
          <h1>Offer you Can't ignore</h1>
        </div>

        <div className="card-container">
          <div className="card">
            <h3>Free Option Trading Courses</h3>
            <img src={card1} alt="Option Trading Courses" />

            <p>All About Option Trading</p>
            <p>Basics of Option Trading</p>
            <p>Hedge-Based Option Trading</p>
            <p>Option Chain Analysis</p>
            <p>How to Build Strategies</p>
            <p>Recommended Courses</p>

            <button>Download the App</button>
          </div>

          <div className="card">
            <h3>Free Webinars</h3>
            <img src={card2} alt="Free Webinars" />

            <p>Access to All Webinars</p>
            <p>Free Technical Analysis Webinar</p>
            <p>Free Advanced Courses Webinar</p>
            <p>Free Price Action Trading Webinar</p>
            <p>Free Fundamental Analysis Webinar</p>
            <button>Download the App</button>
          </div>

          <div className="card">
            <h3>Free Recommendations</h3>
            <img src={card3} alt="Free Recommendations" />

            <p>From SEBI Registered Institutes</p>
            <p>Access to Pro Features</p>
            <p>One-on-One Coaching</p>
            <p>Bonus Care Package Included</p>

            <button>Download the App</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
