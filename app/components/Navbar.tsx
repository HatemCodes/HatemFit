import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-5xl font-black tracking-tight text-white">
          HatemFit
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-gray-300 transition hover:text-white">
            Home
          </Link>

          <Link href="/start" className="text-2xl font-bold text-gray-300 transition hover:text-white">
            Start
          </Link>

          <Link href="/about" className="text-2xl font-bold text-gray-300 transition hover:text-white">
            Story
          </Link>

          <Link href="/coaching" className="text-2xl font-bold text-gray-300 transition hover:text-white">
            Coaching
          </Link>
        </div>
      </div>
    </nav>
  );
}