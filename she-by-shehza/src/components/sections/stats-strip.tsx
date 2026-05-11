const stats = [
  { value: "120+", label: "Women Supported" },
  { value: "45 Min Free Call", label: null },
  { value: "100%", label: "Confidential" },
] as const;

export function StatsStrip() {
  return (
    <section className="bg-bg-peach">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-stats-divider px-6 py-6 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-12 md:py-8">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="flex flex-col items-center justify-center px-3 py-4 text-center md:py-3"
          >
            <p className="font-cormorant text-[26px] font-bold leading-tight text-gold md:text-[28px]">
              {stat.value}
            </p>
            {stat.label ? (
              <p className="mt-1 font-inter text-[10px] font-medium uppercase tracking-[0.12em] text-stats-label">
                {stat.label}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
