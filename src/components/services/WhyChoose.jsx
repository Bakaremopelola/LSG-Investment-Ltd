import React from "react";
import { FaUsers, FaHandshake, FaShieldAlt, FaBuilding } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaUsers className="text-4xl text-white" />,
      title: "Client-Centric Values",
      description: "Your satisfaction comes first, and we exceed expectations to build lasting relationships.",
    },
    {
      id: 2,
      icon: <FaHandshake className="text-4xl text-white" />,
      title: "Personalized Approach",
      description: "Your satisfaction comes first, and we exceed expectations to build lasting relationships.",
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-4xl text-white" />,
      title: "Transparency and Trust",
      description: "Our processes are open and clear, giving you peace of mind.",
    },
    {
      id: 4,
      icon: <FaBuilding className="text-4xl text-white" />,
      title: "Comprehensive Services",
      description: "We handle everything from planning to after-sales support for a hassle-free experience.",
    },
  ];

  return (
    <section className="text-center py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">Why Choose Us</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Choose us for our transparency, expertise, and personalized approach to real estate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
        {features.map((feature) => (
          <div key={feature.id} className="bg-[#1D2150] p-6 rounded-xl text-white flex flex-col items-center shadow-md">
            <div className="bg-white p-4 rounded-full mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm mt-2 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
