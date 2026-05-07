export function FinalCtaSection() {
  return (
    <section className="section-shell pt-10">
      <div className="rounded-[2rem] border border-rose/25 bg-[linear-gradient(165deg,_rgba(243,215,215,0.92),_rgba(253,242,239,0.98))] px-8 py-16 text-center shadow-[0_16px_32px_rgba(82,63,63,0.12)] md:px-12">
        <span className="mx-auto mb-6 block h-[3px] w-24 rounded-full bg-[linear-gradient(to_right,_rgba(201,161,98,0.95),_rgba(185,109,133,0.75))]" />
        <h2 className="text-3xl md:text-5xl">You don&apos;t have to carry this alone anymore.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-foreground/78">
          If your heart is asking for a pause, this is your invitation to be
          supported with care.
        </p>
        <button className="cta-button mt-10">Book a Safe Space Call</button>
      </div>
    </section>
  );
}
