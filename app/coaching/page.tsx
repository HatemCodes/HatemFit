import Navbar from "../components/Navbar";

export default function CoachingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-white/10 blur-[140px]" />

        <div className="relative z-10 max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-gray-500">
            Coaching Application
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
            I’ll help you
            <br />
            avoid the mistakes
            <br />
            I made.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-gray-300">
            No starvation cuts. No dirty bulks. No fake fitness culture. Just a
            realistic system for training, eating, discipline, and building a
            healthier lifestyle.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            "Realistic training structure",
            "Food habits that fit your life",
            "Weekly check-ins",
            "Accountability without extremes",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-white/10 bg-gray-950 p-7"
            >
              <p className="text-xl font-black leading-tight">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid overflow-hidden rounded-[3rem] border border-white/10 bg-gray-950 lg:grid-cols-[1fr_0.85fr]">
          <div className="p-8 md:p-14">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              Who this is for
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight">
              For people tired of constantly restarting.
            </h2>

            <div className="mt-10 space-y-5 text-xl leading-9 text-gray-400">
              <p>
                This is for beginners who want structure, but do not want to
                turn fitness into another obsession.
              </p>

              <p>
                If you’ve been overthinking your workouts, eating randomly,
                bouncing between restriction and overeating, or relying on
                motivation, this is where we simplify things.
              </p>

              <p>
                The goal is not perfection. The goal is a system you can
                actually live with.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 bg-black p-8 md:p-14 lg:border-l lg:border-t-0">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              Limited spots
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight">
              Apply for coaching.
            </h2>

            <p className="mt-6 text-xl leading-9 text-gray-400">
              Fill out the intake form so I can understand your goals, your
              current routine, and where you keep getting stuck.
            </p>

            <a
              href="https://forms.gle/V1vUCgn2nhK81Wv47"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-2xl bg-white px-10 py-5 text-xl font-black text-black transition hover:scale-[1.02] hover:bg-gray-200"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}