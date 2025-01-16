import { useState, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="hero-container">
      {/* Lazy-loaded video */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata" // Only load metadata initially
        style={{ width: '100%', height: 'auto' }}
        loading="lazy" // Lazy loading for better performance
      >
        <source src="/MATAMA.mp4" type="video/mp4" /> {/* Adjusted the path */}
        Your browser does not support the video tag.
      </video>

      {/* Hero content with mute button */}
      <div className="hero-content">
        <button className="mute-btn" onClick={toggleMute}>
          {isMuted ? '🔉' : '🔇'}
        </button>
      </div>
    </div>
  );
};

export default Hero;
