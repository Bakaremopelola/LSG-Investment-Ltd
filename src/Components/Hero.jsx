import { useState, useRef, useEffect } from 'react';
import './Hero.css';

const youtubeUrl = `https://www.youtube.com/embed/Hqi-H_47yfY?autoplay=1&mute=1&loop=1&playlist=Hqi-H_47yfY&modestbranding=1&controls=0&rel=0&showinfo=0`; // Hide controls, branding, and related videos

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true); // Mute by default
  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Initialize YouTube player after the iframe loads
    if (window.YT && iframeRef.current) {
      const newPlayer = new window.YT.Player(iframeRef.current, {
        events: {
          'onReady': () => {
            setPlayer(newPlayer); // Set player once it's ready
          },
        },
      });
    }
  }, []);

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="hero-container">
      {/* YouTube iframe */}
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        src={youtubeUrl}
        title="Hero video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 'none' }}
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
