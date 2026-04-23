import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" className="text-2xl font-bold">
        HatemFit
      </Link>

      <div className="flex gap-6 text-sm text-gray-300">
        <Link href="/">Home</Link>
        <Link href="/start">Start Here</Link>
        <Link href="/coaching">Coaching</Link>
        <Link href="/plan">Plan Generator</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}