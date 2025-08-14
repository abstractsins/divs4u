'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './TypeBox.module.css';

type Props = {
    active: boolean;
    data: string[];
    speed?: number;      // ms per char
    linePause?: number;  // ms between lines
    minHeight?: number;  // px
    initialIdle?: number;
};

export default function TypeBox({
    active,
    data,
    speed = 45,
    linePause = 650,
    minHeight = 15,
    initialIdle = 3500,
}: Props) {
    const boxRef = useRef<HTMLDivElement>(null);
    const linesRef = useRef<HTMLDivElement>(null);
    const MAX_LINES = 6;

    // live text & cursor
    const [text, setText] = useState('');
    const [cursorOn, setCursorOn] = useState(true);

    // computed cap = “space from box top to parent bottom”
    const capRef = useRef<number>(minHeight);
    // remembers the highest height ever used so we never shrink
    const lastHeightRef = useRef<number>(minHeight);

    // compute how tall we’re allowed to be (to the bottom of parent)
    const computeCap = () => {
        const box = boxRef.current;
        if (!box || !box.parentElement) return;

        const parent = box.parentElement as HTMLElement;

        const parentRect = parent.getBoundingClientRect();
        const boxRect = box.getBoundingClientRect();

        const parentCS = getComputedStyle(parent);
        const parentPadBottom = parseFloat(parentCS.paddingBottom) || 0;

        // space available from the top of the box to the inner bottom of parent
        const available = Math.max(
            minHeight,
            parentRect.bottom - parentPadBottom - boxRect.top
        );

        capRef.current = available;
        // if we already grew beyond min, keep that height (monotonic)
        if (lastHeightRef.current > available) {
            lastHeightRef.current = available;
        }
    };

    // set height (monotonic) and scroll if overflowing
    const applyHeight = () => {
        const box = boxRef.current;
        const inner = linesRef.current;
        if (!box || !inner) return;

        const cs = getComputedStyle(box);
        const padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
        const borderY =
            parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

        const content = inner.scrollHeight + padY + borderY;
        const cap = capRef.current;

        // desired height = min(content, cap), but never less than we've already grown to
        const desired = Math.max(lastHeightRef.current, Math.min(content, cap));
        lastHeightRef.current = desired;

        box.style.height = `${desired}px`;

        // if content exceeds our cap, keep newest text visible
        if (content > cap) {
            box.scrollTop = box.scrollHeight;
        }
    };
    const trimToLines = (s: string, max = MAX_LINES) => {
        // split, drop the trailing "" that comes after a final '\n'
        const parts = s.split('\n');
        if (parts[parts.length - 1] === '') parts.pop();
        const kept = parts.slice(Math.max(0, parts.length - max));
        return kept.join('\n') + '\n'; // keep a single trailing newline
    };


    // observe parent & content size; recompute cap and apply height after paint
    useEffect(() => {
        const box = boxRef.current;
        if (!box) return;

        computeCap();
        applyHeight();

        const parent = box.parentElement as HTMLElement | null;
        const inner = linesRef.current;

        const ro = new ResizeObserver(() => {
            requestAnimationFrame(() => {
                computeCap();
                applyHeight();
            });
        });

        if (parent) ro.observe(parent);
        if (inner) ro.observe(inner);
        ro.observe(document.documentElement); // handle viewport resize

        const onScroll = () => {
            // parent might move (sticky headers, layout shifts)
            requestAnimationFrame(() => {
                computeCap();
                applyHeight();
            });
        };
        window.addEventListener('resize', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            ro.disconnect();
            window.removeEventListener('resize', onScroll);
            window.removeEventListener('scroll', onScroll);
        };
    }, [minHeight]);

    // cursor blink
    useEffect(() => {
        const id = setInterval(() => setCursorOn(v => !v), 550);
        return () => clearInterval(id);
    }, []);

    // typewriter loop (kept simple; height is handled by observers)
    useEffect(() => {
        if (!active) return;
        let cancelled = false;
        const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
        const prefersReduced =
            typeof window !== 'undefined' &&
            window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

        const typeOneLine = async (raw: string) => {
            const line = `> ${raw}`;

            if (prefersReduced) {
                setText(t => trimToLines(t + line + '\n'));
                requestAnimationFrame(applyHeight);
                await wait(300);
                return;
            }

            for (let i = 0; i < line.length && !cancelled; i++) {
                setText(t => t + line[i]);
                requestAnimationFrame(applyHeight);
                await wait(speed);
            }
            setText(t => trimToLines(t + '\n'));
            requestAnimationFrame(applyHeight);
            await wait(linePause);
        };

        (async () => {
            // ⬇️ idle first
            await wait(initialIdle);
            if (cancelled) return;

            let i = 0;
            while (!cancelled) {
                await typeOneLine(data[i % data.length] + ';');
                i++;
            }
        })();

        return () => { cancelled = true; };
    }, [active, data, speed, linePause, initialIdle]);


    return (
        <div
            ref={boxRef}
            className={`about-fade typebox-container ${styles['bio-skills-typebox-container']}`}
            aria-live="polite"
        >
            <div ref={linesRef} className={`font-mono ${styles.lines}`}>
                {text}
                <span
                    className={`font-mono ${styles.cursor}`}
                    aria-hidden="true"
                    style={{ opacity: cursorOn ? 1 : 0 }}
                />
            </div>
        </div>
    );
}
