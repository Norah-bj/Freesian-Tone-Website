import React from 'react';
import './SectionHeading.css';

export default function SectionHeading({
  caption,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) {
  return (
    <div className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''} ${className}`}>
      {caption && <span className="section-caption">{caption}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
