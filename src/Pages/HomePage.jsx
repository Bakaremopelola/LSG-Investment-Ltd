
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Components/Hero";
import PropertyListing from "./PropertyListings";
import FAQSection from "../Pages/FAQ";
import lsg1 from "../assets/Lsg1.jpg";
import consult from "../assets/consult.png";
import land4 from "../assets/land5.jpg";
import build from "../assets/build.webp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./HomePage.css";
import balogun from "../assets/balogun.jpg";
import al from "../assets/IMG_7442.jpg";
import theo from "../assets/xxxx.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSeeMoreServices = () => {
    navigate("/services");
  };

  const handleSeeMoreTeam = () => {
    navigate("/about#team");
  };

  const handleSeeMoreFAQs = () => {
    navigate("/faq");
  };

  return (
    <div className="home-page-container">
      <Hero />

      {/* Property Listings */}
      <div className="glass-card" data-aos="fade-up">
        <h2 className="titles">Property Listings</h2>
        <PropertyListing />
      </div>

      <section className="services" data-aos="fade-right">
        <h2>Our Services</h2>
        <div className="services-grid">
          {[{ img: land4, title: "Buying and Selling Properties", description: "We help you buy and sell properties with ease and reliability." },
            { img: build, title: "Constructions and Renovations", description: "Transform spaces with our expert construction and renovation services." },
            { img: consult, title: "Consultations and Support", description: "Get professional advice and support tailored to your needs." },
            { img: lsg1, title: "Property Management", description: "Ensure seamless management of your properties with our services." },
          ].map((service, index) => (
            <div key={index} className="service-card" data-aos="zoom-in">
              <img src={service.img} alt={service.title} className="service-icon" />
              <div className="service-details">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="see-more-btn" onClick={handleSeeMoreServices}>
          See More Services
        </button>
      </section>

      {/* Meet Our Team Section */}
      <section className="team-preview" data-aos="fade-left">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {[{ img: al, name: "Olaitan Ridwan Oluwakemi", role: "Director" },
            { name: 'Idowu Bamidele Agemo', role: 'Director', img: balogun },
            { img: theo, name: "Alabor Ufoma Okugbe", role: "Director" }
          ].map((member, index) => (
            <div key={index} className="team-card" data-aos="zoom-in">
              <img src={member.img} alt={member.name} className="team-img" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
        <button className="see-more-btn" onClick={handleSeeMoreTeam}>
          See More Team Members
        </button>
      </section>

      {/* FAQ Section */}
      <section className="faq-preview" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <FAQSection limit={3} />
        <button className="see-more-btn" onClick={handleSeeMoreFAQs}>
          See More FAQs
        </button>
      </section>

      {/* Map Section */}
      <div className="map-container glass-card" data-aos="fade-up">
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
