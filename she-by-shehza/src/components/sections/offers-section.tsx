"use client";

import { useEffect, useState } from "react";

const offerings = [
  {
    title: "Complimentary Clarity Call",
    description:
      "A gentle, confidential ~45 minutes to share what feels heavy, ask anything that's on your mind, and sense whether this space is the right fit - no pressure, just honest conversation.",
  },
  {
    title: "1:1 Coaching",
    description:
      "A deeply safe space paired with compassionate structure for steady personal growth.",
  },
  {
    title: "Workshops",
    description:
      "Gentle group circles for connection, guided reflection, and shared emotional clarity.",
  },
] as const;

const coachingPackages = [
  {
    title: "4 sessions",
    description:
      "A focused rhythm to slow the spiral, name what matters most right now, and walk away with gentle practices you can actually keep when life feels loud.",
  },
  {
    title: "6 sessions",
    description:
      "Space to notice patterns with compassion, practice small boundaries in real time, and rebuild trust in your voice so showing up for yourself stops feeling like an afterthought.",
  },
  {
    title: "8 sessions",
    description:
      "Deeper continuity for rewriting the inner narrative, integrating rest and self-honesty, and carrying forward rituals of care that last beyond our work together.",
  },
] as const;

const PACKAGE_ANIM_MS = 700;
const PACKAGE_STAGGER_MS = 90;

const cardClassName =
  "soft-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(82,63,63,0.11)]";

const accentLine = (
  <span className="inline-block h-1.5 w-12 rounded-full bg-[linear-gradient(to_right,_rgba(220,166,173,0.9),_rgba(198,172,121,0.65))]" />
);

export function OffersSection() {
  const [packagesVisible, setPackagesVisible] = useState(false);
  const [packagesExiting, setPackagesExiting] = useState(false);

  useEffect(() => {
    if (!packagesExiting) return;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lastStartDelay =
      (coachingPackages.length - 1) * PACKAGE_STAGGER_MS;
    const settleAfter = PACKAGE_ANIM_MS + lastStartDelay + 24;

    const ms = reducedMotion ? 0 : settleAfter;

    const id = window.setTimeout(() => {
      setPackagesVisible(false);
      setPackagesExiting(false);
    }, ms);

    return () => window.clearTimeout(id);
  }, [packagesExiting]);

  const togglePackages = () => {
    if (packagesExiting) return;

    if (packagesVisible) {
      setPackagesExiting(true);
    } else {
      setPackagesVisible(true);
    }
  };

  return (
    <section className="section-shell">
      <div className="text-center">
        <p className="text-xs tracking-[0.16em] text-foreground/65 uppercase">
          What She Offers
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl">
          Support that meets you where you are.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {offerings.map((item) =>
          item.title === "1:1 Coaching" ? (
            <article key={item.title} className={cardClassName}>
              {accentLine}
              <h3 className="mt-4 text-2xl">{item.title}</h3>
              <p className="mt-3 text-foreground/80">
                {item.description}{" "}
                <button
                  type="button"
                  className="font-normal text-foreground underline decoration-foreground/30 underline-offset-[5px] transition hover:decoration-foreground/55 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-expanded={packagesVisible}
                  disabled={packagesExiting}
                  onClick={togglePackages}
                >
                  {packagesVisible ? "Read less" : "Read more"}
                </button>
              </p>
            </article>
          ) : (
            <article key={item.title} className={cardClassName}>
              {accentLine}
              <h3 className="mt-4 text-2xl">{item.title}</h3>
              <p className="mt-3 text-foreground/80">{item.description}</p>
            </article>
          ),
        )}

        {packagesVisible
          ? coachingPackages.map((pkg, index) => {
              const delayMs = packagesExiting
                ? (coachingPackages.length - 1 - index) * PACKAGE_STAGGER_MS
                : index * PACKAGE_STAGGER_MS;

              return (
                <article
                  key={pkg.title}
                  className={`${cardClassName} ${
                    packagesExiting
                      ? "animate-gentle-fall"
                      : "animate-gentle-rise"
                  }`}
                  style={{ animationDelay: `${delayMs}ms` }}
                >
                  {accentLine}
                  <h3 className="mt-4 text-2xl">{pkg.title}</h3>
                  <p className="mt-3 text-foreground/80">{pkg.description}</p>
                </article>
              );
            })
          : null}
      </div>
    </section>
  );
}
