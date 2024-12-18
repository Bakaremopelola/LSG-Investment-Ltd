import OOS from '../assets/OOS.png';
import vision from '../assets/vision.png';
import ET from '../assets/ET.jpg';
import samson from '../assets/samson.jpg';
import taiwo from '../assets/taiwo.jpg';
import balogun from '../assets/balogun.jpg';
import al from '../assets/IMG_7442.jpg';
import theo from '../assets/xxxx.jpg';
import './AboutUs.css';

const teamMembers = [
  {
    image: al,
    name: "Olaitan Ridwan Oluwakemi",
    role: 'Director',
  },
  
  {
    image: theo,
    name: "Alabor Ufoma Okugbe",
    role: "Director",
  },

  {
    name: 'Idowu Bamidele Agemo',
    role: 'Director',
    image: balogun,
  },
  {
    name: 'Taiwo Ibikunle ',
    role: 'Secretary',
    image: taiwo,
  },
  {
    name: 'Samson Adeyemi Balogun',
    role: 'Sales rep',
    image: samson,
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to LSG INVESTMENT LIMITED</h1>
        <p>We are committed to helping you find the perfect property.</p>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="mission-card">
          <div className="mission-image">
            <img src={vision} alt="Our Mission" />
          </div>
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At LSG INVESTMENT LIMITED, we are dedicated to transforming the real estate experience by prioritizing Location, delivering exceptional Service, and fostering sustainable Growth. Our mission is to provide innovative solutions, insightful market expertise, and unmatched service at every stage of the property journey. We strive to help our clients find the ideal locations that maximize value, while ensuring long-term success for both individual investments and the communities we serve. By building lasting relationships and delivering excellence in every transaction, we aim to revolutionize the way people experience real estate.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <h2>Our Values</h2>
        <div className="values-image">
          <img src={ET} alt="Our Values" />
        </div>
        <ul className="values-list">
          <li><strong>Integrity:</strong> We maintain high ethical standards.</li>
          <li><strong>Innovation:</strong> We continually innovate to provide better solutions.</li>
          <li><strong>Client Focus:</strong> Dedicated to understanding and exceeding client needs.</li>
          <li><strong>Quality:</strong> We strive to deliver exceptional service.</li>
          <li><strong>Transparency:</strong> We believe in transparency and accountability.</li>
          <li><strong>Excellence:</strong> We strive to exceed expectations.</li>
          <li><strong>Customer Service:</strong> We prioritize customer satisfaction.</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="why-choose-us-card">
          <div className="why-choose-us-image">
            <img src={OOS} alt="Why Choose Us" />
          </div>
          <div className="why-choose-us-content">
            <h2>Why Choose Us?</h2>
            <ul>
              <li><strong>Experienced Team:</strong> Years of industry expertise to guide every transaction.</li>
              <li><strong>Tailored Solutions:</strong> Customized property solutions based on your needs.</li>
              <li><strong>Cutting-edge Technology:</strong> We use the latest tech for virtual tours and real-time updates.</li>
              <li><strong>Comprehensive Services:</strong> Full service, whether buying, selling, renting, or investing.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Our Team</h2>
        <p>
          Our team consists of experienced real estate professionals dedicated to client satisfaction and delivering results.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
