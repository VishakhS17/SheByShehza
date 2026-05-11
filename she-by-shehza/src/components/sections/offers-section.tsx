"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

const offerings = [
  {
    title: "Complimentary Clarity Call",
    description:
      "A gentle, confidential ~45 minutes to share what feels heavy, ask anything that's on your mind, and sense whether this space is the right fit - no pressure, just honest conversation.",
    tag: "Start here · Free",
    featured: true,
  },
  {
    title: "1:1 Coaching",
    description:
      "A deeply safe space paired with compassionate structure for steady personal growth.",
    tag: "Coaching",
    featured: false,
  },
  {
    title: "Workshops",
    description:
      "Gentle group circles for connection, guided reflection, and shared emotional clarity.",
    tag: "Group",
    featured: false,
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

const PACKAGE_COUNT = coachingPackages.length;
const CAROUSEL_TRACK_WIDTH = `${PACKAGE_COUNT * 100}%`;

function ServiceCard({
  title,
  description,
  tag,
  featured,
  children,
}: {
  title: string;
  description: string;
  tag: string;
  featured: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={`rounded-[2px] border p-6 ${
        featured
          ? "border-gold bg-[#fefaf4]"
          : "border-card-border bg-white"
      }`}
    >
      <p className="font-inter text-[9px] font-medium uppercase tracking-[0.14em] text-gold">
        {tag}
      </p>
      <h3 className="mt-3 font-cormorant text-xl font-semibold text-text-dark">
        {title}
      </h3>
      <div className="mt-3 font-inter text-base font-light leading-[1.85] text-text-body md:text-[17px]">
        {children ?? <p>{description}</p>}
      </div>
    </div>
  );
}

function PackagesCarousel({
  expanded,
  slide,
  setSlide,
}: {
  expanded: boolean;
  slide: number;
  setSlide: Dispatch<SetStateAction<number>>;
}) {
  const go = useCallback((delta: number) => {
    setSlide((s) => (s + delta + PACKAGE_COUNT) % PACKAGE_COUNT);
  }, [setSlide]);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, expanded]);

  return (
    <div
      className="rounded-[2px] border border-card-border bg-white"
      aria-hidden={!expanded}
    >
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.36,1)] motion-reduce:transition-none"
            style={{
              width: CAROUSEL_TRACK_WIDTH,
              transform: `translateX(calc(-${slide} * 100% / ${PACKAGE_COUNT}))`,
            }}
          >
            {coachingPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="w-1/3 shrink-0 px-14 py-8 md:px-16 md:py-9"
              >
                <p className="font-inter text-[9px] font-medium uppercase tracking-[0.14em] text-gold">
                  Packages
                </p>
                <p className="mt-3 font-cormorant text-xl font-semibold text-text-dark">
                  {pkg.title}
                </p>
                <p className="mt-3 font-inter text-base font-light leading-[1.85] text-text-body md:text-[17px]">
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="absolute left-1 top-1/2 z-[1] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[2px] border border-gold-light bg-bg-primary/95 text-gold transition-opacity hover:opacity-90 md:left-2 md:h-9 md:w-9"
          aria-label="Previous package"
          onClick={() => go(-1)}
        >
          <span className="sr-only">Previous</span>
          <span aria-hidden className="text-lg leading-none">
            ‹
          </span>
        </button>
        <button
          type="button"
          className="absolute right-1 top-1/2 z-[1] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[2px] border border-gold-light bg-bg-primary/95 text-gold transition-opacity hover:opacity-90 md:right-2 md:h-9 md:w-9"
          aria-label="Next package"
          onClick={() => go(1)}
        >
          <span className="sr-only">Next</span>
          <span aria-hidden className="text-lg leading-none">
            ›
          </span>
        </button>
      </div>

      <div
        className="flex items-center justify-center gap-2 border-t border-card-border py-4"
        role="tablist"
        aria-label="Coaching packages"
      >
        {coachingPackages.map((pkg, index) => (
          <button
            key={pkg.title}
            type="button"
            role="tab"
            aria-selected={index === slide}
            aria-label={`${pkg.title}`}
            className={`h-2 rounded-full transition-[width,background-color] duration-300 ease-out ${
              index === slide ? "w-8 bg-gold" : "w-2 bg-dot-inactive"
            }`}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export function OffersSection() {
  const [packagesExpanded, setPackagesExpanded] = useState(false);
  const [toggleBusy, setToggleBusy] = useState(false);
  const [slide, setSlide] = useState(0);
  const busyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (busyTimerRef.current !== null) {
        window.clearTimeout(busyTimerRef.current);
      }
    };
  }, []);

  const togglePackages = () => {
    if (toggleBusy) return;

    if (packagesExpanded) {
      setToggleBusy(true);
      setSlide(0);
      setPackagesExpanded(false);
      const reducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const ms = reducedMotion ? 0 : 520;
      if (busyTimerRef.current !== null) {
        window.clearTimeout(busyTimerRef.current);
      }
      busyTimerRef.current = window.setTimeout(() => {
        busyTimerRef.current = null;
        setToggleBusy(false);
      }, ms);
    } else {
      setPackagesExpanded(true);
    }
  };

  const clarity = offerings[0];
  const coaching = offerings[1];
  const workshops = offerings[2];

  return (
    <section id="services" className="bg-bg-primary">
      <div className="section-shell">
        <div className="text-center md:text-left">
          <span className="eyebrow">What She Offers</span>
          <h2 className="font-cormorant text-[28px] font-semibold text-text-dark md:text-[30px]">
            Support that meets you where you are.
          </h2>
        </div>

        <div className="mt-12 grid gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ServiceCard
              title={clarity.title}
              description={clarity.description}
              tag={clarity.tag}
              featured={clarity.featured}
            />
            <ServiceCard
              title={coaching.title}
              description={coaching.description}
              tag={coaching.tag}
              featured={coaching.featured}
            >
              <p>
                {coaching.description}{" "}
                <button
                  type="button"
                  className="font-inter text-base font-normal leading-[1.85] text-gold underline decoration-gold/40 underline-offset-2 hover:decoration-gold disabled:cursor-not-allowed disabled:opacity-50 md:text-[17px]"
                  aria-expanded={packagesExpanded}
                  disabled={toggleBusy}
                  onClick={togglePackages}
                >
                  {packagesExpanded ? "Read less" : "Read more"}
                </button>
              </p>
            </ServiceCard>
          </div>

          <div
            className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
              packagesExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0">
              <PackagesCarousel
                expanded={packagesExpanded}
                slide={slide}
                setSlide={setSlide}
              />
            </div>
          </div>

          <ServiceCard
            title={workshops.title}
            description={workshops.description}
            tag={workshops.tag}
            featured={workshops.featured}
          />
        </div>
      </div>
    </section>
  );
}
