"use client"
// Hero.js
import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import bg from "../../../assets/bgimage.jpg";
import { useRouter } from "next/navigation";

const Hero = () => {
  const navigate = useRouter();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    navigate.push("/buyer");
  };

  const handleSubmit = () => {
    navigate.push("/build");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[80vh] flex justify-start items-center px-4 lg:px-16 overflow-hidden"
      style={{ marginTop: "0vh" }} // Add margin to account for fixed navbar
    >
      {/* Background Image */}
      {isVisible && (
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-x-[-1]"
          style={{ backgroundImage: `url(${bg.src})` }}
        />
      )}

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        {/* Content */}
        <div className="w-1/2 lg:w-1/2 px-4 py-16 md:py-24 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-bold mb-4">
            Ready to <span className="text-green-400">Buy</span>,{" "}
            <span className="text-green-400">Sell</span>, or{" "}
            <span className="text-green-400">Invest?</span>
          </h1>

          <p className="text-black text-sm md:text-base lg:text-lg mb-6">
            We simplify your real estate journey with verified land deals,
            transparent processes, and dedicated support ensuring stress-free
            transactions and secure investments tailored to your needs.
          </p>

          <h3 className="text-black text-lg md:text-xl mb-4">Get Started as:</h3>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button
              onClick={handleClick}
              className="rounded-full px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-[#1D2150] hover:bg-[#13163A] text-white transition-colors"
            >
              Investor
            </Button>
            <Button
              onClick={handleSubmit}
              className="rounded-full px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-transparent border-2 border-white hover:bg-white/20 text-white transition-colors"
            >
              Partner with Us
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-8 text-black">
            <div>
              <p className="text-2xl md:text-3xl font-bold">13+</p>
              <p className="text-sm md:text-base">Years of experience</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">50+</p>
              <p className="text-sm md:text-base">Happy clients</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">95%</p>
              <p className="text-sm md:text-base">Customer satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;