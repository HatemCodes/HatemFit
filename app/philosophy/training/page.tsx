import Navbar from "../../components/Navbar";

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
          Philosophy
        </p>

        <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
          Training
          <br />
          Logic.
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-10 text-gray-300">
          I used to think progress came from extremes. Now I believe progress
          comes from consistency, balance, recovery, and realistic structure.
        </p>
      </section>

      <section className="mx-auto max-w-5xl border-t border-white/10 px-6 py-20">
        <div className="space-y-10 text-xl leading-10 text-gray-400">
          <p>
            I’ve trained from almost every mindset possible: insecurity,
            obsession, ego, comparison, validation, and eventually balance.
          </p>

          <p>
            For years I thought more was always better. More cardio. Less food.
            More gym. More size. More weight.
          </p>

          <p>
            Eventually I realized my body and mind performed best when I
            actually respected recovery, sleep, energy levels, and long-term
            sustainability.
          </p>

          <p>
            I no longer believe fitness should feel like punishment.
          </p>

          <p>
            I train hard and consistently, but I also walk more, sleep better,
            manage stress, eat better foods, recover properly, and avoid the
            all-or-nothing mindset that used to destroy my progress.
          </p>

          <p>
            The goal is not perfection. The goal is building a structure you can
            realistically maintain for years.
          </p>

          <p>
            No starving.
            <br />
            No dirty bulking.
            <br />
            No ego lifting.
            <br />
            No obsession.
          </p>

          <p>
            Just progressive improvement, discipline, movement, health, and
            consistency.
          </p>
        </div>
      </section>
    </main>
  );
}