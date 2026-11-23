'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// Circle cursor: a small dot that tracks the pointer plus a ring that trails it.
// The ring grows over links and buttons, and steps aside over form fields.
// Only enabled for devices with a precise pointer (mouse/trackpad), never on touch.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState('default'); // default | link | text
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 34, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 420, damping: 34, mass: 0.35 });
  const ringX = reduce ? x : sx;
  const ringY = reduce ? y : sy;

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) return;
    setEnabled(true);
    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target;
      if (!t || !t.closest) return;
      if (t.closest('input, textarea, select')) setMode('text');
      else if (t.closest('a, button, label, summary, [role="button"]')) setMode('link');
      else setMode('default');
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('pointermove', onMove, { passive: true });
    root.addEventListener('mouseleave', onLeave);
    root.addEventListener('mouseenter', onEnter);
    return () => {
      window.removeEventListener('pointermove', onMove);
      root.removeEventListener('mouseleave', onLeave);
      root.removeEventListener('mouseenter', onEnter);
      root.classList.remove('has-custom-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;
  const show = visible && mode !== 'text';

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[3000]">
      <motion.div style={{ x: ringX, y: ringY }} className="absolute left-0 top-0">
        <motion.div
          animate={{ scale: mode === 'link' ? 1.75 : 1, opacity: show ? 1 : 0 }}
          transition={{ duration: 0.18 }}
          className={`-ml-[18px] -mt-[18px] h-9 w-9 rounded-full border-[1.5px] border-[#3d8bfd] ${
            mode === 'link' ? 'bg-[#3d8bfd]/15' : ''
          }`}
        />
      </motion.div>
      <motion.div style={{ x, y }} className="absolute left-0 top-0">
        <motion.div
          animate={{ opacity: show ? 1 : 0, scale: mode === 'link' ? 0.6 : 1 }}
          transition={{ duration: 0.18 }}
          className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-[#3d8bfd]"
        />
      </motion.div>
    </div>
  );
}
