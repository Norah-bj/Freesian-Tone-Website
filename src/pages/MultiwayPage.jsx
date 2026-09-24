import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { multiwayLooks } from '../data/looks';
import { products, formatPrice } from '../data/products';
import LookIllustration from '../components/ui/LookIllustration';
import Button from '../components/ui/Button';
import './MultiwayPage.css';

export default function MultiwayPage() {
  const product = products.find((p) => p.id === 'multiway-top') || products[0];
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const [selectedFabric, setSelectedFabric] = useState(product.fabrics[0].name);
  const [selectedSize, setSelectedSize] = useState('S (UK 8)');
  const [quantity, setQuantity] = useState(1);
  const [customBust, setCustomBust] = useState('');
  const [customWaist, setCustomWaist] = useState('');
  const [customHips, setCustomHips] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);

  const activeLook = multiwayLooks[activeLookIndex];
  const totalPrice = product.price * quantity;

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
  };

  return (
    <div className="multiway-page">
      {/* Dedicated Multiway Hero — 2-Column Split Layout */}
      <section className="mw-hero">
        <div className="container mw-hero-container">
          <div className="mw-hero-text">
            <span className="mw-kicker">✦ SIGNATURE PRODUCT · EXPERIENCE</span>
            <h1 className="mw-hero-heading">
              THE MULTIWAY <br />
              <span className="heading-italic">TOP.</span>
            </h1>
            <p className="mw-creed">One piece. Multiple possibilities. Made to order in Kigali.</p>
            <p className="mw-hero-price">{formatPrice(product.price)}</p>

            <div className="mw-hero-badges">
              <span className="mw-badge">05 SILHOUETTES</span>
              <span className="mw-badge">ZERO HARSH HARDWARE</span>
              <span className="mw-badge">MADE TO ORDER</span>
            </div>

            <a href="#interactive-styling" className="mw-scroll-btn">
              <Button variant="primary" size="default">
                EXPLORE 5 WAYS TO WEAR IT ↓
              </Button>
            </a>
          </div>

          <div className="mw-hero-media">
            <div className="mw-hero-frame">
              <img
                src={activeLook.image}
                alt="Freesia Multiway Top"
                className="mw-hero-img"
              />
              <div className="mw-frame-badge">
                <span className="badge-sm-num">LOOK {activeLook.number}</span>
                <span className="badge-sm-title">{activeLook.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Central Interactive Dressing Studio */}
      <section className="mw-interactive-studio" id="interactive-styling">
        <div className="container">
          <div className="studio-header">
            <span className="studio-caption">THE TRANSFORMATION STUDIO</span>
            <h2 className="studio-title">
              Discover How It <span className="title-italic">Transforms</span>
            </h2>
            <p className="studio-subtext">
              Select any of the five configurations below to explore how the fabric drapes,
              folds, and reinvents your silhouette without additional accessories.
            </p>
          </div>

          {/* Look Selector Tabs */}
          <div className="studio-tabs">
            {multiwayLooks.map((look, idx) => (
              <button
                key={look.id}
                className={`studio-tab ${idx === activeLookIndex ? 'studio-tab--active' : ''}`}
                onClick={() => setActiveLookIndex(idx)}
              >
                <span className="tab-num">{look.number}</span>
                <span className="tab-name">{look.name}</span>
                <span className="tab-sil">{look.silhouette}</span>
              </button>
            ))}
          </div>

          {/* Interactive Presentation Stage */}
          <div className="studio-stage">
            {/* Visual Viewport with AnimatePresence */}
            <div className="studio-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLook.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="studio-img-wrap"
                >
                  <img
                    src={activeLook.image}
                    alt={activeLook.name}
                    className="studio-main-img"
                  />
                  <div className="studio-active-tag">
                    <span className="tag-number">CONFIGURATION {activeLook.number}</span>
                    <h3 className="tag-name">{activeLook.name}</h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Draping Architecture & Notes Panel */}
            <div className="studio-sidebar">
              <div className="sidebar-card">
                <div className="sidebar-header">
                  <div>
                    <span className="sidebar-sub">STYLING NOTES</span>
                    <h3 className="sidebar-title">{activeLook.name}</h3>
                    <p className="sidebar-sil">{activeLook.silhouette}</p>
                  </div>
                  {/* Hybrid fashion sketch */}
                  <div className="sidebar-sketch">
                    <LookIllustration lookId={activeLook.id} />
                  </div>
                </div>

                <div className="sidebar-divider" />

                <p className="sidebar-desc">{activeLook.description}</p>

                <div className="sidebar-tip-box">
                  <span className="tip-title">HOW TO STYLE:</span>
                  <p className="tip-content">{activeLook.stylingTip}</p>
                </div>

                <div className="sidebar-specs">
                  <div className="spec-row">
                    <span className="spec-k">Transformation Technique:</span>
                    <span className="spec-v">Self-tie & draped collar</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-k">Recommended Bottoms:</span>
                    <span className="spec-v">Wide-leg Slit Pants or tailored skirt</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-k">Drape Retention:</span>
                    <span className="spec-v">Natural friction hold, no pins</span>
                  </div>
                </div>

                <a href="#order-configurator" className="sidebar-cta-link">
                  <Button variant="primary" size="default" fullWidth>
                    MAKE THIS PIECE YOURS →
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Made-To-Order Configurator Form */}
      <section className="mw-configurator-section" id="order-configurator">
        <div className="container mw-configurator-container">
          <div className="configurator-masthead">
            <span className="conf-eyebrow">CUSTOM ORDER REQUEST</span>
            <h2 className="conf-title">
              Make It <span className="title-italic">Yours.</span>
            </h2>
            <p className="conf-desc">
              Each Multiway Top is individually crafted for you in Kigali. Select your fabric,
              choose your size or submit bespoke measurements, and our atelier will begin drafting.
            </p>
          </div>

          {orderSuccess ? (
            <div className="order-success-card">
              <div className="success-icon">✦</div>
              <h3 className="success-title">Your Order Request Has Been Received</h3>
              <p className="success-text">
                Thank you for choosing intentional fashion. Our Kigali atelier will contact you via WhatsApp
                or email within 24 hours to confirm your fabric swatch selection and custom sizing details.
              </p>
              <div className="success-summary">
                <p><strong>Garment:</strong> Multiway Top ({quantity} {quantity === 1 ? 'piece' : 'pieces'})</p>
                <p><strong>Fabric:</strong> {selectedFabric}</p>
                <p><strong>Sizing:</strong> {selectedSize}</p>
                <p><strong>Total Estimate:</strong> {formatPrice(totalPrice)}</p>
                <p><strong>Production Timeline:</strong> 2–3 weeks</p>
              </div>
              <button
                className="success-reset-btn"
                onClick={() => setOrderSuccess(false)}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleOrderSubmit} className="configurator-form">
              {/* Step 1: Fabric Selection */}
              <div className="form-step-block">
                <div className="step-label-row">
                  <span className="step-badge">STEP 01</span>
                  <h4 className="step-title">Select Fabric & Colorway</h4>
                </div>
                <div className="fabric-options-grid">
                  {product.fabrics.map((fabric) => (
                    <button
                      type="button"
                      key={fabric.name}
                      className={`fabric-option-card ${selectedFabric === fabric.name ? 'fabric-option--selected' : ''}`}
                      onClick={() => setSelectedFabric(fabric.name)}
                    >
                      <span className="fabric-swatch" style={{ backgroundColor: fabric.color }} />
                      <span className="fabric-name">{fabric.name}</span>
                      {selectedFabric === fabric.name && <span className="fabric-check">✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Sizing Selection */}
              <div className="form-step-block">
                <div className="step-label-row">
                  <span className="step-badge">STEP 02</span>
                  <h4 className="step-title">Select Size</h4>
                </div>
                <div className="size-chips-grid">
                  {product.sizes.map((size) => (
                    <button
                      type="button"
                      key={size}
                      className={`size-chip ${selectedSize === size ? 'size-chip--selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Bespoke measurements fields if Custom Sizing chosen */}
                {selectedSize.includes('Custom') && (
                  <div className="bespoke-fields">
                    <p className="bespoke-hint">
                      Enter your measurements in cm or inches (or leave blank and our tailor will assist via WhatsApp):
                    </p>
                    <div className="measurements-inputs">
                      <input
                        type="text"
                        placeholder="Bust (e.g. 88 cm)"
                        value={customBust}
                        onChange={(e) => setCustomBust(e.target.value)}
                        className="conf-input"
                      />
                      <input
                        type="text"
                        placeholder="Waist (e.g. 70 cm)"
                        value={customWaist}
                        onChange={(e) => setCustomWaist(e.target.value)}
                        className="conf-input"
                      />
                      <input
                        type="text"
                        placeholder="Hips (e.g. 96 cm)"
                        value={customHips}
                        onChange={(e) => setCustomHips(e.target.value)}
                        className="conf-input"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Step 3: Quantity Selection */}
              <div className="form-step-block">
                <div className="step-label-row">
                  <span className="step-badge">STEP 03</span>
                  <h4 className="step-title">Select Quantity / Pieces</h4>
                </div>
                <div className="quantity-control-row">
                  <div className="quantity-counter">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="qty-value">{quantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="qty-label">
                    {quantity} {quantity === 1 ? 'Piece' : 'Pieces'} to be hand-cut in Kigali
                  </span>
                </div>
              </div>

              {/* Step 4: Contact & Atelier Notes */}
              <div className="form-step-block">
                <div className="step-label-row">
                  <span className="step-badge">STEP 04</span>
                  <h4 className="step-title">Your Details & Notes</h4>
                </div>
                <div className="client-inputs-grid">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    className="conf-input"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="conf-input"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Number (for Atelier updates) *"
                    className="conf-input"
                  />
                  <input
                    type="text"
                    placeholder="Delivery City / Location (e.g. Kigali, Rwanda)"
                    className="conf-input"
                  />
                </div>
                <textarea
                  rows="3"
                  placeholder="Special requests, sleeve adjustments, or styling questions..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="conf-textarea"
                />
              </div>

              {/* Order Summary & Submit */}
              <div className="form-summary-card">
                <div className="summary-details">
                  <div className="summary-line">
                    <span>Freesia Multiway Top</span>
                    <span>{formatPrice(product.price)} each</span>
                  </div>
                  <div className="summary-line summary-subline">
                    <span>Fabric: {selectedFabric}</span>
                    <span>Size: {selectedSize}</span>
                  </div>
                  <div className="summary-line summary-subline">
                    <span>Quantity: {quantity} {quantity === 1 ? 'piece' : 'pieces'}</span>
                    <span>Atelier Hand-Crafting: Included</span>
                  </div>
                  <div className="summary-divider" />
                  <div className="summary-line summary-total">
                    <span>Estimated Total:</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <p className="summary-terms">
                    Payment is handled securely upon atelier order confirmation. Zero upfront risk.
                  </p>
                </div>

                <div className="order-submit-wrap">
                  <Button variant="primary" size="large" fullWidth type="submit">
                    SUBMIT MADE-TO-ORDER REQUEST ({formatPrice(totalPrice)})
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Garment Details & Care Accordion */}
      <section className="mw-details-section">
        <div className="container mw-details-container">
          <div className="details-column">
            <h3 className="details-col-title">Garment Specifications</h3>
            <ul className="details-bullet-list">
              <li><strong>Construction:</strong> Bias-cut torso with elongated continuous wrap tails</li>
              <li><strong>Hardware:</strong> 100% fabric-based; zero zippers, snaps, or plastic hardware</li>
              <li><strong>Weight:</strong> Ultra-lightweight drape, travel-friendly packability</li>
              <li><strong>Seam Quality:</strong> Encased French seams throughout for interior skin comfort</li>
              <li><strong>Origin:</strong> Handcrafted in Kigali, Rwanda</li>
            </ul>
          </div>

          <div className="details-column">
            <h3 className="details-col-title">Fabric & Care</h3>
            <ul className="details-bullet-list">
              <li><strong>Terracotta Sateen:</strong> Hand wash in cold water with mild organic detergent</li>
              <li><strong>Drying:</strong> Never wring or tumble dry; lay flat in gentle shade</li>
              <li><strong>Ironing:</strong> Low-temperature steam or press on reverse side</li>
              <li><strong>Storage:</strong> Fold loosely or suspend on padded hangers away from direct sunlight</li>
              <li><strong>Longevity:</strong> Natural fibers soften with age, enhancing drape over time</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
