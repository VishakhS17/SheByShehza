const beforeItems = ["Self-doubt", "Overwhelm", "Feeling invisible"];
const afterItems = ["Self-trust", "Calm", "Feeling valued"];

export function TransformationSection() {
  return (
    <section className="section-shell">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="soft-card p-8">
          <p className="text-xs tracking-[0.14em] text-foreground/60 uppercase">
            Before
          </p>
          <h3 className="mt-3 text-2xl">Carrying it all alone</h3>
          <ul className="mt-6 grid gap-3 text-foreground/80">
            {beforeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.5rem] border border-gold/25 bg-[color-mix(in_srgb,var(--surface)_84%,var(--blush-soft)_16%)] p-8 shadow-[0_14px_36px_rgba(82,63,63,0.08)]">
          <p className="text-xs tracking-[0.14em] text-gold uppercase">After</p>
          <h3 className="mt-3 text-2xl">Rooted in who you are</h3>
          <ul className="mt-6 grid gap-3 text-foreground/80">
            {afterItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
