import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const [openIndex, setOpenIndex] = useState(null); // Removed TypeScript type annotation

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const naviagte =useNavigate();

  const handleSubmit=()=>{
naviagte("/faq")
  }

  return (
    <section className="px-6 lg:px-20 py-16 bg-[#F8FAFC] text-center">
      {/* Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 mb-6">
        Explore our FAQ to find the information you need about buying, selling,
        and investing in land with us.
      </p>

      {/* FAQ List */}
      <div className="space-y-4 px-32 mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg bg-green-500 text-white shadow-md"
          >
            {/* Question */}
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="p-4 bg-green-600 text-white text-left text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <button onClick={handleSubmit} className="mt-6 px-6 py-2 bg-[#1D2150] text-white rounded-lg cursor-pointer hover:bg-[#13163A] transition">
        See more..
      </button>
    </section>
  );
};

export default FaqSection;
