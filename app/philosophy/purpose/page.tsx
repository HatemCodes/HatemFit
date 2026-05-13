import Navbar from "../../components/Navbar";

export default function PurposePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
          Philosophy
        </p>

        <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
          Purposeful
          <br />
          Training.
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-10 text-gray-300">
          I spent years training from insecurity, comparison, validation, and
          ego. Eventually I realized fitness should improve your life, not
          consume it.
        </p>
      </section>

      <section className="mx-auto max-w-5xl border-t border-white/10 px-6 py-20">
        <div className="space-y-10 text-xl leading-10 text-gray-400">
          <p>
            For a long time, I thought the gym was mainly about becoming more
            attractive, getting validation, and proving myself physically.
          </p>

          <p>
            I went through phases of starving myself to become lean, then dirty
            bulking to become huge, constantly chasing extremes because I
            thought confidence would finally come once I looked “good enough.”
          </p>

          <p>
            But eventually I realized confidence built on insecurity never lasts.
          </p>

          <p>
            Now I see training differently. The gym became a healthy hobby, a
            form of discipline, stress relief, self-respect, and gratitude for
            the body and health God blessed me with.
          </p>

          <p>
            I still want to look good. I want to feel confident, athletic,
            strong, capable, and attractive for myself and my future wife. But
            those are no longer the only reasons I train.
          </p>

          <p>
            I train because I want more energy, better mental health, better
            sleep, better discipline, longevity, structure, and overall quality
            of life.
          </p>

          <p>
            Fitness should support your life — not become another insecurity.
          </p>
        </div>
      </section>
    </main>
  );
}