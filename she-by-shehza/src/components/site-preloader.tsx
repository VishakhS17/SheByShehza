"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SitePreloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timers: number[] = [];

    const finish = () => {
      setExiting(true);
      timers.push(
        window.setTimeout(() => {
          setVisible(false);
        }, 520),
      );
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      timers.push(window.setTimeout(finish, 280));
      return () => timers.forEach((id) => window.clearTimeout(id));
    }

    const minDisplayMs = 1100;
    const t0 = performance.now();

    const scheduleExit = () => {
      const elapsed = performance.now() - t0;
      const remaining = Math.max(0, minDisplayMs - elapsed);
      timers.push(window.setTimeout(finish, remaining));
    };

    if (document.readyState === "complete") {
      scheduleExit();
    } else {
      window.addEventListener("load", scheduleExit, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleExit);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background px-6 transition-opacity duration-500 ease-out ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-busy={!exiting}
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-10">
        <div className="relative h-24 w-80 md:h-28 md:w-[26rem]">
          <Image
            src="/logo.png"
            alt="She by Shehza"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div
          className="h-1 w-56 overflow-hidden rounded-full bg-blush-soft md:w-72"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={exiting ? 100 : undefined}
          aria-label="Loading"
        >
          <div className="animate-preloader-bar h-full w-full origin-left rounded-full bg-blush" />
        </div>
      </div>
    </div>
  );
}
