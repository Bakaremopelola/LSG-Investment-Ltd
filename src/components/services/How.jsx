import React from "react";

const HowItWorks = () => {
  const steps = [
    { id: 1, title: "Process", description: "Lorem ipsum dolor sit amet. This is a frequently asked questions content. Lorem ipsum dolor sit amet." },
    { id: 2, title: "Process", description: "Lorem ipsum dolor sit amet. This is a frequently asked questions content. Lorem ipsum dolor sit amet." },
    { id: 3, title: "Process", description: "Lorem ipsum dolor sit amet. This is a frequently asked questions content. Lorem ipsum dolor sit amet." }
  ];

  return (
    <section className="text-center py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">How It Works</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Our services encompass land buying, selling, consultancy, and development, 
        offering comprehensive solutions to meet your real estate needs.
      </p>

      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        {steps.map((step) => (
          <div key={step.id} className="relative flex flex-col items-center">
            <div className="w-48 h-48 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center text-white text-center p-4">
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm mt-2">{step.description}</p>
              </div>
            </div>
            <div className="absolute -top-3 right-5 bg-white border-2 border-gray-900 w-10 h-10 flex items-center justify-center rounded-full text-gray-900 font-bold text-lg">
              {step.id}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
