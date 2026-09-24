import React from 'react';
import { motion } from 'framer-motion';
import './BrandIntro.css';

export default function BrandIntro() {
  return (
    <section className="brand-intro-section">
      <div className="container brand-intro-container">
        <div className="brand-intro-grid">
          <motion.div
            className="brand-intro-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="brand-intro-kicker">PHILOSOPHY</span>
            <h2 className="brand-intro-title">
              Designed with <br />
              <span className="title-emphasis">intention.</span>
            </h2>
            <div className="terracotta-accent-line" />
          </motion.div>

          <motion.div
            className="brand-intro-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="brand-intro-lead">
              At Freesia Tone, we reject the notion that elegance requires an overflowing closet.
              We believe in fewer, more purposeful pieces that evolve with you throughout the day.
            </p>
            <p className="brand-intro-body">
              Every garment is drafted, cut, and tailored to order in Kigali by Rwandan women artisans.
              By engineering adaptable construction into every fold and seam, a single Freesia Tone piece
              unlocks a multitude of expressions—effortless for morning meetings, sculptural for dinner,
              unbound for wherever the evening leads.
            </p>
            
            <div className="brand-intro-pillars">
              <div className="pillar-item">
                <span className="pillar-num">01</span>
                <span className="pillar-title">Versatile Architecture</span>
                <p className="pillar-desc">Multi-configuration drape without excess bulk or complicated fasteners.</p>
              </div>
              <div className="pillar-item">
                <span className="pillar-num">02</span>
                <span className="pillar-title">Made-to-Order Dignity</span>
                <p className="pillar-desc">Zero warehouse waste. Ethical production celebrating Rwandan craftsmanship.</p>
              </div>
              <div className="pillar-item">
                <span className="pillar-num">03</span>
                <span className="pillar-title">Pure Tactile Comfort</span>
                <p className="pillar-desc">Curated natural linen, cotton sateen, and silks that breathe in any climate.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
