import Image from "next/image";

export function StorySection() {
  return (
    <section className="section-shell">
      <div className="soft-card grid gap-10 p-8 md:grid-cols-[1.05fr_1fr] md:p-12">
        <figure className="relative mx-auto w-full overflow-hidden rounded-3xl bg-blush-soft md:mx-0">
          <div className="relative aspect-[4/5] w-full md:aspect-auto md:min-h-[26rem]">
            <Image
              src="/her1.jpeg"
              alt="She by Shehza — Her story"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>
        </figure>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl">
            I built this space from lived experience.
          </h2>
          <p className="mt-6 max-w-xl text-foreground/80">
            I know the ache of showing up for everyone while feeling distant
            from yourself. Between motherhood, work, and invisible emotional
            labor, I learned how quickly women lose their own voice. This
            practice is where we slow down, listen inward, and rebuild trust in
            who you are.
          </p>
        </div>
      </div>
    </section>
  );
}
