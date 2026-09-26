import React, { useState, useEffect, useRef } from 'react';
import { playClickSound } from '../utils/sound';

export default function RobotMascot({ mood = 'idle', size = 220 }) {
  const [clickCount, setClickCount] = useState(0);
  const [speech, setSpeech] = useState("Hi! I'm Robo — ready to build?");
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const mascotRef = useRef(null);

  // Track cursor position to make robot eyes follow the user
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const maxDistance = 4;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(Math.hypot(deltaX, deltaY) / 60, maxDistance);
      setPupilOffset({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const greetings = [
    "Beep boop! Systems at 100%!",
    "Want to code my maze algorithm?",
    "Sensors active: LiDAR pinging!",
    "Did you know Atlas does parkour?",
    "Ready for the robotics trivia arena?",
    "Look at those shiny circuit traces!"
  ];

  const handleMascotClick = () => {
    playClickSound();
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    setSpeech(greetings[nextCount % greetings.length]);
  };

  return (
    <div className="hero-mascot-wrapper" ref={mascotRef}>
      <div className="mascot-backdrop-glow" />
      <div 
        className="mascot-interactive-box" 
        style={{ width: size, height: size }}
        onClick={handleMascotClick}
        title="Click me for robot talk!"
      >
        <svg viewBox="0 0 200 200" fill="none" style={{ width: '100%', height: '100%' }}>
          {/* Antenna */}
          <rect x="97" y="16" width="6" height="20" rx="3" fill="#ffc857" />
          <circle cx="100" cy="14" r="8" fill="#ffc857" />
          <circle cx="100" cy="14" r="14" fill="rgba(255, 200, 87, 0.35)" className="pulse-beacon" />

          {/* Ears / Side Sensory Transceivers */}
          <rect x="24" y="85" width="22" height="14" rx="7" fill="#ff5c77" />
          <rect x="154" y="85" width="22" height="14" rx="7" fill="#ff5c77" />

          {/* Body Chassis */}
          <rect x="52" y="72" width="96" height="84" rx="20" fill="#171d4d" stroke="#00f5d4" strokeWidth="3" />
          
          {/* Head */}
          <rect x="70" y="34" width="60" height="48" rx="16" fill="#131742" stroke="#00f5d4" strokeWidth="3" />

          {/* Visor Screen */}
          <rect x="78" y="44" width="44" height="24" rx="10" fill="#080b24" />

          {/* Eyes with cursor tracking */}
          <g transform={`translate(${pupilOffset.x}, ${pupilOffset.y})`}>
            <circle cx="89" cy="56" r="6.5" fill="#00f5d4" filter="drop-shadow(0 0 6px #00f5d4)" />
            <circle cx="87.5" cy="54.5" r="2" fill="#ffffff" />
            
            <circle cx="111" cy="56" r="6.5" fill="#00f5d4" filter="drop-shadow(0 0 6px #00f5d4)" />
            <circle cx="109.5" cy="54.5" r="2" fill="#ffffff" />
          </g>

          {/* Chest Heart / Microcontroller Screen */}
          <rect x="68" y="94" width="64" height="34" rx="8" fill="#090c29" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="1.5" />
          
          {/* Animated LED Circuit telemetry dots on chest */}
          <circle cx="78" cy="104" r="3" fill="#ff5c77" />
          <circle cx="88" cy="104" r="3" fill="#ffc857" />
          <circle cx="98" cy="104" r="3" fill="#00f5d4" />
          <circle cx="108" cy="104" r="3" fill="#a78bfa" />
          <circle cx="118" cy="104" r="3" fill="#00f5d4" />

          {/* Chest wave graph */}
          <path d="M76 118 L86 118 L90 112 L96 122 L102 114 L108 120 L120 120" stroke="#00f5d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Robotic Legs */}
          <rect x="68" y="156" width="22" height="30" rx="7" fill="#171d4d" stroke="#a78bfa" strokeWidth="2.5" />
          <rect x="110" y="156" width="22" height="30" rx="7" fill="#171d4d" stroke="#a78bfa" strokeWidth="2.5" />

          {/* Feet */}
          <rect x="62" y="180" width="30" height="10" rx="5" fill="#a78bfa" />
          <rect x="108" y="180" width="30" height="10" rx="5" fill="#a78bfa" />
        </svg>
      </div>

      <div className="mascot-speech-bubble">
        <span>💬 {speech}</span>
      </div>
    </div>
  );
}
