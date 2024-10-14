import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Components/Hero";
import PropertyListing from "./PropertyListings";
import FAQSection from "../Pages/FAQ"; // Import the FAQ component
import lsg1 from "../assets/Lsg1.jpg";
import consult from "../assets/consult.png";
import land4 from "../assets/land5.jpg";
import build from "../assets/build.webp";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  // Define handleSeeMoreServices here
  const handleSeeMoreServices = () => {
    navigate("/services"); // Navigate to the services page
  };

  const handleSeeMoreTeam = () => {
    navigate("/about#team"); 
  };

  const handleSeeMoreFAQs = () => {
    navigate("/faq"); // Navigate to the FAQ page
  };

  return (
    <div className="home-page-container">
      <Hero />
      <div className="glass-card">
      <h2 className="titles">Property Listings</h2>
        <PropertyListing />
      </div>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <img src={land4} alt="Buying and Selling Properties" />
            <h3>Buying and Selling Properties</h3>
          </div>
          <div className="service-item">
            <img src={build} alt="Constructions and Renovations" />
            <h3>Constructions and Renovations</h3>
          </div>
          <div className="service-item">
            <img src={consult} alt="Consultations and Support" />
            <h3>Consultations and Support</h3>
          </div>
          <div className="service-item">
            <img src={lsg1} alt="Property Management" />
            <h3>Property Management</h3>
          </div>
        </div>
        <button className="see-more-btn" onClick={handleSeeMoreServices}>
          See More Services
        </button>
      </section>

      {/* Meet Our Team Section */}
      <section className="team-preview">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-card">
            <img src="team-member1.jpg" alt= "Maikudi" className="team-img" />
            <h3 className="team-name">Olaitan Ridwan Oluwakemi</h3>
            <p className="team-role">CEO & Founder</p>
          </div>
          <div className="team-card">
            <img src="team-member2.jpg" alt="Agemo Idowu" className="team-img" />
            <h3 className="team-name">Agemo Idowu Bamidele</h3>
            <p className="team-role">Head of Design</p>
          </div>
          <div className="team-card">
            <img src="team-member3.jpg" alt="Williams" className="team-img" />
            <h3 className="team-name">Alabor Ufoma Okugbe</h3>
            <p className="team-role">Lead Developer</p>
          </div>
        </div>
        <button className="see-more-btn" onClick={handleSeeMoreTeam}>
          See More teamMembers
        </button>
      </section>

      {/* FAQ Section */}
      <section className="faq-preview">
        <h2>Frequently Asked Questions</h2>
        <FAQSection limit={3} />  {/* Display only 3 FAQs on the homepage */}
        <button className="see-more-btn" onClick={handleSeeMoreFAQs}>
          See More FAQs
        </button>
      </section>

      {/* Map Section */}
      <div className="map-container glass-card">
        <iframe
          width="100%"
          height="450"
          title="map"
          className="map-frame"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ filter: "opacity(0.8)" }}
          src={`https://www.google.com/maps/embed/v1/place?q=Block+F3,+212+HFP+Eastline+Shopping+Complex,+Abraham+Adesanya,+Lagos&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
        />
      </div>
    </div>
  );
};

export default HomePage;
