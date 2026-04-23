import Navbar from "../components/Navbar";

export default function StartPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            Start here
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Your first goal is not perfection. It is consistency.
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Beginners don’t need complicated routines. They need a simple system
            they can repeat long enough to see progress.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Show up",
              text: "Train 3–4 times per week before worrying about the perfect split.",
            },
            {
              title: "Learn form",
              text: "Control the movement before chasing heavier weight.",
            },
            {
              title: "Track basics",
              text: "Write down exercises, weights, reps, and how consistent you were.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-gray-950 p-6 shadow-2xl"
            >
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="mt-4 text-gray-400">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}