const beforeItems = ["Self-doubt", "Overwhelm", "Feeling invisible"];
const afterItems = ["Self-trust", "Calm", "Feeling valued"];

export function TransformationSection() {
  return (
    <section id="before-after" className="bg-bg-primary">
      <div className="section-shell">
        <span className="eyebrow">The Transformation</span>
        <h2 className="font-cormorant text-[28px] font-semibold text-text-dark md:text-[30px]">
          From survival mode to rooted in yourself.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-r-[2px] rounded-l-none border border-border-soft border-l-[3px] border-l-[#e0c4b0] bg-bg-peach pl-5 pr-6 py-8">
            <p className="font-inter text-[10px] font-medium uppercase tracking-[0.16em] text-gold">
              Before
            </p>
            <h3 className="mt-3 font-cormorant text-xl font-semibold text-text-dark">
              Carrying it all alone
            </h3>
            <ul className="mt-6">
              {beforeItems.map((item, i) => (
                <li
                  key={item}
                  className={`py-3 font-inter text-base font-light leading-[1.85] text-text-body md:text-[17px] ${
                    i < beforeItems.length - 1
                      ? "border-b border-black/[0.06]"
                      : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-r-[2px] rounded-l-none border border-border-soft border-l-[3px] border-l-gold bg-bg-blush pl-5 pr-6 py-8">
            <p className="font-inter text-[10px] font-medium uppercase tracking-[0.16em] text-gold">
              After
            </p>
            <h3 className="mt-3 font-cormorant text-xl font-semibold text-text-dark">
              Rooted in who you are
            </h3>
            <ul className="mt-6">
              {afterItems.map((item, i) => (
                <li
                  key={item}
                  className={`py-3 font-inter text-base font-light leading-[1.85] text-text-body md:text-[17px] ${
                    i < afterItems.length - 1
                      ? "border-b border-black/[0.06]"
                      : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
