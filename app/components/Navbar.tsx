import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
      <Link href="/" className="text-2xl font-extrabold">
        HatemFit
      </Link>

      <div className="hidden gap-8 text-base font-medium text-gray-300 md:flex">
        <Link href="/start" className="hover:text-white">
          Start
        </Link>
        <Link href="/about" className="hover:text-white">
          Story
        </Link>
        <Link href="/coaching" className="hover:text-white">
          Coaching
        </Link>
      </div>
    </nav>
  );
}