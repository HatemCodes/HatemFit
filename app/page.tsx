import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-bold">HatemFit</h1>

        <div className="flex gap-6 text-sm text-gray-300">
  <Link href="/">Home</Link>
  <Link href="/start">Start Here</Link>
  <Link href="/coaching">Coaching</Link>
  <Link href="/plan">Plan Generator</Link>
  <Link href="/about">About</Link>
</div>
      </nav>

      <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-12 md:grid-cols-2">
        <div className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            Fitness × Discipline × Fun
          </p>

          <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Build discipline.
            <br />
            Build your body.
          </h2>

          <p className="max-w-xl text-lg leading-8 text-gray-300">
            A fitness system for people who want structure, consistency, and
            purpose — built by a CS student whose passion is fitness.
          </p>

          <div className="flex flex-wrap gap-4">
  <Link
    href="/start"
    className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
  >
    Start Here
  </Link>

  <Link
    href="/about"
    className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
  >
    Read My Story
  </Link>

  <Link
    href="/plan"
    className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
  >
    Generate a Plan
  </Link>
</div>
        </div>

        <div className="flex items-center justify-center">
  <div className="max-w-md rounded-[2rem] border border-white/10 bg-gray-950 p-10 shadow-2xl">

    <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
      HatemFit Philosophy
    </p>

    <h3 className="mt-4 text-3xl font-bold leading-tight">
      Discipline creates confidence.
    </h3>

    <p className="mt-6 leading-7 text-gray-400">
      Most beginners don’t need extreme routines.
      They need a realistic structure they can actually sustain.
    </p>

    <div className="mt-8 space-y-4">
      <div className="rounded-xl border border-white/10 bg-black p-4">
        <p className="font-semibold">Built for beginners</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-black p-4">
        <p className="font-semibold">Focused on consistency</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-black p-4">
        <p className="font-semibold">Powered by systems & tech</p>
      </div>
    </div>
  </div>
</div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h3 className="text-xl font-bold">Simple Training</h3>
          <p className="mt-3 text-gray-400">
            No overcomplication. Just clear structure for beginners.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h3 className="text-xl font-bold">Consistency First</h3>
          <p className="mt-3 text-gray-400">
            The goal is not motivation. The goal is repeatable discipline.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h3 className="text-xl font-bold">Built With Tech</h3>
          <p className="mt-3 text-gray-400">
            A fitness brand built like a product, not just a page.
          </p>
        </div>
      </section>
    </main>
  );
}