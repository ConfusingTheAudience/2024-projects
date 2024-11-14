import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const location = useLocation();

  // with URLSearchParams we cannot see methods in normal console.log becuase it's not normal object in Javascript however it provides .get() method
  const getQueryParam = (param) => {
    const params = new URLSearchParams(location.search);
    return params.get(param);
  };

  useEffect(() => {
    const name = getQueryParam("name");
    const message = getQueryParam("message");

    if (name) setFormData((prevState) => ({ ...prevState, name }));
    if (message) setFormData((prevState) => ({ ...prevState, message }));
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "We need your name";
    if (!formData.email) newErrors.email = "We need your email";
    if (!formData.message || formData.message.length > 70) {
      newErrors.message = "Type your message";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted", formData);

      // .pushState(state, title, url)
      // no refreshing site with this
      window.history.pushState({}, '', '/contact');

      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact">
      <div className="contact-box">
        <h1 className="contact-title">Contact</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-box">
            {errors.name && (
              <span className="contact-error">{errors.name}</span>
            )}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-entry contact-input"
              placeholder="Enter your name"
            />
            <label className="contact-label" htmlFor="name">
              Name:
            </label>
          </div>

          <div className="form-box">
            {errors.email && (
              <span className="contact-error">{errors.email}</span>
            )}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-entry contact-input"
              placeholder="Enter your email"
            />
            <label className="contact-label" htmlFor="email">
              Email:
            </label>
          </div>

          <div className="form-box">
            {errors.message && (
              <span className="contact-error">{errors.message}</span>
            )}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              className="contact-entry contact-textarea"
              onChange={handleChange}
              placeholder="Enter your message (limited to 70)"
              maxLength="70"
            />
            <label className="contact-label" htmlFor="message">
              Message:
            </label>
          </div>

          <button className="contact-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
