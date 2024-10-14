import { useState } from 'react';
import './FAQ.css';

const FAQSection = ({ limit = null }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Where is MAITAMA GARDENS AGBOWA IKORODU located?',
      answer: 'The MAITAMA GARDENS AGBOWA IKORODU is located at Agbowa, Ikorodu Lagos state',
    },
    {
      question: 'Who is the developer of MAITAMA GARDENS AGBOWA IKORODU?',
      answer: 'LSG INVESTMENT LIMITED',
    },
    {
      question: 'What title does MAITAMA GARDENS AGBOWA IKORODU have?',
      answer: 'Freehold & Survey',
    },
    {
      question: 'Is there any encumbrance on the land?',
      answer: 'The land is free from every government known acquisition, interest and claim.',
    },
    {
      question: 'What documents do I get after making Initial deposit?',
      answer: 'You get an offer letter, a receipt for the payment of the initial deposit and the contract of sale agreement once payment has been confirmed.',
    },
    {
      question: 'What documents do I get after full payment?',
      answer: 'Receipt, Allocation Letter, Survey and Deed of Assignment.',
    },
    {
      question: 'Is there any other Statutory Fee?',
      answer: 'No other fee is payable. The Survey plan & Deed of assignment is N250,000 and the developmental fee of N300,000 are all inclusive of the total amount.',
    },
    {
      question: 'Will there be extra charges for commercial plots and corner pieces plots?',
      answer: 'YES, Corner pieces plots attract an additional 15% charges on the land fee only.',
    },
    {
      question: 'When will my plot(s) be allocated?',
      answer: 'Allocation is done on either part or Full payment for the Estate.',
    },
    {
      question: 'What do I get after payment for the land?',
      answer: 'Contract of Sales and Survey (N.B: The survey for the land allocation will be Ogun State).',
    },
  ];

  const displayedFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="faq-grid-container">
      {displayedFaqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-card ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleToggle(index)}
        >
          <h3 className="faq-question">
            Q: {faq.question}
            <span className="faq-toggle-icon">{activeIndex === index ? '-' : '+'}</span>
          </h3>
          {activeIndex === index && (
            <p className="faq-answer">A: {faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
