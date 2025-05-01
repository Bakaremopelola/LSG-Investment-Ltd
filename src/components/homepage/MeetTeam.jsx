import React from "react";
import maikudi from "../../assets/maikudi.png";
import emma from "../../assets/emma.jpg";
import anu from "../../assets/anu.png";
import chief from "../../assets/chief.jpg";
import idan from "../../assets/idan.png";
import fine from "../../assets/fne.jpg";
import goody from "../../assets/goody.jpg";

const teamMembers = [
  {
    name: "Bldr Olaitan Ridwan Oluwakemi",
    role: "Director",
    image: maikudi,
  },
  {
    name: "Idowu Bamidele Agemo Esq",
    role: "Director",
    image: emma,
  },
  {
    name: "Mr. Idowu Bamidele Agemo Esq",
    role: "Legal adviser/Director",
    image: emma,
  },
  {
    name: "Ms. Taiwo Ibikunle",
    role: "Executive Secretary",
    image: anu,
  },
  {
    name: "Mr. Emmanuel Onasanya",
    role: "Sales Executive",
    image: chief,
  },
  {
    name: "Mr. Samson Adeyemi Balogun",
    role: "Sales Rep",
    image: idan,
  },
  {
    name: "Mr. James Oluwatosin",
    role: "Creative Designer",
    image: fine,
  },
  {
    name: "Mr. Emmanuel Asuquo",
    role: "Brand Strategist",
    image: goody,
  },
];

const MeetTeam = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 lg:mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl px-4">
          Our team prioritizes your safety, led by our trusted legal advisor who ensures all transactions are secure and legally sound.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="aspect-w-3 aspect-h-4 w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-lg sm:text-xl font-semibold truncate">
                {member.name}
              </h3>
            </div>
            
            {/* Role */}
            <div className="p-4">
              <p className="text-gray-700 text-center text-sm sm:text-base font-medium">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTeam;