import { useState } from 'react';
import consult from '../assets/consult.png';
import land1 from '../assets/land1.jpg';
import build from '../assets/build.webp';
import lsg2 from '../assets/lsg2.jpg';
import './Services.css';

const Services = () => {
  const [showMore, setShowMore] = useState({
    lands: false,
    constructions: false,
    consultations: false,
    propertyManagement: false,
  });

  const toggleShowMore = (service) => {
    setShowMore((prevState) => ({
      ...prevState,
      [service]: !prevState[service],
    }));
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>

      {/* Land and Property Section */}
      <div className="service-card">
        <div className="service-image">
          <img src={land1} alt="Selling Lands and Properties" />
        </div>
        <div className="service-content">
          <h2>Buying and Selling of Lands and Properties</h2>
          <p>
            At LSG INVESTMENT LIMITED, we take immense pride in offering an exclusive range of lands and properties tailored to meet both personal and investment needs. Whether you&apos;re looking to build your dream home, start a commercial venture, or expand your real estate portfolio, our collection of prime locations ensures that we have something for everyone.
            {showMore.lands ? (
              <>
                <br />
                <strong>Why Choose LSG INVESTMENT LIMITED?</strong> <br />
                We understand that purchasing land is a significant decision, both emotionally and financially. That&amp;s why we provide comprehensive support throughout the buying process, ensuring that every client feels confident in their choice. Our team of experts is committed to finding the perfect plot that aligns with your specific needs, whether you are looking for residential land in a peaceful environment, commercial plots in bustling cities, or agricultural land for farming and development. <br />
                Our lands are strategically located in fast-developing regions, offering exceptional potential for appreciation and growth. When you invest with LSG, you&amp;re not just purchasing a piece of land—you&amp;re securing a future filled with opportunities. We carefully vet all our properties, ensuring that they meet all legal requirements and are free from encumbrances, so you can buy with complete peace of mind. <br />
                <strong>Diverse Range of Properties</strong><br />
                We offer plots of various sizes and purposes. Whether you&amp;re seeking to build a family home in a quiet suburban neighborhood or looking to purchase expansive acreage for industrial purposes, we have the ideal property for you. Our lands are located in secure, serene environments with easy access to essential amenities such as schools, hospitals, shopping centers, and major roads, ensuring convenience for everyday living. <br />
                <strong>Flexible Payment Plans</strong><br />
                Understanding that every customer&amp;s financial situation is unique, we offer flexible payment plans that are tailored to your budget. Our transparent pricing ensures that there are no hidden costs, and our finance team is always on hand to discuss the best options available to you. We also partner with reputable financial institutions to provide mortgage services if needed. <br />
                <strong>A Partner in Your Future</strong><br />
                At LSG INVESTMENT LIMITED, we are more than just a real estate company. We are partners in your journey toward achieving your real estate goals. Our dedication to customer satisfaction, combined with our extensive industry knowledge, makes us the go-to choice for land and property investment. With LSG, you&amp;re not just buying land; you&amp;re making a smart investment in a prosperous future. <br />
                Reach out to us today and let us help you find the perfect plot of land that meets your needs, aligns with your vision, and offers unlimited potential for growth. At LSG INVESTMENT LIMITED, your real estate dreams become a reality.
              </>
            ) : null}
          </p>
          <button 
            className="show-more-btn" 
            onClick={() => toggleShowMore('lands')}
            aria-label={showMore.lands ? 'Show less information about lands' : 'Show more information about lands'}
          >
            {showMore.lands ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>

      {/* Construction Section */}
      <div className="service-card">
        <div className="service-image">
          <img src={build} alt="Construction Services" />
        </div>
        <div className="service-content">
          <h2>Constructions</h2>
          <p>
            At LSG INVESTMENT LIMITED, we specialize in delivering high-quality residential and commercial construction projects that exceed our clients&amp; expectations.
            {showMore.constructions ? (
              <>
                <br />
                With years of experience in the construction industry, we have built a reputation for excellence, precision, and professionalism in every project we undertake. Our mission is to provide superior construction services, combining innovative design with exceptional craftsmanship to create spaces that inspire and endure. <br />
                <strong>Comprehensive Construction Services</strong><br />
                From the initial design phase to the final touches of construction, we handle every aspect of the building process with meticulous attention to detail. Our team of architects, engineers, and project managers work closely with clients to understand their vision and turn it into reality. Whether you&amp;re looking to build a custom-designed home, a state-of-the-art office building, or a large-scale commercial complex, we have the expertise and resources to bring your project to life. <br />
                Our residential construction services include building single-family homes, apartment complexes, townhouses, and luxury estates. For commercial projects, we offer everything from office buildings, retail centers, and warehouses to large-scale industrial facilities. No matter the size or complexity of the project, we guarantee top-tier quality at every step of the process. <br />
                <strong>Commitment to Quality and Sustainability</strong><br />
                Quality is at the core of everything we do. We use the finest materials and employ skilled professionals to ensure that every project meets the highest standards of durability and craftsmanship. We are committed to building structures that stand the test of time and provide lasting value to our clients. <br />
                Sustainability is also a key focus in our construction approach. We incorporate eco-friendly practices and materials in all our projects to minimize environmental impact and create energy-efficient buildings. <br />
                <strong>On-Time, On-Budget Delivery</strong><br />
                At LSG, we understand the importance of staying on schedule and within budget. We pride ourselves on our ability to manage projects efficiently, ensuring timely completion without compromising on quality. <br />
                <strong>Your Construction Partner</strong><br />
                Whether you’re planning to build your dream home, expand your business with a new commercial space, or develop an investment property, LSG INVESTMENT LIMITED is the trusted partner you need to achieve your construction goals.
              </>
            ) : null}
          </p>
          <button 
            className="show-more-btn" 
            onClick={() => toggleShowMore('constructions')}
            aria-label={showMore.constructions ? 'Show less information about constructions' : 'Show more information about constructions'}
          >
            {showMore.constructions ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>

      {/* Consultations Section */}
      <div className="service-card">
        <div className="service-image">
          <img src={consult} alt="Consultation Services" />
        </div>
        <div className="service-content">
          <h2>Consultations</h2>
          <p>
            At LSG INVESTMENT LIMITED, we offer personalized and comprehensive real estate consultation services to help clients make informed decisions.
            {showMore.consultations ? (
              <>
                <br />
                Our team of experts provides tailored advice on buying, selling, or investing in real estate, ensuring that every decision aligns with your financial goals and preferences. <br />
                <strong>In-Depth Market Analysis</strong><br />
                We offer in-depth market analysis, including location assessments, market trends, and growth projections, to ensure our clients are always ahead of the curve. <br />
                <strong>Expert Guidance for Buyers, Sellers, and Investors</strong><br />
                Whether you&apos;re a first-time buyer, a seller looking to maximize your property&amp;s value, or an investor searching for lucrative opportunities, LSG provides expert guidance through every step of the process. <br />
                <strong>Your Trusted Real Estate Partner</strong><br />
                At LSG INVESTMENT LIMITED, we strive to build long-term relationships with our clients by delivering outstanding service and results. Contact us today to schedule your consultation and experience real estate success.
              </>
            ) : null}
          </p>
          <button 
            className="show-more-btn" 
            onClick={() => toggleShowMore('consultations')}
            aria-label={showMore.consultations ? 'Show less information about consultations' : 'Show more information about consultations'}
          >
            {showMore.consultations ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>

      {/* Property Management Section */}
      <div className="service-card">
        <div className="service-image">
          <img src={lsg2} alt="Property Management Services" />
        </div>
        <div className="service-content">
          <h2>Property Management</h2>
          <p>
            Our property management services are designed to maximize the value of your investments while providing you with peace of mind.
            {showMore.propertyManagement ? (
              <>
                <br />
                We offer end-to-end property management services, from tenant sourcing and lease management to maintenance and financial reporting. Our goal is to make owning and managing property as effortless as possible for you. <br />
                <strong>Comprehensive Management Services</strong><br />
                From residential to commercial properties, our property management team ensures that your investments are well-maintained and your tenants are satisfied. We handle all aspects of property management, including rent collection, tenant screening, property maintenance, and legal compliance. <br />
                <strong>Maximize Your Returns</strong><br />
                Our expert team works to minimize vacancies and ensure that your properties are generating steady income. We utilize cutting-edge technology to streamline operations, improve tenant satisfaction, and reduce expenses. <br />
                <strong>Your Trusted Property Manager</strong><br />
                With LSG INVESTMENT LIMITED, you can be confident that your property is in capable hands. We treat every property as if it were our own, ensuring that it remains well-maintained, profitable, and compliant with all regulations. <br />
                Contact us today to learn how we can assist you in managing your real estate investments with ease and efficiency.
              </>
            ) : null}
          </p>
          <button 
            className="show-more-btn" 
            onClick={() => toggleShowMore('propertyManagement')}
            aria-label={showMore.propertyManagement ? 'Show less information about property management' : 'Show more information about property management'}
          >
            {showMore.propertyManagement ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
