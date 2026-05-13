import Navbar from "../components/Navbar";

export default function StartPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
            Start Here
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Don’t chase
            <br />
            extremes.
            <br />
            Build a lifestyle.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-gray-300">
            I learned the hard way that fitness can either make your life
            better or become another insecurity. This is where I share the
            habits that helped me train hard, eat better, and feel healthier
            without starving, dirty bulking, or obsessing over validation.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Stop training from insecurity",
              text: "Don’t let comparison, looksmaxxing, ego, or validation decide your goals.",
              link: "/philosophy/purpose",
            },
            {
              title: "Eat to feel good",
              text: "Build meals that are filling, healthy, enjoyable, and good enough to kill cravings.",
              link: "/philosophy/eating",
            },
            {
              title: "Stay consistent without extremes",
              text: "No starving. No dirty bulking. No all-or-nothing mindset. Just sustainable habits.",
              link: "/philosophy/training",
            },
          ].map((card) => (
            <a
              key={card.title}
              href={card.link}
              className="rounded-[2.5rem] border border-white/10 bg-gray-950 p-8 transition hover:-translate-y-1 hover:border-white/20"
            >
              <h2 className="text-3xl font-black leading-tight">
                {card.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                {card.text}
              </p>

              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Read More →
              </p>
            </a>
          ))}
        </div>

        <div className="mt-24 border-t border-white/10 pt-16">
          <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            Fitness should improve your physical health, mental health, energy,
            discipline, confidence, and overall quality of life.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">
                Physical health matters
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Better sleep, more energy, improved movement, better digestion,
                heart health, strength, longevity, hormone health, mobility,
                endurance, and overall quality of life.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Mental health matters too
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Training gave me confidence, structure, discipline, purpose,
                emotional control, and a healthier relationship with myself,
                food, and life overall.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}