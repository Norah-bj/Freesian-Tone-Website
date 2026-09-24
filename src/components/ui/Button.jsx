/* ============================================
   FREESIA TONE — Button Component
   ============================================ */

import { motion } from 'framer-motion';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  fullWidth = false,
  icon,
  className = '',
  ...props
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    className,
  ].filter(Boolean).join(' ');

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        <span className="btn__text">{children}</span>
        {icon && <span className="btn__icon">{icon}</span>}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} onClick={onClick} {...motionProps} {...props}>
      <span className="btn__text">{children}</span>
      {icon && <span className="btn__icon">{icon}</span>}
    </motion.button>
  );
}
