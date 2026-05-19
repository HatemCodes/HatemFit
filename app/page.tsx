import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative mx-auto grid min-h-[84vh] max-w-7xl items-center gap-16 px-6 py-16 md:grid-cols-[1fr_0.85fr]">
        <div className="absolute left-[-120px] top-24 h-80 w-80 rounded-full bg-white/10 blur-[130px]" />
        <div className="absolute bottom-0 right-[-120px] h-80 w-80 rounded-full bg-white/5 blur-[140px]" />

        <div className="relative z-10">
          <p className="mb-6 text-sm font-black uppercase tracking-[0.4em] text-gray-500">
            Fitness for real life
          </p>

          <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
            Train with purpose.
            <br />
            Eat with balance.
            <br />
            Live better.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
            A realistic fitness philosophy built from real mistakes: no
            starvation, no dirty bulking, no chasing validation.
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
          <div className="relative ml-auto h-[650px] w-full max-w-[470px] overflow-hidden rounded-[3rem] border border-white/10 bg-gray-950 shadow-2xl">
            <Image
              src="/story/hero.jpg"
              alt="HatemFit lifestyle"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-400">
                HatemFit
              </p>
              <p className="mt-2 text-2xl font-black">
                Built from real experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="border-y border-white/10 py-14">
          <p className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            Fitness should make your life better — not become another
            insecurity.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-28 md:grid-cols-3">
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
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-black/50">
              Philosophy
            </p>

            <h2 className="mt-4 text-4xl font-black">{card.title}</h2>

            <p className="mt-5 text-lg leading-8 text-gray-400 group-hover:text-black/70">
              {card.text}
            </p>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em]">
              Read More →
            </p>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid overflow-hidden rounded-[3rem] border border-white/10 bg-gray-950 md:grid-cols-2">
          <div className="relative min-h-[520px]">
            <Image
              src="/story/age-20-1.jpg"
              alt="Current HatemFit progress"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70" />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-14">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              The message
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight">
              No more extremes.
            </h2>

            <p className="mt-6 text-xl leading-10 text-gray-300">
              I’ve been overweight, under-eating, chasing size, dirty bulking,
              cutting, restarting, and overthinking. HatemFit is about taking
              those lessons and building something healthier.
            </p>

            <Link
              href="/about"
              className="mt-8 w-fit rounded-2xl bg-white px-8 py-4 text-lg font-black text-black transition hover:bg-gray-200"
            >
              See The Journey
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}