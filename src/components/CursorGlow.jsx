import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CursorGlow() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const checkMotion = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', checkMotion);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      mediaQuery.removeEventListener('change', checkMotion);
    };
  }, [cursorX, cursorY]);

  if (isReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-google-red/40 blur-md pointer-events-none z-50 flex items-center justify-center hidden md:flex"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <div className="w-2 h-2 rounded-full bg-google-yellow" />
    </motion.div>
  );
}
