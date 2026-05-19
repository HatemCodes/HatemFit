import Navbar from "../../components/Navbar";

export default function EatingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="absolute right-[-100px] top-20 h-72 w-72 rounded-full bg-white/10 blur-[140px]" />

        <div className="relative z-10 max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-gray-500">
            Philosophy
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
            Eating
            <br />
            Logic.
          </h1>

          <p className="mt-10 max-w-3xl text-2xl leading-10 text-gray-300">
            Healthy eating became sustainable once I stopped viewing it as
            punishment and started building meals I genuinely enjoyed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="border-y border-white/10 py-16">
          <p className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            The goal is not restriction.
            <br />
            The goal is balance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-32">
        <div className="space-y-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              The extremes
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              I’ve experienced both extremes when it comes to food.
            </p>

            <p className="mt-8 text-2xl leading-[1.9] text-gray-400">
              I almost starved myself trying to become lean, then later
              completely lost control dirty bulking and binge eating trying to
              become huge.
            </p>
          </div>

          <div className="rounded-[3rem] border border-white/10 bg-gray-950 p-10">
            <p className="text-5xl font-black leading-tight md:text-7xl">
              Extremes are
              <br />
              unsustainable.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              What changed
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              Everything changed once I stopped expecting healthy food to
              compete with ultra-processed junk engineered to maximize dopamine
              for five minutes.
            </p>

            <p className="mt-8 text-2xl leading-[1.9] text-gray-400">
              Instead, I started building meals that were healthy, filling,
              nutritious, enjoyable, and tasted GOOD ENOUGH to satisfy cravings
              without making me feel terrible afterward.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              Food and energy
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              I began focusing on how food actually made me feel physically and
              mentally.
            </p>

            <p className="mt-8 text-2xl leading-[1.9] text-gray-400">
              Better digestion. Better energy. Better productivity. Better mood.
              Better sleep. Better workouts.
            </p>

            <p className="mt-8 text-2xl leading-[1.9] text-gray-400">
              I realized healthy eating isn’t just about aesthetics. It affects
              your entire quality of life.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              Mindful eating
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              I also started learning my personal triggers.
            </p>

            <p className="mt-8 text-2xl leading-[1.9] text-gray-400">
              For example, I binge far more when I eat while watching YouTube or
              shows. Once I became more mindful while eating, I naturally slowed
              down, felt fuller faster, and enjoyed food more.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
              Real balance
            </p>

            <p className="mt-6 text-2xl leading-[1.9] text-gray-400">
              Restaurants, snacks, desserts, and fast food occasionally are
              completely fine when approached responsibly.
            </p>

            <p className="mt-8 text-2xl leading-[1.9] text-gray-400">
              The issue was never one meal.
            </p>

            <p className="mt-4 text-5xl font-black leading-tight md:text-7xl">
              It was my mindset
              <br />
              around food.
            </p>
          </div>

          <div className="border-t border-white/10 pt-16">
            <p className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Food should fuel your life — not control it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}