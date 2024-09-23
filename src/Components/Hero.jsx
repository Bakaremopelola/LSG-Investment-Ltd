import { useState, useEffect } from 'react';
import img1 from '../assets/agb.jpg'
import img2 from '../assets/Lsg1.jpg'
import img3 from '../assets/maikudi.jpg'
import './Hero.css';

const images = [
  img1, // Sample image 1
img2, // Sample image 2
 img3, // Sample image 3
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* Image Slider */}
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {/* Glassmorphism Text */}
        <div className="hero-content">
          <h1>Your Future Starts Here</h1>
          <p>Find your dream home,build your legacy.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
