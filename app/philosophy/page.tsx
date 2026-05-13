import Navbar from "../components/Navbar";

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-6xl font-black leading-tight md:text-7xl">
          My Philosophy
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-10 text-gray-400">
          Everything here comes from real mistakes, insecurity, obsession,
          learning, balance, and rebuilding my relationship with fitness.
        </p>
      </section>

      <section
        id="mindset"
        className="mx-auto max-w-5xl px-6 py-24 border-t border-white/10"
      >
        <h2 className="text-5xl font-black">
          Stop training from insecurity
        </h2>

        <p className="mt-8 text-xl leading-10 text-gray-400">
          Write your mindset philosophy here.
        </p>
      </section>

      <section
        id="food"
        className="mx-auto max-w-5xl px-6 py-24 border-t border-white/10"
      >
        <h2 className="text-5xl font-black">
          Eat to feel good
        </h2>

        <p className="mt-8 text-xl leading-10 text-gray-400">
          Write your food philosophy here.
        </p>
      </section>

      <section
        id="consistency"
        className="mx-auto max-w-5xl px-6 py-24 border-t border-white/10"
      >
        <h2 className="text-5xl font-black">
          Stay consistent without extremes
        </h2>

        <p className="mt-8 text-xl leading-10 text-gray-400">
          Write your consistency philosophy here.
        </p>
      </section>
    </main>
  );
}