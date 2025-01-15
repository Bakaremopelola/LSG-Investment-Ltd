import './PropertyListing.css'; // Add this CSS file for styling
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import PropTypes from 'prop-types'; // Import PropTypes


import maitama4 from '../assets/mets1.jpg'; 
import maitama5 from '../assets/mets2.jpg';

const properties = [
  {
    id: 1,
    title: "Maitama Garden Estates",
    location: "Agbowa Ikorodu Lagos",
    price: "₦1.3M",
    SQM: "300sqm",
    images: [maitama4],
  },
  {
    id: 2,
    title: "Maitama Garden Estates",
    location: "Agbowa Ikorodu Lagos",
    price: "Price upon request", // Default price
    SQM: "500sqm",
    images: [maitama5],
  },
  {
    id: 3,
    title: "Maitama Garden Estates",
    location: "Agbowa Ikorodu Lagos",
    price: "Price upon request", // Default price
    SQM: "1Acre",
    images: [maitama4],
  },
];


// Component to render individual property card
const PropertyCard = ({ property }) => {
  return (
    <div className="property-card" data-aos="fade-up">
      {/* Displaying only the first image */}
      <div className="property-image-slider">
        <img
          src={property.images[0]} // Always display the first image
          alt={property.title}
          className="property-image"
        />
      </div>

      {/* Property Details Section */}
      <div className="property-details">
        <h3>{property.title}</h3>
        <p>Location: {property.location}</p>
        
        {property.InitialDeposit && (
          <p>Initial Deposit: {property.InitialDeposit || "Price upon request"}</p>
        )}
        <p>Plot Size: {property.SQM}</p>
      
      </div>
    </div>
  );
};

// Prop validation for PropertyCard component
PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    SQM: PropTypes.string.isRequired,
    Extra: PropTypes.string.isRequired,
    InitialDeposit: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

// Main component to display a list of properties
const PropertyListing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS initialization
  }, []);

  return (
    <div className="property-listing-container">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};


PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string, // No longer required
    SQM: PropTypes.string.isRequired,
    Extra: PropTypes.string, // Optional
    InitialDeposit: PropTypes.string, // Optional
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PropertyListing;
