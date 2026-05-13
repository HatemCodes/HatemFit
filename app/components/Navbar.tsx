import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
      <Link href="/" className="text-4xl font-black tracking-tight">
        HatemFit
      </Link>

      <div className="hidden gap-4 md:flex">
        <Link
          href="/"
          className="rounded-xl px-5 py-3 text-lg font-bold text-gray-300 transition hover:bg-white hover:text-black"
        >
          Home
        </Link>

        <Link
          href="/start"
          className="rounded-xl px-5 py-3 text-lg font-bold text-gray-300 transition hover:bg-white hover:text-black"
        >
          Start
        </Link>

        <Link
          href="/about"
          className="rounded-xl px-5 py-3 text-lg font-bold text-gray-300 transition hover:bg-white hover:text-black"
        >
          Story
        </Link>

        <Link
          href="/coaching"
          className="rounded-xl px-5 py-3 text-lg font-bold text-gray-300 transition hover:bg-white hover:text-black"
        >
          Coaching
        </Link>
      </div>
    </nav>
  );
}