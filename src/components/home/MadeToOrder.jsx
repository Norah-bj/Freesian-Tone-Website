import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { madeToOrderSteps } from '../../data/looks';
import Button from '../ui/Button';
import './MadeToOrder.css';

export default function MadeToOrder() {
  const stepIcons = [
    // 01 Choose piece
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M6 3h12l2 6-4 2-4-4-4 4-4-2 2-6z" />
      <path d="M8 9v12h8V9" />
    </svg>,
    // 02 Choose fabric
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M4 4c4 0 6 4 10 4s6-4 6-4v12c0 0-2 4-6 4s-6-4-10-4V4z" />
      <path d="M4 10c4 0 6 4 10 4s6-4 6-4" />
    </svg>,
    // 03 Choose size
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 7h18M3 12h18M3 17h18" />
      <path d="M7 7v10M17 7v10" />
    </svg>,
    // 04 Make it yours
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,
    // 05 Receive piece
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="7" width="20" height="14" rx="1" />
      <path d="M16 7V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3" />
      <path d="M12 12v3" />
    </svg>,
  ];

  return (
    <section className="made-section">
      <div className="container">
        <div className="made-header">
          <span className="made-eyebrow">CONSCIOUS ATELIER CRAFT</span>
          <h2 className="made-title">
            MADE <span className="made-title-italic">FOR YOU.</span>
          </h2>
          <p className="made-subtitle">
            We don’t produce mass racks of identical sizes waiting on warehouse shelves.
            Every Freesia Tone piece begins only when requested, hand-patterned for your unique shape in Kigali.
          </p>
        </div>

        {/* 5-Step Process Horizontal Roadmap */}
        <div className="made-steps-grid">
          {madeToOrderSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              className="made-step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="step-num-badge">
                <span className="step-num-text">{step.number}</span>
                <div className="step-icon-circle">
                  {stepIcons[idx]}
                </div>
              </div>

              <h4 className="step-card-title">{step.title}</h4>
              <p className="step-card-desc">{step.description}</p>
              <p className="step-card-detail">{step.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Made to Order Benefits Bar */}
        <div className="made-benefits-strip">
          <div className="benefit-item">
            <span className="benefit-icon">✦</span>
            <div>
              <span className="benefit-title">Zero Overproduction</span>
              <p className="benefit-text">Crafted on demand to eliminate fashion waste.</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✦</span>
            <div>
              <span className="benefit-title">Bespoke Fit Available</span>
              <p className="benefit-text">Send your exact measurements for tailored precision.</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✦</span>
            <div>
              <span className="benefit-title">2–3 Week Production</span>
              <p className="benefit-text">Patient, deliberate craftsmanship that endures for years.</p>
            </div>
          </div>
        </div>

        <div className="made-cta-center">
          <a href="/multiway#order-configurator">
            <Button variant="primary" size="large">
              REQUEST A MADE-TO-ORDER PIECE
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
