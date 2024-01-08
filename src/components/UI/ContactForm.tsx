import React from "react";
// import "../assets/css/contactform.css";
import "../../../public/assets/css/contactform.css";

const ContactForm: React.FC = () => {
  return (
    <div className="containers">
      <div className="cards">
        <h2>Contact Us</h2>
        <form className="form">
          <div className="formGroup">
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="formGroup">
            <input type="email" id="email" name="email" placeholder="email" />
          </div>
          <div className="formGroup">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="message"></textarea>
          </div>
          <button className="submitButton" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
