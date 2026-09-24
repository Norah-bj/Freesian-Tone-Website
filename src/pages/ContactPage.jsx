import React, { useState } from 'react';
import Button from '../components/ui/Button';
import './ContactPage.css';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero-container">
          <span className="contact-kicker">✦ ATELIER DIALOGUE · KIGALI</span>
          <h1 className="contact-hero-heading">
            CONNECT WITH <br />
            <span className="heading-italic">KIGALI.</span>
          </h1>
          <p className="contact-creed">Bespoke sizing. Customized fabric drops. Atelier care.</p>
          <div className="contact-accent-rule" />
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container contact-grid">
          {/* Direct Channels (Clean Minimalist Editorial — No Clutter) */}
          <div className="contact-channels-col">
            <h2 className="channels-heading">Direct Atelier Inquiries</h2>
            <p className="channels-body">
              For real-time fit consultations and custom fabric requests, our preferred channel
              is direct WhatsApp with our Kigali pattern makers.
            </p>

            <div className="channel-cards">
              <a
                href="https://wa.me/250780000000"
                target="_blank"
                rel="noreferrer"
                className="channel-card channel-card--wa"
              >
                <div className="channel-info">
                  <span className="channel-tag">DIRECT ATELIER CHAT</span>
                  <span className="channel-name">WhatsApp Studio</span>
                  <span className="channel-detail">+250 780 000 000</span>
                </div>
                <span className="channel-arrow">OPEN CHAT →</span>
              </a>

              <a
                href="https://instagram.com/freesiatone"
                target="_blank"
                rel="noreferrer"
                className="channel-card"
              >
                <div className="channel-info">
                  <span className="channel-tag">VISUAL ARCHIVE</span>
                  <span className="channel-name">Instagram</span>
                  <span className="channel-detail">@freesiatone · Daily styling transformations</span>
                </div>
                <span className="channel-arrow">FOLLOW →</span>
              </a>

              <div className="channel-card">
                <div className="channel-info">
                  <span className="channel-tag">WRITTEN DISPATCH</span>
                  <span className="channel-name">Email Correspondence</span>
                  <span className="channel-detail">atelier@freesiatone.com</span>
                </div>
              </div>

              <div className="channel-card">
                <div className="channel-info">
                  <span className="channel-tag">STUDIO LOCATION</span>
                  <span className="channel-name">Kigali Workshop</span>
                  <span className="channel-detail">Kigali, Rwanda (By Appointment)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-col">
            <div className="contact-form-box">
              <h3 className="form-box-title">Send a Written Request</h3>
              <p className="form-box-sub">We reply within 24 business hours.</p>

              {formSent ? (
                <div className="contact-success-msg">
                  <span className="check-star">✦</span>
                  <h4>Message Received</h4>
                  <p>Thank you for reaching out. We look forward to connecting with you.</p>
                  <button onClick={() => setFormSent(false)} className="reset-link">
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="atelier-form">
                  <div className="form-row">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      className="form-input"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      className="form-input"
                    />
                  </div>

                  <div className="form-row">
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp Number"
                      className="form-input"
                    />
                    <select className="form-input form-select" defaultValue="general">
                      <option value="general">Inquiry Topic</option>
                      <option value="multiway">Multiway Top Custom Sizing</option>
                      <option value="bespoke">Bespoke Fitting Request</option>
                      <option value="fabrics">Fabric & Swatch Inquiries</option>
                      <option value="press">Editorial & Press</option>
                    </select>
                  </div>

                  <textarea
                    rows="4"
                    required
                    placeholder="Your message, dimensions, or questions for our makers..."
                    className="form-input form-textarea"
                  />

                  <Button variant="primary" size="large" fullWidth type="submit">
                    TRANSMIT NOTE TO ATELIER
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
