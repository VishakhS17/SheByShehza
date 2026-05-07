const painPoints = [
  "You feel constantly overwhelmed",
  "You've lost touch with yourself",
  "You're doing everything... but still feel not enough",
];

export function PainPointsSection() {
  return (
    <section className="section-shell">
      <div className="rounded-[2rem] border border-blush/35 bg-[linear-gradient(165deg,_rgba(243,215,215,0.82),_rgba(248,235,232,0.9))] px-8 py-14 text-center shadow-[0_14px_30px_rgba(82,63,63,0.08)] md:px-14">
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
