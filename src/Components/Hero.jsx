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
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata" // Lazy load metadata
        style={{ width: '100%', height: 'auto' }}
      >
        <source src="/matama.mp4?version=1" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <button className="mute-btn" onClick={toggleMute}>
          {isMuted ? '🔉' : '🔇'}
        </button>
      </div>
    </div>
  );
};

export default Hero;
