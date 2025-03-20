import React from "react";
import { MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import ex from "../assets/Frame68.png"



const Buyer = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Banner Section */}
      <div className="w-full">
        <img
          src={ex}
          alt="Investor Banner"
          className="mx-auto"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 flex flex-col md:flex-row bg-white shadow-lg rounded-lg my-10">
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/3 bg-blue-900 text-white p-8 rounded-l-lg">
          <h2 className="text-2xl font-bold mb-4">Our Contact Info:</h2>
          <p className="mb-2">
            Kindly reach out to us on any of our communication channels below.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <MapPin size={20} /> Jendol Superstore, Km 1, Opposite Akasoleri Estate, Ikorodu, Lagos.
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={20} /> Block F2, HFP Shopping Complex, Lekki Ajah, Lagos.
            </li>
            <li className="flex items-center gap-2">
              <Mail size={20} /> lsginvestmentlimited@gmail.com
            </li>
          </ul>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Investor Form */}
        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Input Details to Get Started as Investor</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First name*" className="p-3 border rounded-md w-full" />
              <input type="text" placeholder="Last name*" className="p-3 border rounded-md w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="tel" placeholder="Phone*" className="p-3 border rounded-md w-full" />
              <input type="email" placeholder="Email*" className="p-3 border rounded-md w-full" />
            </div>

            <input type="text" placeholder="Number of plots" className="p-3 border rounded-md w-full" />

            <textarea placeholder="Purpose of purchase" className="p-3 border rounded-md w-full h-24"></textarea>

            <button className="bg-blue-900 text-white py-3 px-6 rounded-lg w-full md:w-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Buyer;
