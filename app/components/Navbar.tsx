import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-white transition hover:opacity-80"
        >
          HatemFit
        </Link>

        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2">
          {[
            { name: "Home", href: "/" },
            { name: "Start", href: "/start" },
            { name: "Story", href: "/about" },
            { name: "Coaching", href: "/coaching" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-xl px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-gray-400 transition hover:bg-white hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}