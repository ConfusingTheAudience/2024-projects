import React from "react";
import "./contact.css";
import contactImg from "../../assets/contact.png";

const Contact = () => {
  function formSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="contact-container">
      <h1 className="section-heading">Contact</h1>
      <div className="contact-box">
        <div className="contact-text-box">
          <div className="form-box">
            <h2>Ask me anything</h2>
            <p>I will 100% answer you</p>
            <form noValidate>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <label htmlFor="name" className="input-label">
                  Name
                </label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <label htmlFor="email" className="input-label">
                  Email
                </label>
              </div>

              <div className="form-group from-group-last">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  maxLength="200"
                  required
                />
                <label htmlFor="message" className="textarea-label">
                  Message
                </label>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={(e) => formSubmit(e)}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="img-box">
          <img src={contactImg} alt="contact-img" className="contact-img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
