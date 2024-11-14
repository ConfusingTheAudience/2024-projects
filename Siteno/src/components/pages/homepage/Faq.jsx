import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long have you been in existence?",
      answer:
        "The website itself was launched two weeks ago, and we as a company have been operating for two years, at first with the help of an intermediary, and now we provide services directly to interestants",
    },
    {
      question: "Which plan to choose and how long to wait for the product?",
      answer:
        "In the pricing tab you can see the offers and the waiting time, we always make it in a certain scheduled time and we are able to come to an agreement for any corrections about it",
    },
    {
      question: "Do discounts apply and how to take advantage of them?",
      answer: "You can get discounts in two ways: with more frequent orders for regular customers or when you recommend the site to your friends using a special referral link. You can take advantage of them on purchases",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit cards, PayPal and bank transfers.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ (Frequently Asked Questions) </h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3 className="faq-questionname">{faq.question}</h3>
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
