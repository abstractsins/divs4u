'use client';

import { useEffect } from 'react';
import BootName from './BootName';
import styles from './Splash.module.css';

import SplashSubTitles from './SplashSubTitles';

export default function Splash() {
  // Fade the global scanlines over the first viewport
  useEffect(() => {
    const update = () => {
      const vh = Math.max(1, window.innerHeight);
      const y = window.scrollY || 0;
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

  // Start lines after the name finishes booting
  const NAME = '> Daniel Berlin';

  return (
    <>
      <div className={styles['splash-container']}>
        <BootName />
        <SplashSubTitles name={NAME}/>
      </div>

      {/* Fixed overlay that fades out smoothly */}
      <div className={styles.scanlines} aria-hidden="true" />
    </>
  );
}
