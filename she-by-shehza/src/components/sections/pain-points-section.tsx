const painPoints = [
  "You feel constantly overwhelmed",
  "You've lost touch with yourself",
  "You're doing everything... but still feel not enough",
];

export function PainPointsSection() {
  return (
    <section className="section-shell">
      <div className="rounded-[2rem] bg-blush-soft/70 px-8 py-14 text-center md:px-14">
        <p className="text-xs tracking-[0.16em] text-foreground/65 uppercase">
          This is you
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl">If this feels familiar, you are not alone.</h2>
        <ul className="mx-auto mt-10 grid max-w-2xl gap-6 text-lg text-foreground/80">
          {painPoints.map((point) => (
            <li key={point} className="font-light">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
