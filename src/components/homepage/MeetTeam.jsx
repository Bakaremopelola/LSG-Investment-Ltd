import React from "react";
import maikudi from "../../assets/maikudi.png"
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
    <section className="px-6 lg:px-20 py-16 bg-[#F8FAFC]">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Meet Our Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our team prioritizes your safety, led by our trusted legal advisor who ensures all transactions are secure and legally sound.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 place-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative ">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-t-lg object-cover  w-[450px] h-[500px]"
            />
            <div className="absolute bottom-13 left-0 bg-green-600 text-black md:w-[25vw] lg:w-[15vw] text-2xl px-3 py-2 rounded">
              {member.name}
            </div>
            <p className="text-center text-gray-700 mt-3 pb-4 font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTeam;
