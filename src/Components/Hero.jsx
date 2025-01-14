// import { useState, useRef, useEffect } from 'react';
// import Player from '@vimeo/player'; // Import the Vimeo Player API
// import './Hero.css';
// import videoUrl from "../assets/MATAMA.mp4"


// const Hero = () => {
//   const [isMuted, setIsMuted] = useState(true); // Mute by default
//   const iframeRef = useRef(null);
//   const [player, setPlayer] = useState(null);

//   useEffect(() => {
//     // Initialize Vimeo Player API once iframe is loaded
//     if (iframeRef.current && !player) {
//       const newPlayer = new Player(iframeRef.current); // Initialize player
//       setPlayer(newPlayer);

//       // Set up mute behavior based on initial state
//       newPlayer.setVolume(isMuted ? 0 : 1);

//       // Clean up when the component unmounts
//       return () => {
//         newPlayer.destroy();
//       };
//     }
//   }, [player, isMuted]);

//   const toggleMute = () => {
//     if (player) {
//       if (isMuted) {
//         player.setVolume(1); // Unmute
//       } else {
//         player.setVolume(0); // Mute
//       }
//       setIsMuted(!isMuted); // Toggle mute state
//     }
//   };

//   return (
//     <div className="hero-container">
 
//       <video
//         className="hero-video"
//         src={videoUrl}
//         autoPlay
//         loop
//         muted={isMuted}
//         playsInline
//       ></video>

//       {/* Hero content with mute button */}
//       <div className="hero-content">
//         <button className="mute-btn" onClick={toggleMute}>
//           {isMuted ? '🔉' : '🔇'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { useState, useRef } from 'react';
import './Hero.css';
import videoUrl from '../assets/MATAMA.mp4'; // Import local video file

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true); // Mute by default
  const videoRef = useRef(null); // Ref to control video element

  const toggleMute = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.muted = !isMuted; // Toggle the muted state on the video element
      setIsMuted(!isMuted); // Toggle the state in React
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
