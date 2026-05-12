import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto grid min-h-[78vh] max-w-6xl items-center gap-12 px-6 py-12 md:grid-cols-2">
        <div>
          <p className="mb-6 text-lg font-semibold text-gray-400">
            Fitness for real life.
          </p>

          <h1 className="text-6xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Train hard.
            <br />
            Eat well.
            <br />
            Live better.
          </h1>

          <p className="mt-8 max-w-2xl text-2xl leading-10 text-gray-300">
            A simple approach to training, food, discipline, and healthy living.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/start"
              className="rounded-2xl bg-white px-10 py-5 text-center text-xl font-bold text-black transition hover:bg-gray-200"
            >
              Start Here
            </Link>

            <Link
              href="/about"
              className="rounded-2xl border border-white/20 px-10 py-5 text-center text-xl font-bold text-white transition hover:bg-white hover:text-black"
            >
              Read My Story
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="relative h-[560px] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950">
            <Image
              src="story/hero.jpg"
              alt="HatemFit lifestyle"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-3">
        <Link
          href="/start"
          className="rounded-[2rem] border border-white/10 bg-gray-950 p-8 transition hover:bg-white hover:text-black"
        >
          <h2 className="text-3xl font-black">Training</h2>
          <p className="mt-4 text-lg text-gray-400">
            Simple structure. No overcomplication.
          </p>
        </Link>

        <Link
          href="/about"
          className="rounded-[2rem] border border-white/10 bg-gray-950 p-8 transition hover:bg-white hover:text-black"
        >
          <h2 className="text-3xl font-black">My Story</h2>
          <p className="mt-4 text-lg text-gray-400">
            How I started and what I learned.
          </p>
        </Link>

        <Link
          href="/coaching"
          className="rounded-[2rem] border border-white/10 bg-gray-950 p-8 transition hover:bg-white hover:text-black"
        >
          <h2 className="text-3xl font-black">Coaching</h2>
          <p className="mt-4 text-lg text-gray-400">
            Build habits that actually last.
          </p>
        </Link>
      </section>
    </main>
  );
}