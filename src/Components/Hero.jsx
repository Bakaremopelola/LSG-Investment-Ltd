import  { useState, useEffect } from 'react';
import img1 from '../assets/agb.jpg'; // Replace this with the image you want as the background
import './Hero.css';
// import './Map.css'; // For map styling

// Map component
const Map = () => {
  useEffect(() => {
    // Load Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&callback=initMap`; // Add your Google Maps API Key
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    // Initialize the map once the API script is loaded
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 6.4701551, lng: 3.5865285 }, 
        zoom: 14,
      });


      <iframe
      width="100%"
      height="100%"
      title="map"
      className="absolute inset-0"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      style={{ filter: "opacity(0.7)" }}

    />
      // Add a marker to the map
      const marker = new window.google.maps.Marker({
        position: { lat: 6.4521, lng: 3.5315 }, // Location coordinates
        map: map,
        title: 'Block F3, 212 HFP Eastline Shopping Complex',
      });
    };

    // Cleanup the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="map-container">
      {/* Map will render inside this div */}
      <div id="map" className="map"></div>
    </div>
  );
};

// Hero component with map integrated
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % [img1].length); // Update if using multiple images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* Image Background */}
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${img1})` }} // Use your image as background
      >
        {/* Overlay Text */}
        <div className="hero-content">
          <h1>Creating Value For Your Land And Property Investment.</h1>
          <p>Land Sales, Construction, and Estate Development</p>
          <button className="cta-btn">See Our Projects</button>
        </div>
      </div>

      {/* Quick Service Request Section */}
      <div className="quick-service-request">
        <h2>Quick Service Request</h2>
        <form className="inspection-request-form">
          <input type="text" placeholder="Enter your full name" className="input-field" />
          <input type="text" placeholder="Phone number" className="input-field" />
          <button type="submit" className="send-btn">SEND</button>
        </form>
      </div>

      {/* Map Section */}
      <Map />
    </div>
  );
};

export default Hero;
