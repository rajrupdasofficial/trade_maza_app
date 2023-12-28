import React from "react";
import "../assets/css/footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>Our Mission</p>
            <p>We're Hiring!</p>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <p>Tutorials</p>
            <p>Brand Assets</p>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>321-555-5555</p>
            <p>info@company.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
