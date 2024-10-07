import {useState} from 'react';
import './PropertyListing.css'; // Add this CSS file for styling
import img1 from '../assets/prop1.jpg'; // Replace with real image paths
import img2 from '../assets/prop2.jpg'; // Replace with real image paths

const properties = [
  {
    id: 1,
    title: "",
    location: "",
    price: "₦57,500,000",
    images: [img1, img2], // Replace with real images
  },
  {
    id: 2,
    title: "",
    location: "",
    price: "₦57,500,000",
    images: [img1, img2], // Replace with real images
  },
  {
    id: 3,
    title: "",
    location: "",
    price: "₦57,500,000",
    images: [img1, img2], // Replace with real images
  },
  {
    id: 4,
    title: "",
    location: "",
    price: "₦395,000,000",
    images: [img2, img1], // Replace with real images
  },
];

const PropertyListing = () => {
  return (
    <div className="property-listing-container">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % property.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + property.images.length) % property.images.length
    );
  };

  return (
    <div className="property-card">
      <div className="property-image-slider">
        <button className="prev-btn" onClick={handlePrevImage}>&lt;</button>
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="property-image"
        />
        <button className="next-btn" onClick={handleNextImage}>&gt;</button>
      </div>
      <div className="property-details">
        <h3>{property.title}</h3>
        <p>Location: {property.location}</p>
        <p className="property-price">Starting from {property.price}</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default PropertyListing;
