import Image from "next/image";
import Navbar from "../../components/Navbar";

const foodImages = [
  {
    src: "/philosophy/eating/pancakes.jpg",
    title: "Comfort food breakfast",
    text: "High-protein meals that still feel satisfying.",
  },
  {
    src: "/philosophy/eating/chicken.jpg",
    title: "Homemade meals",
    text: "Real food, big portions, strong macros, and no misery.",
  },
  {
    src: "/philosophy/eating/creami.jpg",
    title: "Better desserts",
    text: "Healthier alternatives that still kill cravings.",
  },
  {
    src: "/philosophy/eating/restaurant.jpg",
    title: "Real life balance",
    text: "Restaurants and gatherings are fine when you don’t go ballistic.",
  },
];

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

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-gray-500">
            Food in real life
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Healthy food should still feel like food you actually want to eat.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {foodImages.map((item) => (
            <div
              key={item.src}
              className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-gray-950"
            >
              <div className="relative h-[430px] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-black">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-lg leading-7 text-gray-300">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
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