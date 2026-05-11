const painPoints = [
  "You feel constantly overwhelmed",
  "You've lost touch with yourself",
  "You're doing everything... but still feel not enough",
];

export function PainPointsSection() {
  return (
    <section
      id="pain-points"
      className="border-y border-border-pink bg-bg-blush"
    >
      <div className="section-shell">
        <span className="eyebrow">This is you</span>
        <h2 className="max-w-[380px] font-cormorant text-[28px] font-semibold text-text-dark md:text-[30px]">
          If this feels familiar, you are not alone.
        </h2>

        <ul className="mt-10 grid gap-4">
          {painPoints.map((point) => (
            <li
              key={point}
              className="flex gap-4 rounded-[2px] border border-problem-card-border bg-problem-card-bg px-5 py-4"
            >
              <span
                className="mt-1.5 h-[6px] w-[6px] shrink-0 rounded-full bg-blush-mid"
                aria-hidden
              />
              <p className="font-inter text-base font-light leading-[1.85] text-text-body md:text-[17px]">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
