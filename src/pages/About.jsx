import React from 'react'
import { FaStar, FaFileContract, FaClipboardCheck, FaUsers } from "react-icons/fa";
import ea from "../assets/Frameb.png"
import ex from "../assets/Frame184.png"
import ey from "../assets/Frame183.png"
import ez from "../assets/Frame185.png"
import OurServices from '../components/homepage/Services';
import WhyChooseUs from '../components/services/WhyChoose';
import Testimonials from '../components/homepage/Testimoinal';

const About = () => {
  const sections = [
    {
      id: 1,
      title: "Our Story",
      content:
        "In 2024, three passionate engineers saw the heartbreak caused by land fraud in Nigeria and decided to act. They founded LSG Investment Limited to offer a safe, transparent path to homeownership. Fueled by integrity and innovation, they transform land into thriving communities, helping families turn dreams into reality.",
      image: ex,
      reverse: false,
    },
    {
      id: 2,
      title: "Our Mission",
      content:
        "At LSG Investment Limited, our mission is to revolutionize the real estate industry in Nigeria by empowering customers with knowledge, ensuring transparent transactions, and delivering exceptional services that foster trust, peace of mind, and informed decision-making.",
      image: ey,
      reverse: true,
    },
    {
      id: 3,
      title: "Our Vision",
      content:
        "Our vision is to become the most trusted and innovative real estate company in Nigeria, renowned for our unwavering commitment to transparency, professionalism, and customer satisfaction, while driving growth, sustainability, and positive impact in the communities we serve.",
      image: ez,
      reverse: false,
    },
  ];


  const values = [
    {
      icon: <FaStar size={40} className="text-white" />,
      title: "Expertise",
      description: "We bring unmatched knowledge and skills to every project, ensuring top-quality results.",
    },
    {
      icon: <FaFileContract size={40} className="text-white" />,
      title: "Transparency",
      description: "Honesty and openness guide all our processes, fostering trust and clarity with our clients.",
    },
    {
      icon: <FaClipboardCheck size={40} className="text-white" />,
      title: "Accountability",
      description: "We take full responsibility for delivering on our promises and commitments.",
    },
    {
      icon: <FaUsers size={40} className="text-white" />,
      title: "Professionalism",
      description: "Our approach is marked by respect, dedication, and excellence in every interaction.",
    },
  ];
  
  return (
     <div className=" bg-gray-100 w-[100vw] overflow-x-hidden p-0 m-0 flex flex-col">
          {/* Hero Section */}
          <div className="w-[100vw] bg-white text-center ">
           <img src={ea} alt="" />
          </div>

          <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex flex-col md:flex-row ${
              section.reverse ? "md:flex-row-reverse" : ""
            } items-center mb-12`}
          >
            {/* Text Section */}
            <div className="md:w-1/2 px-6">
              <h2 className="text-2xl font-bold text-[#1D2150] mb-4">{section.title}</h2>
              <p className="text-gray-700">{section.content}</p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1D2150] mb-2">Our Values</h2>
        <p className="text-gray-600 mb-8">
          Choose us for our transparency, expertise, and personalized approach to real estate.
        </p>

        <div className="bg-[#1D2150] rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center text-white">
              <div className="bg-white p-3 rounded-full mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


<OurServices/>
<WhyChooseUs/>
<Testimonials/>

    </div>
  )
}

export default About