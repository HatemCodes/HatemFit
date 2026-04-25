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
              href="/plan"
              className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
            >
              Generate a Plan
            </Link>
          </div>
        </div>

        <div className="relative">
  <div className="absolute -inset-6 rounded-[2.5rem] bg-white/15 blur-3xl" />
  <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-white/30 via-white/5 to-transparent" />

  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950 shadow-2xl">
    <Image
      src="/hatem's-physique.jpg"
      alt="HatemFit fitness progress"
      width={700}
      height={900}
      className="h-[620px] w-full object-cover"
      priority
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

    <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-md">
      <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
        Built through consistency
      </p>
      <p className="mt-2 text-2xl font-bold">
        Discipline over hype.
      </p>
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