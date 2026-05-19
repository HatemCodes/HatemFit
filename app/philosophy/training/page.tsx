import Navbar from "../../components/Navbar";

export default function TrainingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-white/10 blur-[140px]" />

        <div className="relative z-10 max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-gray-500">
            Philosophy
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
            Training
            <br />
            Logic.
          </h1>

          <p className="mt-10 max-w-3xl text-2xl leading-10 text-gray-300">
            Progress doesn’t come from extremes. It comes from consistency,
            recovery, balance, and realistic structure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="border-y border-white/10 py-16">
          <p className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            The all-or-nothing mindset destroyed more progress for me than lack
            of effort ever did.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-32">
        <div className="space-y-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              The old mindset
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              I’ve trained from almost every mindset possible: insecurity,
              obsession, ego, comparison, validation, and eventually balance.
            </p>

            <p className="mt-8 text-2xl leading-[1.9] text-gray-400">
              For years I thought more was always better.
            </p>

            <p className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              More cardio.
              <br />
              Less food.
              <br />
              More gym.
              <br />
              More size.
            </p>
          </div>

          <div className="rounded-[3rem] border border-white/10 bg-gray-950 p-10">
            <p className="text-5xl font-black leading-tight md:text-7xl">
              More is not
              <br />
              always better.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              What changed
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              Eventually I realized my body and mind performed best when I
              actually respected recovery, sleep, energy levels, digestion, and
              long-term sustainability.
            </p>

            <p className="mt-8 text-2xl leading-[1.9] text-gray-400">
              I no longer believe fitness should feel like punishment.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              Real training
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              I still train hard and consistently, but now I also prioritize
              walking more, sleeping better, managing stress, eating better
              foods, recovering properly, and avoiding the extreme mindset that
              used to destroy my progress.
            </p>

            <p className="mt-8 text-2xl leading-[1.9] text-gray-400">
              Fitness became much easier once I stopped trying to “optimize”
              everything and simply built habits I could realistically maintain.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              The real goal
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              The goal is not perfection.
            </p>

            <p className="mt-4 text-5xl font-black leading-tight md:text-7xl">
              The goal is
              <br />
              sustainability.
            </p>
          </div>

          <div className="border-t border-white/10 pt-16">
            <div className="space-y-5 text-3xl font-black leading-tight md:text-5xl">
              <p>No starving.</p>
              <p>No dirty bulking.</p>
              <p>No ego lifting.</p>
              <p>No obsession.</p>
            </div>

            <p className="mt-12 max-w-4xl text-3xl leading-[1.8] text-gray-400 md:text-4xl">
              Just progressive improvement, discipline, movement, health, and
              consistency.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}