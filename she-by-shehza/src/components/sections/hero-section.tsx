export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border-soft bg-bg-soft">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="hidden size-full bg-bg-soft motion-reduce:block" />
        <video
          className="absolute inset-0 size-full scale-105 object-cover motion-reduce:hidden [filter:blur(3px)]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg-soft/60 motion-reduce:bg-bg-soft" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-16 md:px-12 md:py-20">
        <span className="eyebrow">Confidence &amp; Clarity Coaching</span>

        <h1 className="font-cormorant text-4xl font-normal leading-[1.12] text-text-dark md:text-[3.375rem]">
          You&apos;ve been holding everything together...
          <br />
          <span className="italic text-blush-mid">
            but who&apos;s holding you?
          </span>
        </h1>

        <p className="mt-8 max-w-[320px] font-inter text-base font-light leading-[1.85] text-text-muted md:text-[17px]">
          A safe space for women to pause, be heard, and find themselves again.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a href="#contact" className="btn-primary text-center">
            Book a Safe Space Call
          </a>
          <a href="#services" className="btn-ghost text-center">
            Complimentary Clarity Call
          </a>
        </div>
      </div>
    </section>
  );
}
