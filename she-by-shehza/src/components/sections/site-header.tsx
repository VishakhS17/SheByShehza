import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 px-4 pt-6 md:px-6 md:pt-8">
      <div className="pointer-events-auto mx-auto flex w-full max-w-6xl items-center justify-center rounded-full border border-white/25 bg-white/28 px-6 py-2 backdrop-blur-xl shadow-[0_10px_28px_rgba(82,63,63,0.06)]">
        <div className="relative h-14 w-[290px] md:h-16 md:w-[360px]">
          <Image
            src="/logo.png"
            alt="SheByShehza"
            fill
            className="object-contain scale-[1.28]"
            priority
          />
        </div>
      </div>
    </header>
  );
}
