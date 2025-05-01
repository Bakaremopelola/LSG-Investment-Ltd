// import React, { useEffect, useRef, useState } from "react";
// import Button from "../Button";
// import bg from "../../assets/bgimage.jpg";
// import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const handleClick = () => {
//     navigate("/buyer");
//   };

//   const handleSubmit = () => {
//     navigate("/build");
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.1,
//       }
//     );
  
//     const currentSectionRef = sectionRef.current;
  
//     if (currentSectionRef) {
//       observer.observe(currentSectionRef);
//     }
  
//     return () => {
//       if (currentSectionRef) {
//         observer.unobserve(currentSectionRef);
//       }
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full h-auto py-16 md:h-[60vh] lg:h-[80vh] flex justify-start items-center px-4 lg:px-16"
//     >
//       {isVisible && (
//         <div
//           className="absolute inset-0 bg-opacity-40 bg-no-repeat scale-x-[-1] 
//                     bg-contain md:bg-cover bg-center"
//           style={{ backgroundImage: `url(${bg})` }}
//         ></div>
//       )}

//       {/* Content */}
//       <div className="relative z-8 md:p-32 lg:text-[#1D2150] sm:w-[30vw] lg:w-[50vw] px-4 lg:px-10 py-24 md:px-8 mx-auto md:m-0 text-left sm:text-left ml-0 sm:ml-4">
//         <h1 className="text-xl md:text-3xl lg:text-6xl text-[#1D2150] font-bold w-[40vw] lg:w-auto">
//           Ready to <span className="text-green-500">Buy</span>,{" "}
//           <span className="text-green-500">Sell</span>, or{" "}
//           <span className="text-green-500">Invest ?</span>
//         </h1>
//         <p className="mt-4 text-sm lg:text-[1.3em] w-[45vw] lg:w-auto">
//           We simplify your real estate journey with verified land deals,
//           transparent processes, and dedicated support ensuring stress-free
//           transactions and secure investments tailored to your needs.
//         </p>

//         <h3 className="my-4 lg:my-8 text-[1.2em]">Get Started as:</h3>

//         {/* Buttons - Updated with responsive sizing */}
//         <div className="lg:mt-6 flex gap-2 md:gap-4">
//           <Button
//             onClick={handleClick}
//             backgroundColor="bg-[#1D2150]"
//             className="rounded-3xl px-4 py-2 md:px-10 md:py-3 text-sm md:text-base"
//             textColor="text-white"
//           >
//             Investor
//           </Button>
//           <Button
//             onClick={handleSubmit}
//             backgroundColor="bg-transparent"
//             textColor="text-[#1D2150]"
//             className="rounded-3xl border-2 border-[#1D2150] px-4 py-2 md:px-10 md:py-3 text-sm md:text-base"
//           >
//             Partner with Us
//           </Button>
//         </div>

//         {/* Stats */}
//         <div className="mt-8 flex space-x-4 md:space-x-8 text-sm">
//           <div>
//             <p className="text-2xl font-bold">13+</p>
//             <p className="text-base w-[10vw] md:w-auto lg:">
//               Years of experience
//             </p>
//           </div>
//           <div>
//             <p className="text-2xl font-bold">50+</p>
//             <p className="text-base w-[10vw] md:w-auto lg:">Happy clients</p>
//           </div>
//           <div>
//             <p className="text-2xl font-bold">95%</p>
//             <p className="text-base w-[10vw] md:w-auto lg:">
//               Customer satisfaction
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import bg from "../../assets/bgimage.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    navigate("/buyer");
  };

  const handleSubmit = () => {
    navigate("/build");
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
    >
      {/* Background Image */}
      {isVisible && (
        <div
          className="absolute inset-0 bg-no-repeat scale-x-[-1] bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      )}

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        {/* Content */}
        <div className="w-full lg:w-1/2 px-4 py-16 md:py-24 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-4">
            Ready to <span className="text-green-400">Buy</span>,{" "}
            <span className="text-green-400">Sell</span>, or{" "}
            <span className="text-green-400">Invest?</span>
          </h1>
          
          <p className="text-white text-sm md:text-base lg:text-lg mb-6">
            We simplify your real estate journey with verified land deals,
            transparent processes, and dedicated support ensuring stress-free
            transactions and secure investments tailored to your needs.
          </p>

          <h3 className="text-white text-lg md:text-xl mb-4">Get Started as:</h3>

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
          <div className="flex flex-wrap gap-6 md:gap-8 text-white">
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