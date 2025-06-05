"use client"



import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials = [
  {
    id: 1,
    avatar: "/images/testimonials/3.jpg",
    text: "Investing with LSG Investment was a great decision. Their team provided excellent support, and my returns exceeded expectations. Their transparency and updates make them a trustworthy partner.",
    name: "Emeka M.",
  },
  {
    id:2,
    avatar: "/images/testimonials/3.jpg",
    text: "LSG Investment transformed my portfolio with their real estate expertise. Their clear communication and strategic insights have led to significant returns. Highly recommend!",
    name: "Davis Adegoke.",
  },
  {
    id:3,
    avatar: "/images/testimonials/3.jpg",
    text: "I was skeptical about real estate investing, but LSG Investment's professionalism and market insights gave me confidence. The results have been outstanding!",
    name: "Racheal John.",
  },
];

const Testimonials = () => {
  
  const [imageErrorMap, setImageErrorMap] = useState<{ [id: number]: boolean }>({});



  const getUserInitials = (name: String) => {
    const parts = name.split(" ");
    return parts[0][0].toUpperCase();
  };

  const getAvatarColor = (id: number) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
    ];
    return colors[id % colors.length];
  };

  return (
    <section className="px-8 md:px-24 lg:px-64 py-64 bg-[#F8FAFC] text-center">
      {/* Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        What our Clients Say About Us
      </h2>

      {/* Testimonials Grid */}
      <div className="grid lg:grid-cols-3 gap-32 lg:gap-8">
      {testimonials.map((testimonial) => {
            const hasImageError = imageErrorMap[testimonial.id];
  
            return (
            
          <div
            key={testimonial.id}
            className="bg-[#1D2150] text-white p-8 rounded-xl shadow-lg relative flex flex-col h-[400px]"
          >
            {/* Stars */}
            <div className="flex justify-end mb-3">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  {star}
                </span>
              ))}
            </div>

            {/* Testimonial Text */}
            <div className="flex-grow overflow-y-auto">
              <p className="text-base md:text-lg lg:text-xl">{testimonial.text}</p>
            </div>

            {/* Profile Section - Fixed at bottom */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-center">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  {!hasImageError ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 64px) 100vw"
                      onError={() =>
                        setImageErrorMap((prev) => ({
                          ...prev,
                          [testimonial.id]: true,
                        }))
                      }
                    />
                  ) : (
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-medium ${getAvatarColor(
                        testimonial.id
                      )}`}
                    >
                      {getUserInitials(testimonial.name)}
                    </div>
                  )}
                </div>
                <p className="ml-4 text-yellow-400 font-semibold">{testimonial.name}</p>
              </div>
            </div>
          </div>
          );
})}
      </div>
    </section>
  );
};

export default Testimonials;
