import React from "react";
import "../assets/css/middle.css";
import stock2 from "../assets/images/stock2.webp";
import stock3 from "../assets/images/stock3.webp";
import stock4 from "../assets/images/stock4.webp";
const Middle: React.FC = () => {
  return (
    <>
      <div className="middle-section">
        <div className="content-block">
          <div className="text-center-block">
            <div className="text-block">
              <h2>Why Trade Maza App...</h2>
              <p>Your profitable trading journey starts here.</p>
            </div>
          </div>
        </div>
        <div className="content-block reverse">
          <img src={stock2} alt="Broken Image" />
          <div className="text-block">
            <h2>Free courses...</h2>
            <p>
              Technical Analysis, Fundamental Analysis, and option trading.
              Learn basic to advance of all trading strategy for free. Read
              daily free updates. All in one App. Start your profitable trading
              journey with trade maza.
            </p>
          </div>
        </div>
        <div className="content-block">
          <div className="text-block">
            <h2>Quick News</h2>
            <p>
              Get all stock market news in one place. No need to read long news.
              Get all news in short form. It's quick and easy. Explore it on
              Trade Maza App.
            </p>
          </div>
          <img src={stock3} alt="Broken Image" />
        </div>
        <div className="content-block reverse">
          <img src={stock4} alt="Broken Image" />
          <div className="text-block">
            <h2>Trader's forum</h2>
            <p>
              Read, Learn and write all your trading ideas. Get daily free
              updates from the trading community. Learn daily new trading ideas
              from pro. traders for free...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
