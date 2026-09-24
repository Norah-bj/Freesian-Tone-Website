import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container final-cta-container">
        <span className="final-cta-badge">✦ THE FREESIA INVITATION</span>
        <h2 className="final-cta-title">
          FIND YOUR WAY <br />
          <span className="final-cta-italic">TO WEAR IT.</span>
        </h2>
        <p className="final-cta-subtext">
          Explore our signature versatile collection. Handcrafted made to order in Kigali,
          ready to accompany you through every shift of silhouette and season.
        </p>
        <div className="final-cta-actions">
          <Link to="/collections">
            <Button variant="ivory" size="large">
              EXPLORE THE COLLECTION
            </Button>
          </Link>
          <Link to="/multiway">
            <Button variant="outline" size="large" className="cta-outline-light">
              EXPERIENCE THE MULTIWAY TOP →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
