import { useState, useRef } from 'react';
import './Hero.css';
import videoUrl from '../assets/MATAMA.mp4'; 

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
      {/* Local video with ref */}
      <video
        ref={videoRef}
        className="hero-video"
        src={videoUrl}
        autoPlay
        loop
        muted={isMuted}
        playsInline
      ></video>

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
