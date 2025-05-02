// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const faqs = [
//   {
//     question: "Is the land free from any government acquisition or claim?",
//     answer:
//       "Yes, all our lands are free from government acquisition or claim. Proper verification documents will be provided.",
//   },
//   {
//     question: "What documents will I receive after full payment?",
//     answer:
//       "After full payment, you will receive a deed of assignment, a survey plan, and other necessary ownership documents.",
//   },
//   {
//     question: "Are there additional fees I should be aware of?",
//     answer:
//       "Yes, additional fees may include survey fees, documentation, and development levy depending on the location.",
//   },
//   {
//     question: "Do commercial and corner piece plots cost extra?",
//     answer:
//       "Yes, commercial and corner piece plots usually cost extra due to their strategic location and potential higher value.",
//   },
//   {
//     question: "When will my plot be allocated?",
//     answer:
//       "Plot allocation is done within 2 to 4 weeks after full payment and completion of necessary documentation.",
//   },
// ];

// const FaqSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     navigate("/faq");
//   };

//   return (
//     <section className="px-4 lg:px-20 py-12 bg-gray-50 text-center w-full">
//       {/* Title */}
//       <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3">
//         Frequently Asked Questions
//       </h2>
//       <p className="text-gray-600 mb-6 text-base lg:text-xl">
//         Explore our FAQ to find the information you need about buying, selling,
//         and investing in land with us.
//       </p>

//       {/* FAQ List */}
//       <div className="space-y-4 w-full max-w-4xl mx-auto">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="rounded-lg overflow-hidden shadow-md"
//           >
//             {/* Question */}
//             <button
//               className={`w-full flex justify-between items-center p-4 text-base lg:text-lg font-semibold ${
//                 openIndex === index ? "bg-emerald-600" : "bg-emerald-500"
//               } bg-emerald-600 text-white`}
//               onClick={() => toggleFAQ(index)}
//             >
//               <span className="text-left">
//                 {faq.question}
//               </span>
//               {openIndex === index ? (
//                 <div className="w-8 h-8 bg-indigo-900 flex justify-center items-center rounded-full">
//                   <ChevronUp className="w-5 h-5 text-white" />
//                 </div>
//               ) : (
//                 <div className="w-8 h-8 bg-indigo-900 flex justify-center items-center rounded-full">
//                   <ChevronDown className="w-5 h-5 text-white" />
//                 </div>
//               )}
//             </button>

//             {/* Answer */}
//             {openIndex === index && (
//               <div className="p-6 bg-emerald-700 text-white text-left text-sm lg:text-base">
//                 {faq.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       <button
//         onClick={handleSubmit}
//         className="mt-12 px-6 py-3 bg-indigo-900 text-white rounded-lg cursor-pointer text-base lg:text-lg hover:bg-indigo-800 transition-colors duration-300"
//       >
//         See more..
//       </button>
//     </section>
//   );
// };

// export default FaqSection;


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
    <section className="px-4 sm:px-6 lg:px-20 py-12 bg-gray-50 text-center min-h-[50vh] w-full">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
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
            className="rounded-lg overflow-hidden shadow-md bg-white"
          >
            {/* Question */}
            <button
              className={`w-full flex justify-between items-center p-4 text-base sm:text-lg font-semibold text-white ${
                openIndex === index ? "bg-emerald-600" : "bg-emerald-500"
              } bg-emerald-600 transition-colors duration-200`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-left flex-1 pr-4">{faq.question}</span>
              <div className="w-8 h-8 bg-indigo-900 flex justify-center items-center rounded-full flex-shrink-0">
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 bg-indigo-900 text-white" />
                ) : (
                  <ChevronDown className="w-5 h-5 bg-indigo-900 text-white" />
                )}
              </div>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="p-4 sm:p-6 bg-emerald-700 text-white text-left text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="mt-12 px-6 py-3 bg-indigo-900 text-white rounded-lg cursor-pointer text-base sm:text-lg hover:bg-indigo-800 transition-colors duration-300"
      >
        See more..
      </button>
    </section>
  );
};

export default FaqSection;