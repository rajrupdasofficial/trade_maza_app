import React from "react";
import Navbar from "../Navigation/Nav";
import "../../../public/assets/css/header.css";
import stockimage from "../../../public/assets/images/stock.webp";

const Header: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        <div className="headertext">
          <h1>TRADE MAZA</h1>
          <h2>Learn stock market for free.....</h2>
          <h4>---Learn to earn from stock market---</h4>
          <img src={stockimage} alt="Stockimage" className="centeredimage" />
          <h4>Stop gambling. Learn to start logical trading....</h4>
          <a href="#" className="download-link">
            <span className="buttonspa">Download The App</span>
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
