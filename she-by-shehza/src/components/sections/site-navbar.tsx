import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#pain-points", label: "This is you" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#before-after", label: "Before & after" },
  { href: "#contact", label: "Contact" },
];

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-bg-primary">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-center gap-6 px-6 md:h-[5.25rem] md:justify-between md:px-12">
        <Link
          href="/"
          className="relative block h-14 w-48 shrink-0 md:h-16 md:w-60"
        >
          <Image
            src="/logo.png"
            alt="She by Shehza"
            fill
            className="object-contain object-center md:object-left"
            priority
          />
        </Link>
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter text-xs font-normal uppercase tracking-[0.08em] text-text-body hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
