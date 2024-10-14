import './PropertyListing.css'; // Add this CSS file for styling
import Lsg1 from '../assets/Lsg1.jpg'; // Replace with real image paths
import Lsg8 from '../assets/Lsg8.jpg';
import maitama4 from '../assets/maitama4.jpg'; 
import maitama5 from '../assets/maitama5.jpg'; // Replace with real image paths

// Property data
const properties = [
  {
    id: 1,
    title: "Maitama Garden Estates",
    location: "Agbowa Ikorodu Lagos",
    price: "₦950,000.00",
    SQM: "300sqm",
    Extra: "Survey plan and Deed of ownership",
    images: [maitama4], 
  },
  {
    id: 2,
    title: "Maitama Garden Estates",
    location: "Agbowa Ikorodu Lagos",
    price: "₦1.5M",
    SQM: "500sqm",
    Extra: "Survey plan and Deed of ownership",
    images: [maitama5], 
  },
  {
    id: 3,
    title: "Maitama Garden Estates",
    location: "Agbowa Ikorodu Lagos",
    price: "₦7.5M",
    SQM: "1Acre",
    Extra: "Survey plan and Deed of ownership",
    images: [Lsg8], 
  },
  {
    id: 4,
    title: "Maitama Garden Estates",
    location: "Agbowa Ikorodu Lagos",
    price: "₦7.5M",
    SQM: "1Acre",
    InitialDeposit: "₦3M",
    Extra: "Survey plan and Deed of ownership",
    images: [Lsg8], 
  },
  {
    id: 5,
    title: "Maitama Garden Estates",
    location: "Agbowa Ikorodu Lagos",
    price: "₦1.5M",
    SQM: "500sqm",
    InitialDeposit: "₦300k",
    Extra: "Survey plan and Deed of ownership",
    images: [maitama5], 
  },
  {
    id: 6,
    title: "Maitama Garden Gardens",
    location: "Agbowa Ikorodu Lagos",
    price: "₦950,000.00",
    SQM: "300sqm",
    InitialDeposit: "₦300k",
    Extra: "Survey plan and Deed of ownership",
    images: [maitama4], 
  },
];

// Component to render individual property card
const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
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
        <p className="property-price">Starting from {property.price}</p>
        {property.InitialDeposit && (
          <p>Initial Deposit: {property.InitialDeposit}</p>
        )}
        <p>Plot Size: {property.SQM}</p>
        <p>{property.Extra}</p>
      </div>
    </div>
  );
};

// Main component to display a list of properties
const PropertyListing = () => {
  return (
    <div className="property-listing-container">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyListing;
