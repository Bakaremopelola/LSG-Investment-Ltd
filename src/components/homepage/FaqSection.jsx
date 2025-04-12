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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/faq");
  };

  return (
    <section className="px-4 lg:px-20 py-12 bg-[#F8FAFC] text-center w-full">
      {/* Title */}
      <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 mb-6 text-base lg:text-2xl">
        Explore our FAQ to find the information you need about buying, selling,
        and investing in land with us.
      </p>

      {/* FAQ List */}
      <div className="space-y-4 w-full max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg bg-green-500 text-white shadow-md overflow-hidden"
            style={{ backgroundColor: "#10B981" }} /* Explicit background color backup */
          >
            {/* Question */}
            <button
              className="w-full flex justify-between items-center p-4 text-base lg:text-lg font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <span className="relative p-2 m-2 border-b-2 border-blue-950 text-left">
                {faq.question}
              </span>

              {openIndex === index ? (
                <div className="w-8 h-8 bg-[#1D2150] flex justify-center items-center rounded-full">
                  <ChevronUp className="w-5 h-5 text-white" />
                </div>
              ) : (
                <div className="w-8 h-8 bg-[#1D2150] flex justify-center items-center rounded-full">
                  <ChevronDown className="w-5 h-5 text-white" />
                </div>
              )}
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div 
                className="p-6 text-white text-left text-sm"
                style={{ backgroundColor: "#059669" }} /* Explicit background color backup */
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="mt-12 px-6 py-3 bg-[#1D2150] text-white rounded-lg cursor-pointer text-lg lg:text-2xl hover:bg-[#13163A] transition"
      >
        See more..
      </button>
    </section>
  );
};

export default FaqSection;