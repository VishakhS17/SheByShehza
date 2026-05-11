"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "For the first time in years, I felt truly heard. I left each session lighter and more grounded.",
    label: "Working Mom, 32",
  },
  {
    quote:
      "I stopped living in survival mode. I have language for my needs and confidence in my choices now.",
    label: "New Mother, 29",
  },
  {
    quote:
      "This space helped me reconnect with myself without guilt. It felt gentle, practical, and real.",
    label: "Corporate Professional, 36",
  },
];

const SWIPE_MIN_DISTANCE = 48;
const SWIPE_DOMINANCE = 1.15;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [active]);

  const item = testimonials[active];

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start || e.changedTouches.length === 0) return;

    const touch = e.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;

    if (Math.abs(dx) < SWIPE_MIN_DISTANCE) return;
    if (Math.abs(dx) < Math.abs(dy) * SWIPE_DOMINANCE) return;

    const n = testimonials.length;
    if (dx < 0) {
      setActive((i) => (i + 1) % n);
    } else {
      setActive((i) => (i - 1 + n) % n);
    }
  };

  return (
    <section
      id="testimonials"
      className="border-y border-border-blush bg-bg-pink-band"
    >
      <div className="section-shell text-center">
        <span className="eyebrow">Testimonials</span>
        <h2 className="font-cormorant text-[28px] font-semibold text-text-dark md:text-[30px]">
          Words from women who chose themselves.
        </h2>

        <div
          className="touch-pan-y mx-auto mt-14 max-w-3xl text-left"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="group"
          aria-roledescription="carousel"
          aria-label="Swipe or use controls to change testimonial"
        >
          <blockquote className="testimonial-quote">
            <p className="font-cormorant text-[26px] font-normal italic leading-[1.5] text-text-dark">
              {item.quote}
            </p>
            <footer className="mt-8 font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-attribution">
              {item.label}
            </footer>
          </blockquote>
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-[2px] rounded-full transition-[width,background-color] duration-300 ${
                index === active ? "w-8 bg-gold" : "w-5 bg-dot-inactive"
              }`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
