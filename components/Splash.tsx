'use client';

import { useEffect } from 'react';
import BootName from './BootName';
import styles from './Splash.module.css';

export default function Splash() {
  useEffect(() => {
    const update = () => {
      const vh = Math.max(1, window.innerHeight);
      const y = window.scrollY || 0;

      // Fade from 0.25 -> 0 as you scroll the first 100vh
      const progress = Math.max(0, Math.min(1, 1 - y / vh));
      const alpha = 0.25 * progress;
      document.documentElement.style.setProperty('--scanlines-alpha', alpha.toFixed(3));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      <div className={styles['splash-container']}>
        <BootName />
        <div className={styles['sub']}>Full Stack Developer</div>
      </div>

      {/* Fixed overlay that fades out smoothly */}
      <div className={styles.scanlines} aria-hidden="true" />
    </>
  );
}
