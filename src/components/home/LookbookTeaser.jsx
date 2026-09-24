import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './LookbookTeaser.css';

export default function LookbookTeaser() {
  return (
    <section className="lookbook-teaser-section">
      <div className="container">
        {/* Editorial Masthead */}
        <div className="lookbook-masthead">
          <div className="lookbook-lead-col">
            <span className="lookbook-eyebrow">EDITORIAL SPREAD · VOLUME I</span>
            <h2 className="lookbook-main-title">
              THE FREESIA <br />
              <span className="lookbook-title-italic">WOMAN.</span>
            </h2>
          </div>
          <div className="lookbook-desc-col">
            <p className="lookbook-creed">
              <em>Fluid. Intentional. Unbound.</em>
            </p>
            <p className="lookbook-body">
              She carries less, but commands more presence. Her clothing moves with her life,
              not against it. Captured against Kigali’s architectural light and Rwandan warmth.
            </p>
            <Link to="/lookbook">
              <Button variant="ghost" size="small">
                VIEW FULL EDITORIAL SPREAD →
              </Button>
            </Link>
          </div>
        </div>

        {/* Asymmetric Magazine Spread Layout */}
        <div className="lookbook-spread">
          {/* Main Large Visual */}
          <motion.div
            className="spread-item spread-item--hero"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="spread-img-box">
              <img
                src="/images/hero.jpg"
                alt="The Freesia Woman editorial spread"
                className="spread-img"
                loading="lazy"
              />
              <div className="spread-caption-overlay">
                <span className="caption-num">PLATE 01</span>
                <span className="caption-title">The Draped Architectural Form in Burnt Terracotta</span>
              </div>
            </div>
          </motion.div>

          {/* Secondary Stacked Visuals */}
          <div className="spread-item spread-item--stack">
            <motion.div
              className="spread-sub-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="spread-img-box spread-img-box--sub">
                <img
                  src="/images/freesia-set.jpg"
                  alt="Freesia Set natural linen coordinate"
                  className="spread-img"
                  loading="lazy"
                />
                <div className="spread-caption-overlay">
                  <span className="caption-num">PLATE 02</span>
                  <span className="caption-title">Pure Washed Sand Linen Set</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="spread-sub-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="spread-img-box spread-img-box--sub">
                <img
                  src="/images/look-4.jpg"
                  alt="Sculptural one-shoulder drape"
                  className="spread-img"
                  loading="lazy"
                />
                <div className="spread-caption-overlay">
                  <span className="caption-num">PLATE 03</span>
                  <span className="caption-title">Asymmetric Off-Shoulder Fold</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
