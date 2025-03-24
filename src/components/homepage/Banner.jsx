import React from "react";
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/build")
  }


  const handleSubmit = () => {
    navigate("/realtor")
  }
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-green-500 px-6 lg:px-40 py-6 flex flex-col md:flex-row justify-between items-center text-white rounded-lg shadow-lg">
      {/* Text Section */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-lg font-bold">Ready to Buy, Sell, or Invest?</h2>
        <p className="text-sm max-w-md">
          Register now to access verified land deals, connect with opportunities, and get the support you need. Whether you’re a potential buyer or an ambitious realtor.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button onClick={handleClick} className="bg-blue-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          Get a FREE Quote
        </button>
        <button onClick={handleSubmit} className="border border-white text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-green-700 transition">
          Partner with Us
        </button>
      </div>
    </div>
  );
};

export default Banner;
