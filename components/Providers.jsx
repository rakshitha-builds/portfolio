'use client';

import { MotionConfig } from 'framer-motion';
import CustomCursor from './CustomCursor';

// Respect reduced-motion for every framer-motion animation, and mount the circle cursor once.
export default function Providers({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <CustomCursor />
    </MotionConfig>
  );
}
