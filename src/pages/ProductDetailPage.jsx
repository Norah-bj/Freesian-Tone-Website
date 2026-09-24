import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { products, formatPrice } from '../data/products';
import Button from '../components/ui/Button';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/collections" replace />;
  }

  // If Multiway top, redirect to dedicated experience
  if (product.isMultiway && product.slug === 'multiway-top') {
    return <Navigate to="/multiway" replace />;
  }

  const [selectedFabric, setSelectedFabric] = useState(product.fabrics[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [orderSent, setOrderSent] = useState(false);

  const otherProducts = products.filter((p) => p.id !== product.id);
  const totalPrice = product.price * quantity;

  return (
    <div className="pdp-page">
      <div className="container pdp-container">
        {/* Breadcrumb */}
        <div className="pdp-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/collections">Collections</Link>
          <span>/</span>
          <span className="crumb-active">{product.name}</span>
        </div>

        <div className="pdp-grid">
          {/* Media Column */}
          <div className="pdp-media-col">
            <div className="pdp-main-image-frame">
              <img
                src={product.heroImage}
                alt={product.name}
                className="pdp-main-img"
              />
              <span className="pdp-artisan-tag">MADE IN KIGALI · ATELIER DIRECT</span>
            </div>

            {/* Clickable mini thumbnails of other products */}
            <div className="pdp-other-thumbs-wrap">
              <span className="pdp-thumbs-label">✦ EXPLORE OTHER SILHOUETTES:</span>
              <div className="pdp-other-thumbs">
                {otherProducts.map((p) => (
                  <Link
                    key={p.id}
                    to={p.isMultiway ? '/multiway' : `/product/${p.slug}`}
                    className="pdp-thumb-item"
                    title={`View ${p.name}`}
                  >
                    <div className="pdp-thumb-img-wrap">
                      <img src={p.heroImage} alt={p.name} className="pdp-thumb-img" />
                      {p.isMultiway && <span className="pdp-thumb-badge">5-WAY</span>}
                    </div>
                    <div className="pdp-thumb-info">
                      <span className="pdp-thumb-name">{p.name}</span>
                      <span className="pdp-thumb-price">{formatPrice(p.price)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Details & Config Column */}
          <div className="pdp-info-col">
            <span className="pdp-col-label">✦ {product.collection.toUpperCase()} COLLECTION</span>
            <h1 className="pdp-title">{product.name}</h1>
            <p className="pdp-price">{formatPrice(product.price)}</p>

            <p className="pdp-description">{product.description}</p>

            {orderSent ? (
              <div className="pdp-success-card">
                <span className="pdp-success-check">✦</span>
                <h4>Order Request Sent</h4>
                <p>Our Kigali atelier will contact you to confirm sizing & fabric availability.</p>
                <button
                  className="pdp-reset-btn"
                  onClick={() => setOrderSent(false)}
                >
                  Make another selection
                </button>
              </div>
            ) : (
              <div className="pdp-form-wrap">
                {/* Fabric Selector */}
                <div className="pdp-section-block">
                  <span className="pdp-section-label">SELECT FABRIC:</span>
                  <div className="pdp-fabric-chips">
                    {product.fabrics.map((f) => (
                      <button
                        key={f.name}
                        className={`pdp-fabric-btn ${selectedFabric === f.name ? 'pdp-fabric-btn--active' : ''}`}
                        onClick={() => setSelectedFabric(f.name)}
                      >
                        <span className="swatch" style={{ backgroundColor: f.color }} />
                        <span>{f.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                <div className="pdp-section-block">
                  <div className="pdp-size-header">
                    <span className="pdp-section-label">SELECT SIZE:</span>
                    <a href="/multiway#order-configurator" className="size-guide-link">Bespoke Fitting Guidance →</a>
                  </div>
                  <div className="pdp-size-chips">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        className={`pdp-size-btn ${selectedSize === s ? 'pdp-size-btn--active' : ''}`}
                        onClick={() => setSelectedSize(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="pdp-section-block">
                  <span className="pdp-section-label">QUANTITY / PIECES:</span>
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
                      {quantity} {quantity === 1 ? 'Piece' : 'Pieces'} ({formatPrice(totalPrice)})
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pdp-actions">
                  <Button
                    variant="primary"
                    size="large"
                    fullWidth
                    onClick={() => setOrderSent(true)}
                  >
                    REQUEST MADE-TO-ORDER ({formatPrice(totalPrice)})
                  </Button>
                </div>
              </div>
            )}

            {/* Atelier Meta */}
            <div className="pdp-atelier-meta">
              <div className="meta-row">
                <span className="meta-icon">✦</span>
                <div>
                  <strong>Made to Order in Rwanda:</strong> 2–3 weeks crafting window with zero factory waste.
                </div>
              </div>
              <div className="meta-row">
                <span className="meta-icon">✦</span>
                <div>
                  <strong>Care Instruction:</strong> {product.care.join(' · ')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <section className="pdp-related-section">
          <div className="pdp-related-header">
            <span className="pdp-related-kicker">✦ COMPLETE THE LOOK</span>
            <h2 className="pdp-related-title">
              You May Also <span className="title-italic">Like</span>
            </h2>
            <p className="pdp-related-sub">
              Crafted in Kigali to be layered, mixed, and adapted seamlessly across every season.
            </p>
          </div>

          <div className="pdp-related-grid">
            {otherProducts.map((relProduct) => (
              <div key={relProduct.id} className="pdp-related-card">
                <Link
                  to={relProduct.isMultiway ? '/multiway' : `/product/${relProduct.slug}`}
                  className="pdp-related-media"
                >
                  <img
                    src={relProduct.heroImage}
                    alt={relProduct.name}
                    className="pdp-related-img"
                  />
                  {relProduct.isMultiway && (
                    <span className="pdp-related-pill">✦ 5 WAYS TO WEAR</span>
                  )}
                  <div className="pdp-related-hover-overlay">
                    <span>EXPLORE PIECE →</span>
                  </div>
                </Link>

                <div className="pdp-related-info">
                  <div className="pdp-related-topline">
                    <span className="pdp-related-cat">{relProduct.collection.toUpperCase()}</span>
                    <span className="pdp-related-tag">MADE TO ORDER</span>
                  </div>
                  <h3 className="pdp-related-name">
                    <Link to={relProduct.isMultiway ? '/multiway' : `/product/${relProduct.slug}`}>
                      {relProduct.name}
                    </Link>
                  </h3>
                  <div className="pdp-related-footer">
                    <span className="pdp-related-price">{formatPrice(relProduct.price)}</span>
                    <div className="pdp-related-swatches">
                      {relProduct.fabrics.map((f, i) => (
                        <span
                          key={i}
                          className="pdp-related-swatch"
                          style={{ backgroundColor: f.color }}
                          title={f.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
