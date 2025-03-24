import React from "react";
import Button from "../Button"; 
import bg from "../../assets/bgimage.jpg"; 
import { useNavigate } from "react-router-dom";

const Hero = () => {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/buyer")
  }


  const handleSubmit = () => {
    navigate("/build")
  }


  return (
    <section
      className="relative w-full h-[90vh] lg:h-[80vh] flex items-center px-8 lg:px-16 bg-cover bg-center"
     
    >
     
      <div className="absolute inset-0  bg-opacity-40 bg-no-repeat scale-x-[-1] bg-cover "  style={{ backgroundImage: `url(${bg})` }} ></div>

      {/* Content */}
      <div className="relative z-8 md:p-32 sm:bg-white/10 bg-white/10 backdrop-blur-xs border border-white/20 lg:text-[#1D2150] md:w-[50vw] px-10 py-12 md:px-8 mx-auto md:m-0">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-[#1D2150] font-bold">
          Ready to <span className="text-green-500">Buy</span>,{" "}
          <span className="text-green-500">Sell</span>, or{" "}
          <span className="text-green-500">Invest</span>?
        </h1>
        <p className="mt-4 text-sm md:text-[1.3em]">
          We simplify your real estate journey with verified land deals,
          transparent processes, and dedicated support ensuring stress-free
          transactions and secure investments tailored to your needs.
        </p>

<h3 className="my-8 text-[1.2em]">Get Started as:</h3>
        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <Button 
          onClick={handleClick} 
          backgroundColor="bg-[#1D2150]" 
          className="rounded-3xl px-10" textColor="text-white"
          >
            Investor
          </Button>
          <Button
          onClick={handleSubmit}
            backgroundColor="bg-transparent"
            textColor="text-[#1D2150]"
            className="rounded-3xl border-2 border-[#1D2150]"
          >
            Partner with Us
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-8 flex space-x-8 text-sm">
          <div><p className="text-2xl font-bold">13+</p><p>Years of experience</p></div>
          <div><p className="text-2xl font-bold">50+</p><p>Happy clients</p></div>
          <div><p className="text-2xl font-bold">95%</p><p>Customer satisfaction</p></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
