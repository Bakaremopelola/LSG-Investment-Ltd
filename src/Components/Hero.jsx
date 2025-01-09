import { useState, useRef } from 'react';
// import img1 from '../assets/vid.mp4';
import videoUrl from "https://drive.google.com/file/d/1QhwrMIOeTUZ2a7F9hcSElmtYhEHiRQkR/view?usp=drive_link"
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
        src={videoUrl}
        autoPlay
        loop
        muted={isMuted} // Bind mute state to video
        controls // Optional: Adds play/pause controls
        style={{ width: "100%", height: "auto" }} // Make responsive
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
