import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ex from '../assets/Frame663.png'
import ey from '../assets/Frame160.png'


const faqs = [
    "Is the land free from any government acquisition or claim?",
    "What documents will I receive after full payment?",
    "Are there additional fees I should be aware of?",
    "Do commercial and corner piece plots cost extra?",
    "When will my plot be allocated?",
];

const estateFAQs = [
    { question: "Where is the property located?", answer: "The property is located in Maitama Gardens Estate, Abuja." },
    { question: "What are the nearest landmarks to the property?", answer: "The nearest landmarks include XYZ Mall, ABC School, and DEF Hospital." },
    { question: "What types of units are available in the property?", answer: "The property offers 2-bedroom, 3-bedroom, and 4-bedroom units." },
    { question: "What amenities are available in the property?", answer: "Amenities include 24/7 security, a swimming pool, a gym, and a children's play area." },
    { question: "Is the property easily accessible by public transportation?", answer: "Yes, the estate is well connected with multiple transport options nearby." },
];




const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
      };
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Hero Section */}
            <div className="w-full bg-white text-center ">
                <img src={ex} alt="" />
            </div>

            <section className="bg-gray-100 py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[#1D2150] mb-6">General Questions</h2>

                    <div className="space-y-4">
                        {faqs.map((question, index) => (
                            <div key={index} className="bg-green-500 rounded-lg shadow-md">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center p-4 text-white font-semibold"
                                >
                                    {question}
                                    <FaChevronDown
                                        className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="bg-green-200 text-black p-4 text-left">
                                        Answer content goes here...
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="bg-gray-100 py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[#1D2150] mb-6">
                        Questions About Maitama Gardens Estate
                    </h2>

                    <div className="space-y-4">
                        {estateFAQs.map((item, index) => (
                            <div key={index} className="bg-green-500 rounded-lg shadow-md">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center p-4 text-white font-semibold"
                                >
                                    <span>{index + 1}. {item.question}</span>
                                    <FaChevronDown
                                        className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="bg-green-200 text-black p-4 text-left">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-[#1D2150] mb-4">
            More Questions? <br /> Reach Out to Us!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-green-500 text-white placeholder-white"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-green-500 text-white placeholder-white"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-green-500 text-white placeholder-white"
            />
            <textarea
              name="message"
              placeholder="Enter Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-green-500 text-white placeholder-white"
            ></textarea>
            <button
              type="submit"
              className="bg-[#1D2150] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:block">
          <img
            src={ey}
            alt="Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>


        </div>
    )
}

export default Faq