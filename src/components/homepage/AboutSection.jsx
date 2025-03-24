import { CgCommunity } from "react-icons/cg";
import houseImage from "../../assets/Frame8.png"; // Ensure this matches your actual file location
import { LucideUserRoundCheck } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { BsCash } from "react-icons/bs";
import { FcServices } from "react-icons/fc";

const AboutSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about")
  }
  return (
    <section className="px-6 lg:px-20 py-16 gap-0 bg-white">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Who We Are
        </h2>
        <p className="mt-3 text-gray-600 text-2xl px-16 mx-auto">
          LSG Investment Limited is a trusted real estate company dedicated to
          revolutionizing property ownership in Nigeria. With over a decade of
          expertise, we provide innovative solutions in real estate sales,
          development, and consultancy, empowering clients to achieve their
          property dreams with transparency, professionalism, and trust.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex px-16 gap-0 items-center m-0 justify-center">
        {/* Left: Image */}
        <div className=" h-[600px] w-[20vw] rounded-lg overflow-hidden">
          <img
            src={houseImage}
            alt="House"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>


        <div className="bg-[#1D2150] text-white py-12 px-20 w-[25vw] h-[700px] shadow-lg">
          <h3 className="text-4xl font-semibold mb-3">About Us</h3>
          <p className="text-[1.3em] leading-relaxed">
            Founded in 2024 by seasoned engineers and builders, LSG Investment
            Limited is a visionary real estate company with over a decade of
            expertise in transforming Nigeria’s property landscape. We are
            committed to transparency, professionalism, and innovation,
            empowering Nigerians with secure and exceptional property
            ownership opportunities while fostering trust, informed
            decision-making, and sustainable community growth.
          </p>
          <button onClick={handleClick} className="mt-4 bg-white text-[#1D2150] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition">
            See more..
          </button>
        </div>

        {/* Why Choose Us */}
        <div className="flex flex-col w-[40vw] h-[700px] px-20 py-12 shadow-2xl ">
          <h3 className="text-4xl text-center mb-8 font-semibold text-gray-900 ">
            Why Choose Us
          </h3>
          <ul className="space-y-3 text-gray-700 text-2xl">
            <li className="flex gap-16 justify-start">
              <CgCommunity size={100} />
              <div>
                <strong className="text-[#1D2150]">Client-Centric Values:</strong>
                <p> Your satisfaction comes first. We exceed expectations to build lasting relationships.</p>
              </div>
            </li>
            <li className="flex gap-16 justify-start">
              <LucideUserRoundCheck size={50} />
              <div>
                <strong className="text-[#1D2150]">Personalised Approach:</strong>
                <p>We tailor our services to meet your unique needs.</p>
              </div>

            </li>
            <li className="flex gap-16 justify-start">
              <BsCash size={50} />
              <div>
                <strong className="text-[#1D2150]">Transparency and Trust:</strong>
                <p> Our processes are open and clear, giving you peace of mind.</p>
              </div>
            </li>
            <li className="flex gap-16 justify-start">
              <FcServices size={50} />
              <div>
                <strong className="text-[#1D2150]">Comprehensive Services:</strong>
                <p> We handle everything from planning to after-sales support.</p>
              </div>

            </li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
