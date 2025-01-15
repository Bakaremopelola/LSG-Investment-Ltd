import PropTypes from "prop-types";
import { useState } from "react";
import "./FAQ.css";

const FAQSection = ({ limit = null }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Where is MAITAMA GARDENS AGBOWA IKORODU located?",
      answer: "The MAITAMA GARDENS AGBOWA IKORODU is located at Agbowa, Ikorodu Lagos state.",
    },
    {
      question: "Who is the developer of MAITAMA GARDENS AGBOWA IKORODU?",
      answer: "LSG INVESTMENT LIMITED",
    },
    {
      question: "What title does MAITAMA GARDENS AGBOWA IKORODU have?",
      answer: "Freehold & Survey",
    },
    {
      question: "Is there any encumbrance on the land?",
      answer: "The land is free from every government known acquisition, interest, and claim.",
    },
    {
      question: "What documents do I get after making an initial deposit?",
      answer: "You get an offer letter, a receipt for the payment of the initial deposit, and the contract of sale agreement once payment has been confirmed.",
    },
    {
      question: "What documents do I get after full payment?",
      answer: "Receipt, Allocation Letter, Survey, and Deed of Assignment.",
    },
    {
      question: "Is there any other Statutory Fee?",
      answer: "No other fee is payable. The Survey plan & Deed of assignment is N250,000, and the developmental fee of N300,000 are all inclusive of the total amount.",
    },
    {
      question: "Will there be extra charges for commercial plots and corner piece plots?",
      answer: "YES, Corner piece plots attract an additional 15% charge on the land fee only.",
    },
    {
      question: "When will my plot(s) be allocated?",
      answer: "Allocation is done on either part or full payment for the Estate.",
    },
    {
      question: "What do I get after payment for the land?",
      answer: "Contract of Sales and Survey (N.B: The survey for the land allocation will be Ogun State).",
    },
  ];

  const displayedFaqs = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="faq-grid-container">
      <p className="faq-description">
        Here are some frequently asked questions (FAQs) about the MAITAMA GARDENS AGBOWA IKORODU estate. 
        Find answers to common inquiries about the location, developer, payment process, and more.
      </p>
      {displayedFaqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-card ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleToggle(index)}
        >
          <h3 className="faq-question">
            Q: {faq.question}
            <span className="faq-toggle-icon">
              {activeIndex === index ? "-" : "+"}
            </span>
          </h3>
          {activeIndex === index && <p className="faq-answer">A: {faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

// Add prop types validation
FAQSection.propTypes = {
  limit: PropTypes.number, // 'limit' should be a number or null
};



export default FAQSection;
