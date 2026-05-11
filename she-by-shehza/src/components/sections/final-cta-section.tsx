export function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="border-t border-border-soft bg-bg-soft"
    >
      <div className="section-shell py-12 text-center md:py-16">
        <div className="mx-auto h-px w-10 bg-gold" aria-hidden />
        <h2 className="mt-8 font-cormorant text-[34px] font-bold text-text-dark">
          You don&apos;t have to carry this alone anymore.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-inter text-base font-light leading-[1.85] text-text-muted md:text-[17px]">
          If your heart is asking for a pause, this is your invitation to be
          supported with care.
        </p>
        <button type="button" className="btn-primary mt-10">
          Book a Safe Space Call
        </button>
        <p className="mt-6 font-inter text-base font-light leading-[1.85] tracking-[0.06em] text-cta-footnote md:text-[17px]">
          No pressure. Just an honest conversation.
        </p>
      </div>
    </section>
  );
}
