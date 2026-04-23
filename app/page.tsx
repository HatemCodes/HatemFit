import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
      <nav className="mx-auto mb-20 flex max-w-5xl items-center justify-between">
  <h1 className="text-xl font-bold">HatemFit</h1>

  <div className="flex gap-6 text-sm text-gray-300">
    <Link href="/">Home</Link>
    <Link href="/start">Start Here</Link>
    <Link href="/coaching">Coaching</Link>
  </div>
</nav>
      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold">
          Build Discipline. Build Your Body.
        </h1>

        <p className="text-lg text-gray-400">
          A system for people who want to take control of their health —
          built by a CS student whose passion is fitness.
        </p>

        <Link
  href="/start"
  className="bg-white text-black px-6 py-3 rounded-xl font-semibold inline-block"
>
  Start Here
</Link>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto mt-20 space-y-4">
        <h2 className="text-3xl font-semibold">Why this exists</h2>

        <p className="text-gray-400">
          Most people don’t fail because they’re lazy.
          They fail because they don’t have structure.
        </p>

        <p className="text-gray-400">
          This platform is about building purpose — not just workouts.
        </p>
      </section>

    </main>
  );
}