import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, formatPrice } from '../data/products';
import './CollectionsPage.css';

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Derive unique categories from products
  const categories = ['all', ...new Set(products.map(p => p.collection))];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.collection === activeFilter);

  return (
    <div className="collections-page">
      {/* Editorial Hero — Lookbook Style */}
      <section className="coll-hero">
        <div className="container coll-hero-container">
          <span className="coll-kicker">✦ CURATED SILHOUETTES · COLLECTION</span>
          <h1 className="coll-hero-heading">
            THE FREESIA <br />
            <span className="heading-italic">COLLECTIONS.</span>
          </h1>
          <p className="coll-creed">Every piece drafted for movement, versatility, and made-to-order longevity.</p>
          <div className="coll-accent-rule" />
        </div>
      </section>

      {/* Main Catalog Section with explicit top & bottom spacing */}
      <section className="coll-catalog-section">
        <div className="container coll-container">
          {/* Filter Pills */}
          <div className="coll-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`coll-filter-pill ${activeFilter === cat ? 'coll-filter-pill--active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat === 'all' ? 'All Pieces' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="coll-products-grid">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              className="coll-product-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <Link
                to={product.isMultiway ? '/multiway' : `/product/${product.slug}`}
                className="coll-card-media-link"
              >
                <div className="coll-card-media">
                  <img
                    src={product.heroImage}
                    alt={product.name}
                    className="coll-card-img"
                  />
                  {product.isMultiway && (
                    <span className="coll-card-pill">✦ 5 WAYS TO WEAR</span>
                  )}
                  <div className="coll-card-hover-overlay">
                    <span>EXPLORE GARMENT →</span>
                  </div>
                </div>
              </Link>

              <div className="coll-card-info">
                <div className="coll-card-topline">
                  <span className="coll-card-col-label">{product.collection.toUpperCase()}</span>
                  <span className="coll-card-order-tag">MADE TO ORDER</span>
                </div>

                <h3 className="coll-card-title">
                  <Link to={product.isMultiway ? '/multiway' : `/product/${product.slug}`}>
                    {product.name}
                  </Link>
                </h3>

                <p className="coll-card-desc">{product.shortDescription}</p>

                <div className="coll-card-footer">
                  <span className="coll-card-price">{formatPrice(product.price)}</span>
                  <div className="coll-swatches">
                    {product.fabrics.map((f, i) => (
                      <span
                        key={i}
                        className="coll-swatch"
                        style={{ backgroundColor: f.color }}
                        title={f.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
}
