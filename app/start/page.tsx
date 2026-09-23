import Link from "next/link";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";

export default function StartPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <Reveal>
        <section className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-white/10 blur-[140px]" />

          <div className="relative z-10 max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-gray-500">
              Start Here
            </p>

            <h1 className="mt-6 text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
              Don’t chase
              <br />
              extremes.
              <br />
              Build a lifestyle.
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-10 text-gray-300">
              This is the foundation of HatemFit: training hard, eating better,
              and becoming healthier without turning fitness into another
              insecurity.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 pb-28">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Purpose",
                text: "Stop training from insecurity, comparison, ego, or online validation.",
                link: "/philosophy/purpose",
              },
              {
                number: "02",
                title: "Eating",
                text: "Build meals that are filling, healthy, enjoyable, and good enough to kill cravings.",
                link: "/philosophy/eating",
              },
              {
                number: "03",
                title: "Training",
                text: "No starving. No dirty bulking. No all-or-nothing mindset. Just sustainable habits.",
                link: "/philosophy/training",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.link}
                className="group rounded-[2.5rem] border border-white/10 bg-gray-950 p-8 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500 group-hover:text-black/50">
                  {card.number}
                </p>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  {card.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-400 group-hover:text-black/70">
                  {card.text}
                </p>

                <p className="mt-10 text-sm font-black uppercase tracking-[0.25em]">
                  Read More →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 pb-32">
          <div className="border-y border-white/10 py-16">
            <h2 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Fitness should improve your body, mind, energy, confidence,
              discipline, and quality of life.
            </h2>

            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
                  Physical
                </p>

                <p className="mt-5 text-xl leading-10 text-gray-400">
                  Better sleep, more energy, improved movement, digestion,
                  strength, endurance, mobility, longevity, and overall health.
                </p>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
                  Mental
                </p>

                <p className="mt-5 text-xl leading-10 text-gray-400">
                  More structure, confidence, emotional control, discipline,
                  clarity, purpose, and a healthier relationship with yourself.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}