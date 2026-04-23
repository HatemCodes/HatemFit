export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-4xl font-bold">Coaching</h1>

        <p className="text-gray-400">
          I’m currently helping a small number of beginners build structure,
          confidence, and consistency in the gym.
        </p>

        <div className="rounded-2xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-2xl font-semibold">What this includes</h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Simple workout structure</li>
            <li>• Basic form guidance</li>
            <li>• Weekly check-ins</li>
            <li>• Habit and consistency support</li>
          </ul>
        </div>

        <a
  href="https://forms.gle/V1vUCgn2nhK81Wv47"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
>
  Apply for Coaching
</a>
      </section>
    </main>
  );
}