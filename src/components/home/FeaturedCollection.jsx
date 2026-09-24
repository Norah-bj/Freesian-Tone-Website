import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, formatPrice } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';
import './FeaturedCollection.css';

export default function FeaturedCollection() {
  return (
    <section className="featured-section">
      <div className="container">
        <div className="featured-header-row">
          <SectionHeading
            align="left"
            caption="THE EDIT"
            title="Essential Silhouettes"
            subtitle="Curated garments made to order in Kigali. Engineered for versatility, tailored to your exact measurements."
          />
          <Link to="/collections" className="featured-view-all">
            <span>VIEW ALL PIECES</span>
            <span className="arrow-icon">→</span>
          </Link>
        </div>

        <div className="featured-grid">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              className={`product-card product-card--${idx === 0 ? 'featured-hero' : 'standard'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={product.isMultiway ? '/multiway' : `/product/${product.slug}`} className="product-image-link">
                <div className="product-image-box">
                  <img
                    src={product.heroImage}
                    alt={product.name}
                    className="product-img"
                    loading="lazy"
                  />
                  {product.isMultiway && (
                    <span className="product-badge">
                      ✦ 5 WAYS TO WEAR
                    </span>
                  )}
                  {product.isNew && !product.isMultiway && (
                    <span className="product-badge product-badge--new">
                      NEW ARRIVAL
                    </span>
                  )}
                  <div className="product-overlay-cta">
                    <span className="cta-explore-text">
                      {product.isMultiway ? 'EXPERIENCE MULTIWAY →' : 'EXPLORE PIECE →'}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="product-details">
                <div className="product-meta-row">
                  <span className="product-collection-label">{product.collection.toUpperCase()}</span>
                  <span className="product-order-badge">MADE TO ORDER</span>
                </div>
                <h3 className="product-name">
                  <Link to={product.isMultiway ? '/multiway' : `/product/${product.slug}`}>
                    {product.name}
                  </Link>
                </h3>
                <p className="product-desc-line">{product.shortDescription}</p>
                <div className="product-price-row">
                  <span className="product-price">{formatPrice(product.price)}</span>
                  <div className="product-fabric-dots">
                    {product.fabrics.map((fabric, fIdx) => (
                      <span
                        key={fIdx}
                        className="fabric-color-dot"
                        style={{ backgroundColor: fabric.color }}
                        title={fabric.name}
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
  );
}
