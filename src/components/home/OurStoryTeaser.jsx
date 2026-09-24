import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './OurStoryTeaser.css';

export default function OurStoryTeaser() {
  return (
    <section className="our-story-teaser-section">
      <div className="container">
        <div className="our-story-grid">
          {/* Left Visual Column */}
          <motion.div
            className="our-story-visual-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="story-frame">
              <img
                src="/images/hero.jpg"
                alt="Rwandan craftsmanship atelier"
                className="story-main-img"
                loading="lazy"
              />
              <div className="story-badge-kigali">
                <span className="kigali-pin">📍</span>
                <span>KIGALI, RWANDA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative Column */}
          <motion.div
            className="our-story-narrative-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="story-eyebrow">ORIGIN & CRAFT</span>
            <h2 className="story-headline">
              MADE IN RWANDA. <br />
              <span className="story-subheadline">MADE WITH INTENTION.</span>
            </h2>

            <p className="story-lead-paragraph">
              Freesia Tone was born in Kigali from a quiet desire: to redefine contemporary African
              elegance through versatile garments that honor both the wearer’s daily rhythm and the artisan’s hands.
            </p>

            <div className="story-narrative-body">
              <p>
                We do not rely on clichéd patterns or loud motifs to signal our roots. Our African
                identity lives where it truly matters: in our warm earth tones of terracotta and sand,
                in the skilled hands of Rwandan women tailors, and in our deep respect for resources.
              </p>
              <p>
                By engineering clothes that transform, we champion a modern philosophy of slow luxury:
                invest in pieces that do more, waste less, and carry you with grace.
              </p>
            </div>

            <div className="story-action-row">
              <Link to="/our-story">
                <Button variant="outline" size="default">
                  READ OUR COMPLETE STORY
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
