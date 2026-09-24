import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import './LookbookPage.css';

export default function LookbookPage() {
  const editorialPlates = [
    {
      plate: '01',
      title: 'The Architecture of the Drape',
      caption: 'Continuous terracotta silk falling along the natural contours of the collarbone.',
      image: '/images/hero.jpg',
      aspect: 'tall',
      quote: '“To wear a garment five different ways is to understand fabric as living sculpture.”'
    },
    {
      plate: '02',
      title: 'The Linen Grounding',
      caption: 'Pure washed sand linen tailored with generous width for unencumbered strides.',
      image: '/images/freesia-set.jpg',
      aspect: 'wide',
      quote: null
    },
    {
      plate: '03',
      title: 'Asymmetry in Motion',
      caption: 'The off-shoulder diagonal fold captures light across Rwandan architectural concrete.',
      image: '/images/look-4.jpg',
      aspect: 'tall',
      quote: '“Fluidity is not the absence of form; it is form that responds to the spirit.”'
    },
    {
      plate: '04',
      title: 'The Sculpted Tie',
      caption: 'A front waist knot anchors the crossover wrap without buttons or snaps.',
      image: '/images/look-2.jpg',
      aspect: 'square',
      quote: null
    },
    {
      plate: '05',
      title: 'Wings in Stillness',
      caption: 'The dramatic high-collar statement drape extended in Kigali morning breeze.',
      image: '/images/look-5.jpg',
      aspect: 'tall',
      quote: '“One piece. Unbound.”'
    },
    {
      plate: '06',
      title: 'The Quiet Origin',
      caption: 'Symmetrical tank form—the essential foundation that started the multiway movement.',
      image: '/images/look-1.jpg',
      aspect: 'wide',
      quote: null
    }
  ];

  return (
    <div className="lookbook-page">
      {/* Editorial Title Block */}
      <section className="lb-hero">
        <div className="container lb-hero-container">
          <span className="lb-season-kicker">✦ EDITORIAL PUBLICATION · VOL 01</span>
          <h1 className="lb-hero-heading">
            THE FREESIA <br />
            <span className="heading-italic">PORTFOLIO.</span>
          </h1>
          <p className="lb-creed">Fluid. Intentional. Unbound.</p>
          <div className="lb-accent-rule" />
        </div>
      </section>

      {/* Editorial Spread Gallery */}
      <section className="lb-gallery-section">
        <div className="container">
          <div className="lb-spread-column">
            {editorialPlates.map((item, idx) => (
              <motion.div
                key={item.plate}
                className={`lb-plate-item lb-plate--${item.aspect} ${idx % 2 === 1 ? 'lb-plate--reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="lb-plate-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="lb-plate-img"
                    loading="lazy"
                  />
                  <span className="lb-plate-number">PLATE {item.plate}</span>
                </div>

                <div className="lb-plate-text">
                  <span className="lb-plate-sub">FOLIO N° 0{idx + 1}</span>
                  <h3 className="lb-plate-title">{item.title}</h3>
                  <p className="lb-plate-caption">{item.caption}</p>

                  {item.quote && (
                    <blockquote className="lb-plate-quote">
                      {item.quote}
                    </blockquote>
                  )}

                  <Link to="/multiway" className="lb-plate-cta">
                    <span>EXPLORE THIS SILHOUETTE →</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* End of Lookbook Invitation */}
          <div className="lb-footer-invitation">
            <h2 className="lb-invitation-title">Carry the Editorial With You</h2>
            <p className="lb-invitation-desc">
              Every garment showcased in this portfolio is crafted made-to-order in Kigali.
            </p>
            <Link to="/multiway">
              <Button variant="primary" size="large">
                EXPERIENCE THE MULTIWAY TOP (35,000 RWF)
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
