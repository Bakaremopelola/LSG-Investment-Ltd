import  { useState } from 'react';
import './FAQ.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Where is MAITAMA GARDENS AGBOWA IKORODU located?',
      answer: 'The MAITAMA GARDENS AGBOWA IKORODU is located at Agbowa, Ikorodu Lagos state'
    },
    {
      question: 'Who is the developer of MAITAMA GARDENS AGBOWA IKORODU?',
      answer: 'LSG INVESTMENT LIMITED'
    },
    {
      question: 'What title does MAITAMA GARDENS AGBOWA IKORODU have?',
      answer: 'Freehold & Survey'
    },
    {
      question: 'Is there any encumbrance on the land?',
      answer: 'The land is free from every government known acquisition, interest and claim.'
    },
    {
      question: 'What documents do I get after making Initial deposit?',
      answer: 'You get an offer letter, a receipt for the payment of the initial deposit and the contract of sale agreement once payment has been confirmed.'
    },
    {
      question: 'What documents do I get after full payment?',
      answer: 'Receipt, Allocation Letter, Survey and Deed of Assignment.'
    },
    {
      question: 'Is there any other Statutory Fee?',
      answer: 'No other fee is payable. The Survey plan & Deed of assignment is N250,000 and the developmental fee of N300,000 are all inclusive of the total amount.'
    },
    {
      question: 'Will there be extra charges for commercial plots and corner pieces plots?',
      answer: 'YES, Corner pieces plots attract an additional 15% charges on the land fee only.'
    },
    {
      question: 'When will my plot(s) be allocated?',
      answer: 'Allocation is done on either part or Full payment for the Estate.'
    },
    {
      question: 'What do I get after payment for the land?',
      answer: 'Contract of Sales and Survey (N.B: The survey for the land allocation will be Ogun State).'
    },
    {
      question: 'How accessible is MAITAMA GARDENS AGBOWA IKORODU?',
      answer: 'The road leading to MAITAMA GARDENS AGBOWA IKORODU is an Expressway which makes it a prime Investment Opportunity with Proximity to major Landmarks like NYSC Lagos State Orientation Camp.'
    },
    {
      question: 'When can I commence construction on my property?',
      answer: 'After physical allocation of your plot and getting all necessary building plan approvals from Government agencies.'
    },
    {
      question: 'Can I resell my plots or property?',
      answer: 'YES, but the company has to be duly informed for documentation.'
    },
    {
      question: 'Can I pay cash to your consultant?',
      answer: 'NO, All payment should be made to LSG INVESTMENT LIMITED BANK ACCOUNT.'
    }
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleToggle(index)}
        >
          <h3 className="faq-question">
            Q: {faq.question}
            <span className="faq-toggle-icon">
              {activeIndex === index ? '-' : '+'}
            </span>
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
