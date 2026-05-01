import { SiteHeader } from "@/components/sections/site-header";

export function HeroSection() {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          className="absolute left-1/2 top-1/2 h-[118%] min-h-full w-[118%] min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 z-[1] bg-background/22" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top,_rgba(220,166,173,0.22),_transparent_56%)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_85%_20%,_rgba(198,172,121,0.07),_transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-28 bg-[linear-gradient(to_top,_rgba(248,243,239,0.38),_transparent)]" />

      <SiteHeader />

      <div className="section-shell relative z-10 flex min-h-dvh flex-col items-center justify-center pt-24 pb-16 text-center md:pt-28 md:pb-20">
        <p className="mb-6 text-xs tracking-[0.18em] text-foreground/70 uppercase">
          Confidence &amp; Clarity Coaching
        </p>
        <h1 className="max-w-3xl text-4xl text-foreground md:text-6xl">
          You&apos;ve been holding everything together... but who&apos;s holding
          you?
        </h1>
        <p className="mt-7 max-w-2xl text-base text-foreground/80 md:text-lg">
          A safe space for women to pause, be heard, and find themselves again.
        </p>
        <button className="cta-button mt-10">Book a Safe Space Call</button>
      </div>
    </section>
  );
}
