import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-[1fr_0.85fr]">
        <div className="absolute left-0 top-24 -z-0 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

        <div className="relative z-10">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-gray-500">
            Fitness for real life
          </p>

          <h1 className="max-w-4xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
            Train with purpose.
            <br />
            Eat with balance.
            <br />
            Live better.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
            A realistic fitness philosophy built from my own mistakes:
            no starvation, no dirty bulking, no chasing validation.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/start"
              className="rounded-2xl bg-white px-10 py-5 text-center text-xl font-black text-black transition hover:scale-[1.02] hover:bg-gray-200"
            >
              Start Here
            </Link>

            <Link
              href="/about"
              className="rounded-2xl border border-white/20 px-10 py-5 text-center text-xl font-black text-white transition hover:scale-[1.02] hover:bg-white hover:text-black"
            >
              Read My Story
            </Link>
          </div>
        </div>

        <div className="relative z-10 hidden md:block">
          <div className="relative ml-auto h-[640px] w-full max-w-[460px] overflow-hidden rounded-[3rem] border border-white/10 bg-gray-950 shadow-2xl">
            <Image
              src="/story/hero.jpg"
              alt="HatemFit lifestyle"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                HatemFit
              </p>
              <p className="mt-2 text-2xl font-black">
                Built from real experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-24 md:grid-cols-3">
        {[
          {
            title: "Purpose",
            text: "Train for health, discipline, confidence, and your future — not insecurity.",
            link: "/philosophy/purpose",
          },
          {
            title: "Eating",
            text: "Build meals that taste good enough, fill you up, and make you feel better.",
            link: "/philosophy/eating",
          },
          {
            title: "Training",
            text: "Simple structure, hard work, recovery, and consistency without extremes.",
            link: "/philosophy/training",
          },
        ].map((card) => (
          <Link
            key={card.title}
            href={card.link}
            className="group rounded-[2rem] border border-white/10 bg-gray-950 p-8 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black"
          >
            <h2 className="text-4xl font-black">{card.title}</h2>

            <p className="mt-5 text-lg leading-8 text-gray-400 group-hover:text-black/70">
              {card.text}
            </p>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em]">
              Read More →
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}