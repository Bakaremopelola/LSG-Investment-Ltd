import { useState, useRef } from "react";
import "./Hero.css";

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
        className="background-video"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
      >
       
        <source src="/video.mp4" type="video/mp4" />
       
        Your browser does not support the video tag.
      </video>

      {/* Hero content */}
      <div className="hero-content">
        <button className="mute-btn" onClick={toggleMute}>
          {isMuted ? "🔉" : "🔇"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
