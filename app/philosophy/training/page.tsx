import Image from "next/image";
import Navbar from "../../components/Navbar";

export default function TrainingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-white/10 blur-[140px]" />

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr]">
          <div className="relative z-10">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-gray-500">
              Philosophy
            </p>

            <h1 className="mt-6 text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
              Training
              <br />
              Logic.
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-10 text-gray-300">
              I used to think progress came from extremes. Now I believe
              progress comes from consistency, balance, recovery, and realistic
              structure.
            </p>
          </div>

          <div className="relative">
            <div className="relative h-[650px] overflow-hidden rounded-[3rem] border border-white/10 bg-gray-950">
              <Image
                src="/philosophy/training/training-physique.jpg"
                alt="Training philosophy"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-gray-400">
                  HatemFit
                </p>

                <p className="mt-2 text-2xl font-black">
                  Train for life, not validation.
                </p>
              </div>
            </div>
          </div>
        </div>
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

          <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-10">
            <p className="text-3xl font-black leading-tight text-white">
              The best training split is the one you actually enjoy enough to
              stay consistent with.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">
              Full body, upper/lower, push pull legs, bodybuilding, powerlifting,
              hybrid training, more cardio, less cardio — experiment and learn
              your own body instead of blindly copying influencers.
            </p>
          </div>

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