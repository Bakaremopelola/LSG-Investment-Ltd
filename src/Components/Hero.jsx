import { useState, useRef } from 'react';
// import img1 from '../assets/vid.mp4';
import './Hero.css';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true); // Mute by default
  const videoRef = useRef(null);

  // Toggle mute/unmute functionality
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="hero-container">
      {/* Background video */}
      <video
        ref={videoRef}
        className="background-video"
        src="https://drive.google.com/file/d/1J89liG-GxBYiNi01TyAmGJ1IA9mY6B2d/view?usp=sharing"
        autoPlay
        loop
        muted={isMuted} // Bind mute state to video
      />
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
