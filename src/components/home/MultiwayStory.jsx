import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { multiwayLooks } from '../../data/looks';
import './MultiwayStory.css';

export default function MultiwayStory() {
  return (
    <section className="multiway-story-section">
      <div className="container">
        <div className="multiway-story-header">
          <span className="story-eyebrow">THE PHILOSOPHY OF VERSATILITY</span>
          <h2 className="story-title">
            MORE WAYS <br />
            <span className="story-title-italic">TO BE YOU.</span>
          </h2>
          <p className="story-lead">
            A wardrobe should not limit your day. Each configuration of the Freesia Multiway Top
            represents a distinct attitude, seamlessly unfolding without changing clothes.
          </p>
        </div>

        {/* 5-Look Visual Gallery */}
        <div className="story-looks-gallery">
          {multiwayLooks.map((look, idx) => (
            <motion.div
              key={look.id}
              className="story-look-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="story-card-media">
                <img
                  src={look.image}
                  alt={`Freesia Tone look ${look.number} ${look.name}`}
                  className="story-card-img"
                  loading="lazy"
                />
                <div className="story-card-overlay">
                  <span className="overlay-tip-text">{look.subtitle}</span>
                </div>
              </div>
              <div className="story-card-meta">
                <span className="story-card-num">0{idx + 1}</span>
                <h4 className="story-card-name">{look.name}</h4>
                <p className="story-card-sil">{look.silhouette}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Quote Callout */}
        <div className="story-quote-banner">
          <div className="quote-icon">“</div>
          <p className="quote-text">
            I am not buying one outfit. I am buying one piece that gives me multiple looks.
          </p>
          <span className="quote-author">— THE FREESIA PRINCIPLE</span>
        </div>
      </div>
    </section>
  );
}
