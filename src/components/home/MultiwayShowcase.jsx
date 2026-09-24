import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { multiwayLooks } from '../../data/looks';
import LookIllustration from '../ui/LookIllustration';
import Button from '../ui/Button';
import './MultiwayShowcase.css';

export default function MultiwayShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);

  const currentLook = multiwayLooks[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % multiwayLooks.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + multiwayLooks.length) % multiwayLooks.length);
  };

  const handleSelect = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Optional gentle autoplay
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Animation variants simulating fabric transformation
  const imageVariants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 1.04,
      filter: 'blur(4px)',
    }),
    center: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94], // fabric curve
      },
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.98,
      filter: 'blur(2px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section className="multiway-section" id="multiway-experience">
      <div className="container">
        {/* Section Header */}
        <div className="multiway-header">
          <div className="multiway-eyebrow">
            <span className="eyebrow-accent">✦</span>
            <span>THE SIGNATURE FREESIA EXPERIENCE</span>
          </div>
          <h2 className="multiway-main-title">
            ONE PIECE. <br />
            <span className="multiway-italic-title">MULTIPLE POSSIBILITIES.</span>
          </h2>
          <p className="multiway-intro-text">
            Do not just buy a garment. Unlock a wardrobe. Experience how a single hand-cut top
            seamlessly rearranges into five distinct expressions through intentional fold architecture.
          </p>
        </div>

        {/* The Interactive Stage */}
        <div className="multiway-stage">
          {/* Left Column: Editorial Photograph with Fabric Crossfade */}
          <div className="stage-visual-col">
            <div className="stage-image-frame">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentLook.id}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="stage-image-wrapper"
                >
                  <img
                    src={currentLook.image}
                    alt={`${currentLook.name} - Freesia Multiway Top`}
                    className="stage-img"
                  />
                  {/* Floating Silhouette Tag */}
                  <div className="stage-floating-tag">
                    <span className="tag-look-num">LOOK {currentLook.number}</span>
                    <span className="tag-silhouette-name">{currentLook.silhouette}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Discovery Badge */}
              <div className="stage-discovery-banner">
                <span className="discovery-icon">✦</span>
                <span>SAME GARMENT · ZERO FASTENERS NEEDED</span>
              </div>
            </div>

            {/* Visual Navigation Controls */}
            <div className="stage-nav-bar">
              <button
                className="stage-nav-arrow"
                onClick={handlePrev}
                aria-label="Previous look"
              >
                ← PREVIOUS LOOK
              </button>

              <div className="stage-pagination-dots">
                {multiwayLooks.map((look, idx) => (
                  <button
                    key={look.id}
                    onClick={() => handleSelect(idx)}
                    className={`stage-dot ${idx === currentIndex ? 'stage-dot--active' : ''}`}
                    aria-label={`Go to ${look.name}`}
                  >
                    <span className="dot-label">{look.number}</span>
                  </button>
                ))}
              </div>

              <button
                className="stage-nav-arrow"
                onClick={handleNext}
                aria-label="Next look"
              >
                NEXT LOOK →
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Look Story & Hybrid Fashion Sketch */}
          <div className="stage-content-col">
            <div className="stage-content-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLook.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="look-info-panel"
                >
                  {/* Header Row: Look Number & Sketch */}
                  <div className="look-header-row">
                    <div>
                      <span className="look-kicker">STYLING CONFIGURATION</span>
                      <h3 className="look-title">{currentLook.name}</h3>
                      <p className="look-subtitle">{currentLook.subtitle}</p>
                    </div>

                    {/* The Hybrid Fashion Sketch */}
                    <div className="look-sketch-box" title="Silhouette Draping Blueprint">
                      <LookIllustration lookId={currentLook.id} active={true} />
                      <span className="sketch-caption">DRAPE SCHEMATIC</span>
                    </div>
                  </div>

                  <div className="look-divider" />

                  {/* Editorial Description */}
                  <p className="look-description">{currentLook.description}</p>

                  {/* Styling Suggestion */}
                  <div className="look-styling-tip">
                    <span className="tip-label">HOW TO WEAR IT:</span>
                    <p className="tip-text">{currentLook.stylingTip}</p>
                  </div>

                  {/* Garment Details Matrix */}
                  <div className="look-spec-matrix">
                    <div className="spec-item">
                      <span className="spec-label">FABRIC SHOWN</span>
                      <span className="spec-value">Terracotta Silk Sateen</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">TRANSFORMATION TIME</span>
                      <span className="spec-value">&lt; 30 Seconds</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">OCCASION</span>
                      <span className="spec-value">Versatile / Day-to-Night</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="look-actions">
                    <Link to="/multiway">
                      <Button variant="primary" size="default">
                        EXPLORE MULTIWAY TOP — 35,000 RWF
                      </Button>
                    </Link>
                    <a href="/multiway#order-configurator">
                      <Button variant="outline" size="default">
                        CUSTOMIZE THIS LOOK
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Look Selector Quick-Bar */}
            <div className="look-quickbar">
              <span className="quickbar-title">ALL 5 CONFIGURATIONS:</span>
              <div className="quickbar-chips">
                {multiwayLooks.map((look, idx) => (
                  <button
                    key={look.id}
                    className={`quickbar-chip ${idx === currentIndex ? 'quickbar-chip--active' : ''}`}
                    onClick={() => handleSelect(idx)}
                  >
                    <span className="chip-num">{look.number}</span>
                    <span className="chip-name">{look.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
