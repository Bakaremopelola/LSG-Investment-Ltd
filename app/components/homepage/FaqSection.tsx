"use client"

import { useState } from "react";
import { useRouter }  from  "next/navigation";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const faqs = [
  {
    question: "Is the land free from any government acquisition or claim?",
    answer:
      "Yes, all our lands are free from government acquisition or claim. Proper verification documents will be provided.",
  },
  {
    question: "What documents will I receive after full payment?",
    answer:
      "After full payment, you will receive a deed of assignment, a survey plan, and other necessary ownership documents.",
  },
  {
    question: "Are there additional fees I should be aware of?",
    answer:
      "Yes, additional fees may include survey fees, documentation, and development levy depending on the location.",
  },
  {
    question: "Do commercial and corner piece plots cost extra?",
    answer:
      "Yes, commercial and corner piece plots usually cost extra due to their strategic location and potential higher value.",
  },
  {
    question: "When will my plot be allocated?",
    answer:
      "Plot allocation is done within 2 to 4 weeks after full payment and completion of necessary documentation.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
//@ts-ignore
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useRouter();

  const handleSubmit = () => {
    navigate.push("/faq");
  };

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 bg-[#F8FAFC] text-center min-h-[50vh] w-full">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D2150] mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 mb-6 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
        Explore our FAQ to find the information you need about buying, selling,
        and investing in land with us.
      </p>

      {/* FAQ List */}
      <div className="space-y-4 w-full max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md"
          >
            {/* Question */}
            <button
              className={`w-full flex justify-between items-center p-4 text-base sm:text-lg font-semibold text-white ${
                openIndex === index ? "bg-[#1D2150]" : "bg-[#1D2150]"
              } transition-colors duration-200`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-left flex-1 pr-4">{faq.question}</span>
              <div className="w-8 h-8 flex justify-center items-center rounded-full flex-shrink-0">
                {openIndex === index ? (
                  <BsChevronUp className="w-5 h-5 text-white" />
                ) : (
                  <BsChevronDown className="w-5 h-5 text-white" />
                )}
              </div>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="p-4 sm:p-6 bg-white text-[#1D2150] text-left text-sm sm:text-base border border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="mt-12 px-6 py-3 bg-[#1D2150] text-white rounded-lg cursor-pointer text-base sm:text-lg hover:bg-[#13163A] transition-colors duration-300"
      >
        See more..
      </button>
    </section>
  );
};

export default FaqSection;