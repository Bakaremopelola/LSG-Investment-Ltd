// import { useState, useRef } from 'react';
// import videoUrl from '../assets/vid.mp4';
// // import videoUrl from "https://drive.google.com/file/d/1QhwrMIOeTUZ2a7F9hcSElmtYhEHiRQkR/view?usp=drive_link"
// import './Hero.css';
//  const youtubeUrl = `https://www.youtube.com/watch?v=Hqi-H_47yfY`;



// const Hero = () => {
//   const [isMuted, setIsMuted] = useState(true); // Mute by default
//   const videoRef = useRef(null);

//   // Toggle mute/unmute functionality
//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(!isMuted);
//     }
//   };

//   return (
//     <div className="hero-container">
//       {/* Background video */}
// {/*        <video
//         ref={videoRef}
//         className="background-video"
//         src={videoUrl}
//         autoPlay
//         loop
//         muted={isMuted} // Bind mute state to video
//         controls // Optional: Adds play/pause controls
//         style={{ width: "100%", height: "auto" }} // Make responsive
//       /> */}
//          <iframe
//         width="100%"
//         height="100%"
//         src={youtubeUrl}
//         title="YouTube video"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         style={{ border: "none" }}
//       ></iframe>
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


import { useState, useRef, useEffect } from 'react';
import './Hero.css';

const youtubeUrl = `https://www.youtube.com/embed/Hqi-H_47yfY?autoplay=1&mute=1&loop=1&playlist=Hqi-H_47yfY`; // Add loop and playlist parameters for looping

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
        title="YouTube video"
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
