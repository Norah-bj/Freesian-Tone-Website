import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Multiway', path: '/multiway', highlight: true },
    { label: 'Collections', path: '/collections' },
    { label: 'Lookbook', path: '/lookbook' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`nav-header ${scrolled ? 'nav-header--scrolled' : ''}`}>
        <div className="nav-container">
          {/* Mobile Menu Toggle */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`} />
          </button>

          {/* Logo */}
          <Link to="/" className="nav-logo">
            <span className="logo-main">FREESIA TONE</span>
            <span className="logo-sub">KIGALI</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'nav-link--active' : ''} ${
                  link.highlight ? 'nav-link--signature' : ''
                }`}
              >
                {link.label}
                {link.highlight && <span className="signature-pill">FEATURE</span>}
              </Link>
            ))}
          </nav>

          {/* Right utility actions */}
          <div className="nav-actions">
            <Link to="/multiway" className="nav-cta-btn">
              <span>EXPLORE MULTIWAY</span>
            </Link>
            <a href="/multiway#order-configurator" className="nav-bag-btn" title="Make An Order">
              <span className="bag-icon">✦</span>
              <span className="bag-text">ORDER</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mobile-menu-drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-menu-header">
                <span className="mobile-menu-brand">FREESIA TONE</span>
                <button
                  className="mobile-menu-close"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div className="mobile-menu-body">
                <p className="mobile-menu-tagline">
                  One piece. Multiple possibilities.<br />Made to order in Rwanda.
                </p>

                <nav className="mobile-nav-links">
                  <Link to="/" className="mobile-nav-link">
                    <span className="mobile-nav-num">00</span>
                    <span>Home</span>
                  </Link>
                  {navLinks.map((link, idx) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="mobile-nav-link"
                    >
                      <span className="mobile-nav-num">0{idx + 1}</span>
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mobile-menu-footer">
                <p className="footer-location">Kigali, Rwanda · Made with Intention</p>
                <div className="mobile-menu-socials">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                  <a href="https://whatsapp.com" target="_blank" rel="noreferrer">WhatsApp Atelier</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
