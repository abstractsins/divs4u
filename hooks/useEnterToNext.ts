"use client";
import { useEffect } from "react";

function getHeaderOffset() {
  // account for sticky header height if you set --height-header in CSS
  const v =
    getComputedStyle(document.documentElement).getPropertyValue(
      "--height-header",
    ) || "0px";
  return `-${parseFloat(v) || 0}px 0px 0px 0px`;
}

export function useEnterToNext(
  prevId: string,
  currentId: string,
  nextId: string,
  threshold = 0.25,
) {
  useEffect(() => {
    const section = document.getElementById(currentId);
    if (!section) return;

    let active = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
      },
      { threshold, root: null, rootMargin: getHeaderOffset() },
    );
    io.observe(section);

    const onKey: EventListener = (evt) => {
      if (!(evt instanceof KeyboardEvent)) return;

      // ignore when typing
      const t = evt.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable)
      )
        return;

      if (!active || evt.key !== "Enter") return;

      // Shift+Enter goes backward, Enter goes forward
      const targetId = evt.shiftKey ? prevId : nextId;
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (target) {
        evt.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", `#${targetId}`);
      }
    };

    const ac = new AbortController();
    window.addEventListener("keydown", onKey, { signal: ac.signal });
    return () => {
      io.disconnect();
      ac.abort();
    };
  }, [prevId, currentId, nextId, threshold]);
}
