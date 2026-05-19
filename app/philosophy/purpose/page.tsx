import Navbar from "../../components/Navbar";

export default function PurposePage() {
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
            Purposeful
            <br />
            Training.
          </h1>

          <p className="mt-10 max-w-3xl text-2xl leading-10 text-gray-300">
            Fitness should improve your life, not become another insecurity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="border-y border-white/10 py-16">
          <p className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            I spent years chasing validation through fitness before realizing
            health, discipline, and peace matter more than ego.
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
              For a long time, I thought the gym was mainly about becoming more
              attractive, getting validation, and proving myself physically.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              The extremes
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              I went through phases of starving myself to become lean, then
              dirty bulking to become huge, constantly chasing extremes because
              I thought confidence would finally come once I looked “good
              enough.”
            </p>
          </div>

          <div className="rounded-[3rem] border border-white/10 bg-gray-950 p-10">
            <p className="text-5xl font-black leading-tight md:text-7xl">
              Confidence built
              <br />
              on insecurity
              <br />
              never lasts.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              What changed
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              Eventually I realized the gym should improve your quality of life,
              not consume your mind.
            </p>

            <p className="mt-8 text-2xl leading-[1.9] text-gray-400">
              Now I see training as discipline, stress relief, gratitude,
              structure, self-respect, and a way to honor the body and health
              God blessed me with.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              The goal now
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              I still want to look good, feel strong, athletic, and confident.
              But those are no longer the only reasons I train.
            </p>

            <p className="mt-8 text-2xl leading-[1.9] text-gray-400">
              I train for energy, longevity, mental health, discipline, better
              sleep, structure, confidence, and overall quality of life.
            </p>
          </div>

          <div className="border-t border-white/10 pt-16">
            <p className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Fitness should support your life — not become another insecurity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}