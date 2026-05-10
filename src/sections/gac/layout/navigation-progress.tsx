"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

export function NavigationProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const visibleRef = useRef(false);
  const hideTimer = useRef<number | null>(null);
  const tickTimer = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    if (tickTimer.current) {
      window.clearInterval(tickTimer.current);
      tickTimer.current = null;
    }
  }, []);

  const start = useCallback(() => {
    clearTimers();
    visibleRef.current = true;
    setVisible(true);
    setProgress(18);
    tickTimer.current = window.setInterval(() => {
      setProgress((current) => Math.min(current + (current < 75 ? 12 : 3), 92));
    }, 180);
  }, [clearTimers]);

  const done = useCallback(() => {
    if (!visibleRef.current) {
      return;
    }
    if (tickTimer.current) {
      window.clearInterval(tickTimer.current);
      tickTimer.current = null;
    }
    setProgress(100);
    hideTimer.current = window.setTimeout(() => {
      visibleRef.current = false;
      setVisible(false);
      setProgress(0);
    }, 260);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (isModifiedClick(event)) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      const targetAttr = anchor.getAttribute("target");

      if (!href || href.startsWith("#") || targetAttr === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      const nextUrl = new URL(href, window.location.href);

      if (nextUrl.origin !== window.location.origin || nextUrl.pathname === window.location.pathname) {
        return;
      }

      start();
    };

    window.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", start);

    return () => {
      window.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", start);
      clearTimers();
    };
  }, [clearTimers, start]);

  useEffect(() => {
    const completeTimer = window.setTimeout(done, 80);

    return () => window.clearTimeout(completeTimer);
  }, [done, pathname]);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-[80] h-[3px] overflow-hidden bg-transparent transition-opacity duration-200 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden="true"
    >
      <div
        className="h-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)] transition-[width] duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
