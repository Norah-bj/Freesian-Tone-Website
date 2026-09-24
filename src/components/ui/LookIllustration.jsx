import React from 'react';
import { motion } from 'framer-motion';

export default function LookIllustration({ lookId, active = true }) {
  // Line illustrations of the silhouette transformations
  const sketches = {
    1: {
      // The Classic: clean symmetrical tank/top drape
      title: 'Classic Symmetrical',
      path: (
        <>
          {/* Torso outline */}
          <path d="M40 25 C45 25, 55 25, 60 25" stroke="#2B1914" strokeWidth="1.2" strokeLinecap="round" />
          {/* Shoulders */}
          <path d="M40 25 L25 35 L30 50 L32 85 L68 85 L70 50 L75 35 L60 25" fill="none" stroke="#B23704" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Armholes */}
          <path d="M25 35 Q32 45 30 50" fill="none" stroke="#2B1914" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M75 35 Q68 45 70 50" fill="none" stroke="#2B1914" strokeWidth="1" strokeDasharray="2 2" />
          {/* Subtle drape folds */}
          <path d="M45 35 Q50 60 48 85" fill="none" stroke="#B23704" strokeWidth="0.8" opacity="0.6" />
          <path d="M55 35 Q52 60 54 85" fill="none" stroke="#B23704" strokeWidth="0.8" opacity="0.6" />
        </>
      )
    },
    2: {
      // The Wrap: crossover bodice with tied waist sash
      title: 'Asymmetric Crossover Wrap',
      path: (
        <>
          {/* Left wrap over right */}
          <path d="M25 35 L65 70 L55 85 L28 85 Z" fill="rgba(178, 55, 4, 0.08)" stroke="#B23704" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Right layer under */}
          <path d="M75 35 L35 70" fill="none" stroke="#791605" strokeWidth="1.2" strokeLinecap="round" />
          {/* Tie knot and cascade */}
          <circle cx="62" cy="70" r="4" fill="#B23704" />
          <path d="M62 74 Q68 85 65 95" fill="none" stroke="#B23704" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M60 74 Q56 86 58 92" fill="none" stroke="#B23704" strokeWidth="1.2" strokeLinecap="round" />
          {/* V neckline */}
          <path d="M40 25 L50 48 L60 25" fill="none" stroke="#2B1914" strokeWidth="1.2" strokeLinecap="round" />
        </>
      )
    },
    3: {
      // The Drape: fluid cowl neck cascading down
      title: 'Waterfall Cowl Drape',
      path: (
        <>
          {/* Halter straps */}
          <path d="M42 22 L30 45 L32 85 L68 85 L70 45 L58 22" fill="none" stroke="#2B1914" strokeWidth="1.2" />
          {/* Cascading cowl ripples */}
          <path d="M38 32 Q50 52 62 32" fill="none" stroke="#B23704" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M35 40 Q50 64 65 40" fill="none" stroke="#B23704" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M34 50 Q50 74 66 50" fill="none" stroke="#B23704" strokeWidth="1.2" strokeLinecap="round" />
          {/* Center drop line */}
          <path d="M50 52 L50 82" fill="none" stroke="#B23704" strokeWidth="0.8" strokeDasharray="3 2" />
        </>
      )
    },
    4: {
      // The Off-Shoulder: asymmetric one-shoulder diagonal sweep
      title: 'One-Shoulder Sculptural Fold',
      path: (
        <>
          {/* Left bare shoulder, right draped wing */}
          <path d="M28 40 L76 30 L70 85 L32 85 Z" fill="rgba(196, 168, 130, 0.15)" stroke="#B23704" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Diagonal cowl fold */}
          <path d="M28 40 Q50 46 76 30" fill="none" stroke="#791605" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 48 Q54 55 74 42" fill="none" stroke="#B23704" strokeWidth="1.2" strokeLinecap="round" />
          {/* Bare shoulder arch */}
          <path d="M22 35 Q28 28 36 26" fill="none" stroke="#2B1914" strokeWidth="1" strokeDasharray="2 2" />
        </>
      )
    },
    5: {
      // The Statement: high neck with floating dramatic side drapes
      title: 'Halter with Kinetic Wings',
      path: (
        <>
          {/* High collar */}
          <rect x="42" y="20" width="16" height="8" rx="2" fill="#B23704" />
          {/* Center bodice */}
          <path d="M43 28 L34 55 L35 85 L65 85 L66 55 L57 28 Z" fill="rgba(178, 55, 4, 0.1)" stroke="#2B1914" strokeWidth="1.3" />
          {/* Dramatic left wing */}
          <path d="M42 26 Q15 35 10 50 Q20 62 34 55" fill="none" stroke="#B23704" strokeWidth="1.5" strokeLinecap="round" />
          {/* Dramatic right wing */}
          <path d="M58 26 Q85 35 90 50 Q80 62 66 55" fill="none" stroke="#B23704" strokeWidth="1.5" strokeLinecap="round" />
          {/* Wind motion ticks */}
          <path d="M6 46 Q10 44 14 48" fill="none" stroke="#B23704" strokeWidth="0.8" />
          <path d="M86 46 Q90 44 94 48" fill="none" stroke="#B23704" strokeWidth="0.8" />
        </>
      )
    }
  };

  const currentSketch = sketches[lookId] || sketches[1];

  return (
    <div className="look-illustration" title={currentSketch.title}>
      <svg
        viewBox="0 0 100 110"
        className="look-illustration-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle mannequin guideline */}
        <ellipse cx="50" cy="14" rx="7" ry="9" fill="none" stroke="#A89C91" strokeWidth="0.8" opacity="0.4" />
        <line x1="50" y1="23" x2="50" y2="28" stroke="#A89C91" strokeWidth="0.8" opacity="0.4" />
        
        {/* Dynamic silhouette lines */}
        {currentSketch.path}
      </svg>
    </div>
  );
}
