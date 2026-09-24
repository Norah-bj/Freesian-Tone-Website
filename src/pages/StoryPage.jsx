import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import './StoryPage.css';

export default function StoryPage() {
  return (
    <div className="story-page">
      {/* Editorial Story Hero — Lookbook Style */}
      <section className="story-hero">
        <div className="container story-hero-container">
          <span className="story-hero-kicker">✦ BRAND GENESIS & CRAFT MANIFESTO</span>
          <h1 className="story-hero-heading">
            MADE IN RWANDA. <br />
            <span className="heading-italic">MADE WITH INTENTION.</span>
          </h1>
          <p className="story-creed">Garments of profound adaptability and uncompromising integrity.</p>
          <div className="story-accent-rule" />
        </div>
      </section>

      {/* Main Narrative Split */}
      <section className="story-narrative-section">
        <div className="container">
          <div className="story-narrative-grid">
            <motion.div
              className="narrative-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="narrative-section-title">
                The Anatomy of <br />
                <span className="title-italic">Slow Luxury</span>
              </h2>
              <div className="story-quote-box">
                <p className="quote-phrase">
                  “A garment that only looks beautiful in one pose is incomplete. Real luxury adapts to how you move, rest, and transform.”
                </p>
              </div>
            </motion.div>

            <motion.div
              className="narrative-right"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="story-p-lead">
                Fast fashion manufactures disposable desire. Racks of identical items are shipped
                across oceans only to end up in landfills. Freesia Tone was built as an antidote.
              </p>
              <p className="story-p">
                In our Kigali studio, every garment begins with a human name and custom dimensions.
                We select certified organic cottons, washed linen, and pure silk sateens chosen for
                their tactile breathability in equatorial warmth and their resilience through hundreds of re-drapings.
              </p>
              <p className="story-p">
                By investing weeks into engineering multi-axis bias cuts and seamless wrap anchors,
                we eliminate the need for fragile plastic zips and metal clasps. When you put on the
                Multiway Top, you wear an architectural piece engineered to sculpt and drape with pure fabric friction.
              </p>
            </motion.div>
          </div>

          {/* 3 Editorial Craft Pillars */}
          <div className="story-craft-pillars" id="craft">
            <div className="craft-pillar">
              <span className="pillar-index">01 / ROOTS</span>
              <h3 className="pillar-head">Contemporary Rwandan Identity</h3>
              <p className="pillar-copy">
                Our Rwandan heritage is not an aesthetic costume. It is our calm confidence, our
                commitment to communal craftsmanship in Kigali, and our deep reverence for thoughtful,
                unhurried labor.
              </p>
            </div>

            <div className="craft-pillar">
              <span className="pillar-index">02 / ATELIER</span>
              <h3 className="pillar-head">Artisan Tailoring Dignity</h3>
              <p className="pillar-copy">
                Every seam is finished with encased French stitching by experienced women tailors earning
                living wages. We celebrate the master makers whose hands shape each drape.
              </p>
            </div>

            <div className="craft-pillar">
              <span className="pillar-index">03 / CONSCIENCE</span>
              <h3 className="pillar-head">Zero Overproduction</h3>
              <p className="pillar-copy">
                Because we produce strictly made to order, our studio produces virtually zero fabric waste.
                What is cut is worn and cherished for generations.
              </p>
            </div>
          </div>

          {/* Atelier Photo Collage */}
          <div className="story-gallery-strip">
            <div className="gallery-item">
              <img src="/images/hero.jpg" alt="Freesia Tone atelier Kigali" />
            </div>
            <div className="gallery-item">
              <img src="/images/look-3.jpg" alt="Fabric drape craftsmanship" />
            </div>
            <div className="gallery-item">
              <img src="/images/freesia-set.jpg" alt="Natural linen tailoring" />
            </div>
          </div>

          {/* Final Callout */}
          <div className="story-closing-box">
            <span className="closing-kicker">JOIN OUR CIRCLE</span>
            <h2 className="closing-title">Experience Versatile Intentionality</h2>
            <div className="closing-cta">
              <Link to="/multiway">
                <Button variant="primary" size="large">
                  EXPLORE THE MULTIWAY TOP →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
