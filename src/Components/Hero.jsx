import { useState, useRef, useEffect } from 'react';
import { Player } from '@vimeo/player'; // Import the Vimeo Player API
import './Hero.css';

// Vimeo Embed URL
const vimeoUrl = "https://player.vimeo.com/video/1046495129?autoplay=1&loop=1&muted=1&background=1"; // Add loop, mute, and autoplay

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true); // Mute by default
  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Initialize Vimeo Player API once iframe is loaded
    if (iframeRef.current && !player) {
      const newPlayer = new Player(iframeRef.current); // Initialize player
      setPlayer(newPlayer);

      // Set up mute behavior based on initial state
      newPlayer.setVolume(isMuted ? 0 : 1);

      // Clean up when the component unmounts
      return () => {
        newPlayer.destroy();
      };
    }
  }, [player, isMuted]);

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.setVolume(1); // Unmute
      } else {
        player.setVolume(0); // Mute
      }
      setIsMuted(!isMuted); // Toggle mute state
    }
  };

  return (
    <div className="hero-container">
      {/* Vimeo iframe with ref */}
      <iframe
        ref={iframeRef}
        src={vimeoUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Background Video"
      ></iframe>

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
