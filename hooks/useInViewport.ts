// useInViewport.ts
'use client';
import { useEffect, useRef, useState } from 'react';

export function useInViewport<T extends Element>(
    opts: IntersectionObserverInit = { threshold: 0.5 } // 50% visible by default
) {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            opts
        );
        io.observe(el);
        return () => io.disconnect();
    }, [opts]);

    return { ref, inView };
}
