import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 52 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
    style={{ width: size, height: size, display: 'inline-block' }}
  >
    {/* Логотип – минималистичная AI-голова/мозг в стиле glass */}
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="brain-glass" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9"/>
          <stop offset="80%" stopColor="#246fff" stopOpacity="0.23"/>
          <stop offset="100%" stopColor="#246fff" stopOpacity="0.08"/>
        </radialGradient>
      </defs>
      <ellipse
        cx="26"
        cy="26"
        rx="24"
        ry="20"
        fill="url(#brain-glass)"
        stroke="#246fff"
        strokeWidth="2.5"
      />
      <circle cx="16.5" cy="23" r="2.8" fill="#246fff" fillOpacity="0.65" />
      <circle cx="35.5" cy="21" r="2.2" fill="#246fff" fillOpacity="0.29" />
      <circle cx="32" cy="35" r="2.1" fill="#246fff" fillOpacity="0.29" />
      <circle cx="23.5" cy="33.2" r="2.1" fill="#246fff" fillOpacity="0.29" />
      <path d="M 20 26 Q 24 18 32 26 Q 40 34 26 36 Q 12 38 20 26 Z" stroke="#246fff" strokeWidth="1.1" fill="none" opacity="0.21" />
    </svg>
  </motion.div>
);

export default Logo;
