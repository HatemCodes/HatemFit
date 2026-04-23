import Navbar from "../components/Navbar";

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            Coaching Application
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Build structure before intensity.
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I’m currently helping a small number of beginners build confidence,
            consistency, and a realistic training system.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-8 shadow-2xl">
            <h2 className="text-2xl font-bold">What coaching includes</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Simple workout structure",
                "Basic form guidance",
                "Weekly check-ins",
                "Habit and consistency support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black p-5"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-gray-950 p-8 shadow-2xl">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-white/10 blur-3xl" />

            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Limited spots
            </p>

            <h2 className="mt-4 text-3xl font-bold">Apply for coaching</h2>

            <p className="mt-4 text-gray-400">
              Fill out the intake form so I can understand your goals,
              experience level, and what kind of structure you need.
            </p>

            <a
              href="https://forms.gle/V1vUCgn2nhK81Wv47"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}