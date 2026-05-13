import Navbar from "../../components/Navbar";

export default function EatingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
          Philosophy
        </p>

        <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
          Eating
          <br />
          Logic.
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-10 text-gray-300">
          Healthy eating became sustainable for me once I stopped viewing it as
          punishment and started building meals I genuinely enjoyed.
        </p>
      </section>

      <section className="mx-auto max-w-5xl border-t border-white/10 px-6 py-20">
        <div className="space-y-10 text-xl leading-10 text-gray-400">
          <p>
            I’ve experienced both extremes when it comes to food.
          </p>

          <p>
            I almost starved myself trying to become lean, then later completely
            lost control dirty bulking and binge eating trying to become big.
          </p>

          <p>
            Both phases taught me the same thing: extremes are unsustainable.
          </p>

          <p>
            What finally changed my relationship with food was learning how to
            build meals that were healthy, filling, nutritious, and tasted GOOD
            ENOUGH to satisfy cravings without making me feel terrible after.
          </p>

          <p>
            I stopped expecting healthy food to compete with ultra-processed
            junk engineered to maximize dopamine for five minutes.
          </p>

          <p>
            Instead, I focused on cooking meals that made me feel energized,
            satisfied, productive, and mentally clear throughout the day.
          </p>

          <p>
            I also started learning my own triggers. For example, I binge way
            more when eating while watching YouTube or shows, so mindful eating
            became important for me.
          </p>

          <p>
            My goal now isn’t restriction. It’s balance.
          </p>

          <p>
            Restaurants, snacks, desserts, and fast food occasionally are
            completely fine when approached responsibly. The issue was never one
            meal — it was my mindset around food.
          </p>

          <p>
            Food should fuel your life, not control it.
          </p>
        </div>
      </section>
    </main>
  );
}