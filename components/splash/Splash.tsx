'use client';

import { useState, useEffect, useCallback } from 'react';
import BootName from './BootName';
import SplashSubTitles from './SplashSubTitles';
import PowerToggle from './PowerToggle';
import styles from './Splash.module.css';
import InstructionTitle from './InstructionTitle';

import { useInViewport } from '@/hooks/useInViewport';
// import { useRouter } from 'next/router';


export default function Splash() {
  // const app = useRouter();
  const { ref, inView } = useInViewport<HTMLDivElement>({ threshold: 0.5 });

  const [isPowerOn, setPower] = useState(false);
  const [isToggled, setToggle] = useState(false);
  const [hasBooted, setHasBooted] = useState(false);

  const handleToggle = () => {
    setToggle(p => !p);
    setTimeout(() => {
      setPower(prev => {
        const next = !prev;
        if (next) setHasBooted(true); // first time we ever turned on
        return next;
      });
    }, 500);
  };

  const onKey = useCallback((e: KeyboardEvent) => {
    // ignore when typing
    const t = e.target as HTMLElement | null;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;

    if (e.key === 'Enter') {
      e.preventDefault();
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' }); // scroll
        history.pushState(null, '', '#about');                      // update URL
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onKey]);

  // Fade scanlines with scroll, and also fade to 0 when power is off
  useEffect(() => {
    const update = () => {
      const vh = Math.max(1, window.innerHeight);
      const y = window.scrollY || 0;
      const progress = Math.max(0, Math.min(1, 1 - y / vh));
      const alpha = 0.25 * progress * (isPowerOn ? 1 : 0);
      document.documentElement.style.setProperty('--scanlines-alpha', alpha.toFixed(3));
      document.documentElement.setAttribute('data-power', isPowerOn ? 'on' : 'off');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [isPowerOn]);

  const NAME = '> Daniel Berlin';

  return (
    <>
      <div className={styles['splash-container']}>
        <div className={`flex items-center ${styles['toggle-name']}`}>
          <PowerToggle handleToggle={handleToggle} checked={isToggled} />
          {(hasBooted || isPowerOn) && (
            <BootName isPowerOn={isPowerOn} />
          )}
        </div>

        {(hasBooted && isPowerOn) && (
          <>
            <SplashSubTitles isPowerOn={isPowerOn} name={NAME} />
            <div className='flex w-[100%]' ref={ref}>
              <InstructionTitle />
            </div>
          </>
        )}
      </div>

      {/* Fixed overlay that fades out smoothly */}
      <div className={`${styles['scanlines']} ${isPowerOn && styles['active']}`} aria-hidden="true" />
    </>
  );
}
