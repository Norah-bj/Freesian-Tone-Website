import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      {/* Large transparent watermark word */}
      <div className="footer-watermark" aria-hidden="true">FREESIA</div>

      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand-col">
            <h2 className="footer-brand-title">FREESIA TONE</h2>
            <p className="footer-brand-desc">
              Contemporary pieces designed for movement, versatility, and intentional living.
              Handcrafted to order in Kigali, Rwanda.
            </p>
            <div className="footer-ethos-badge">
              <span className="badge-dot" />
              <span>MADE IN RWANDA · SLOW FASHION ATELIER</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <span className="footer-heading">EXPLORE</span>
            <ul className="footer-links">
              <li><Link to="/multiway">The Multiway Top</Link></li>
              <li><Link to="/collections">All Collections</Link></li>
              <li><Link to="/lookbook">Editorial Lookbook</Link></li>
              <li><Link to="/our-story">Our Story & Craft</Link></li>
              <li><a href="/multiway#order-configurator">Custom Orders & Configurator</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-heading">ATELIER & CARE</span>
            <ul className="footer-links">
              <li><Link to="/our-story#craft">Made-to-Order Process</Link></li>
              <li><Link to="/multiway#fabrics">Curated Fabrics</Link></li>
              <li><Link to="/contact">Size & Fit Guidance</Link></li>
              <li><Link to="/contact">WhatsApp Atelier</Link></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram @freesiatone</a></li>
            </ul>
          </div>

          <div className="footer-newsletter-col">
            <span className="footer-heading">STAY IN THE LOOP</span>
            <p className="footer-newsletter-desc">
              Receive private previews of new multiway transformations, seasonal fabric drops, and atelier notes.
            </p>
            {subscribed ? (
              <div className="newsletter-success">
                <span>✦ Thank you for joining our circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  JOIN
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container footer-bottom-content">
          <p className="footer-copy">
            © {new Date().getFullYear()} FREESIA TONE. ALL RIGHTS RESERVED. DESIGNED WITH INTENTION.
          </p>
          <div className="footer-bottom-links">
            <span>KIGALI, RWANDA</span>
            <span className="divider">·</span>
            <span>ONE PIECE. MULTIPLE POSSIBILITIES.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
