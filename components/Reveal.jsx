'use client';

import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, y = 18, className = '', as = 'div', amount = 0.15 }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}
