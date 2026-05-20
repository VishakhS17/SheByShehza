import Image from "next/image";

export function StorySection() {
  return (
    <section id="story" className="bg-bg-primary">
      <div className="section-shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
          <figure className="mx-auto w-full max-w-[200px] shrink-0 md:mx-0 md:max-w-[260px]">
            <div className="relative w-full overflow-hidden rounded-[4px]">
              <Image
                src="/her.png"
                alt="She by Shehza — Her story"
                width={260}
                height={347}
                className="h-auto w-full object-cover"
                sizes="(min-width: 768px) 260px, 200px"
                priority
              />
            </div>
          </figure>

          <div className="min-w-0 flex-1">
            <span className="eyebrow">Her story</span>
            <h2 className="font-cormorant text-[28px] font-semibold leading-snug text-text-dark md:text-[30px]">
              I built this space from lived experience.
            </h2>
            <p className="mt-6 max-w-xl font-inter text-base font-light leading-[1.85] text-text-body md:text-[17px]">
              I know the ache of showing up for everyone while feeling distant
              from yourself. Between motherhood, work, and invisible emotional
              labor, I learned how quickly women lose their own voice. This
              practice is where we slow down, listen inward, and rebuild trust in
              who you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
