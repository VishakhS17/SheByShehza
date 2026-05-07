const testimonials = [
  {
    quote:
      "For the first time in years, I felt truly heard. I left each session lighter and more grounded.",
    label: "Working Mom, 32",
  },
  {
    quote:
      "I stopped living in survival mode. I have language for my needs and confidence in my choices now.",
    label: "New Mother, 29",
  },
  {
    quote:
      "This space helped me reconnect with myself without guilt. It felt gentle, practical, and real.",
    label: "Corporate Professional, 36",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-shell">
      <div className="text-center">
        <p className="text-xs tracking-[0.16em] text-foreground/65 uppercase">
          Testimonials
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl">Words from women who chose themselves.</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote
            key={item.label}
            className="soft-card border border-rose/18 bg-[linear-gradient(160deg,_rgba(253,249,247,0.9),_rgba(243,215,215,0.45))] p-7"
          >
            <p className="mb-4 text-3xl leading-none text-rose/80">&ldquo;</p>
            <p className="text-foreground/80">{item.quote}</p>
            <footer className="mt-5 text-sm text-foreground/65">{item.label}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
