import { useState,useEffect, useRef } from 'react';
import img1 from '../assets/MAITAMAVIDEO.MP4';
import './Hero.css';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true); // Mute by default
  const videoRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mute/Unmute Functionality
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // // Optional: Image background functionality if needed (currently not in use but can be expanded)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % [img1].length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="hero-container">
      {/* Background video */}
      <video
        ref={videoRef}
        className="background-video"
        src={img1}
        autoPlay
        loop
        muted={isMuted} // Bind mute state to video
      />
      {/* Hero content with mute button */}
      <div className="hero-content">
         {/* <h1>Creating Value For Your Land And Property Investment.</h1>
        <p>Land Sales, Construction, and Estate Development</p>
        <button className="cta-btn">See Our Projects</button> */}
        <button className="mute-btn" onClick={toggleMute}> 
          {isMuted ? '🔉' : '🔇'}
        </button>
      </div>

      {/* Quick Service Request Section */}
      {/* <div className="quick-service-request">
        <h2>Quick Service Request</h2>
        <form className="inspection-request-form">
          <input type="text" placeholder="Enter your full name" className="input-field" />
          <input type="text" placeholder="Phone number" className="input-field" />
          <button type="submit" className="send-btn">SEND</button>
        </form>
      </div> */}

      
    </div>
  );
};

export default Hero;
