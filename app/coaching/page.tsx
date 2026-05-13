import Navbar from "../components/Navbar";

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
            Coaching Application
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Build a lifestyle,
            <br />
            not another insecurity.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-gray-300">
            My goal is to help beginners train hard, eat better, and build
            confidence without starving, dirty bulking, obsessing over
            validation, or constantly restarting.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-gray-950 p-8">
            <h2 className="text-3xl font-black">What coaching includes</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Realistic training structure",
                "Food habits that don’t feel miserable",
                "Weekly check-ins",
                "Balance, discipline, and accountability",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black p-6"
                >
                  <p className="text-lg font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-gray-950 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Limited spots
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Apply for coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              If you’re tired of guessing, overthinking, starving, dirty
              bulking, or trying to fix everything at once, apply below. The
              goal is to build a system you can actually live with.
            </p>

            <a
              href="https://forms.gle/V1vUCgn2nhK81Wv47"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-2xl bg-white px-10 py-5 text-xl font-bold text-black transition hover:bg-gray-200"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}