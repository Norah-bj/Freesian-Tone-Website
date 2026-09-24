import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Image Container with Ken Burns effect */}
      <div className="hero-bg-wrapper">
        <img
          src="/images/hero.jpg"
          alt="Freesia Tone Rwandan luxury editorial fashion"
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
      </div>

      {/* Floating editorial badge */}
      <div className="hero-badge">
        <span className="badge-geo">✦</span>
        <span>MADE IN RWANDA · INTENTIONAL ATELIER</span>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-editorial-lead"
          >
            <span className="hero-season-tag">✦ COLLECTION N° 01 · MULTI-CONFIGURATION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-headline"
          >
            WEAR IT <br />
            <span className="headline-italic">YOUR WAY.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hero-subtext"
          >
            Contemporary pieces designed for movement, versatility, and intentional living.
            One piece handcrafted to transform into multiple silhouettes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="hero-actions"
          >
            <Link to="/collections">
              <Button variant="primary" size="large">
                EXPLORE COLLECTION
              </Button>
            </Link>
            <Link to="/multiway">
              <Button variant="outline" size="large" className="hero-btn-secondary">
                DISCOVER MULTIWAY ✦
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Editorial bottom bar */}
      <div className="hero-bottom-bar">
        <div className="hero-scroll-indicator">
          <span className="scroll-line" />
          <span className="scroll-text">DISCOVER MORE</span>
        </div>
        <div className="hero-stat">
          <span className="stat-num">01 PIECE</span>
          <span className="stat-label">→ 05 SILHOUETTES</span>
        </div>
      </div>
    </section>
  );
}
