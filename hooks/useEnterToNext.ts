'use client';
import { useEffect, useMemo } from 'react';

function getHeaderOffset() {
    // account for sticky header height if you set --header-h in CSS
    const v = getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '0px';
    return `-${parseFloat(v) || 0}px 0px 0px 0px`;
}

export function useEnterToNext(sectionId: string, nextId: string, threshold = 0.55) {
    useEffect(() => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        let active = false;

        const io = new IntersectionObserver(
            ([entry]) => { active = entry.isIntersecting; },
            { threshold, root: null, rootMargin: getHeaderOffset() }
        );
        io.observe(section);

        const onKey: EventListener = (evt) => {
            if (!(evt instanceof KeyboardEvent)) return;

            // ignore when typing
            const t = evt.target as HTMLElement | null;
            if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;

            if (!active || evt.key !== 'Enter') return;

            const next = document.getElementById(nextId);
            if (next) {
                evt.preventDefault();
                next.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, '', `#${nextId}`);
            }
        };

        const ac = new AbortController();
        window.addEventListener('keydown', onKey, { signal: ac.signal });
        return () => { io.disconnect(); ac.abort(); };
    }, [sectionId, nextId, threshold]);
}
