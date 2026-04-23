import Image from "next/image";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            About me
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            I build systems in code and in training.
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I’m Hatem, a Computer Science student and someone who has spent over
            3 years seriously training in the gym. Fitness became more than a
            hobby for me — it became a way to build discipline, confidence, and
            structure.
          </p>

          <p className="text-lg leading-8 text-gray-300">
            My goal with HatemFit is to combine my background in software with
            my passion for fitness, creating simple tools and coaching systems
            that help beginners stop guessing and start building consistency.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-white/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950 shadow-2xl">
            <Image
              src="/hatem-physique-2.jpg"
              alt="Hatem fitness progress"
              width={700}
              height={900}
              className="h-[620px] w-full object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                3+ years training
              </p>
              <p className="mt-2 text-2xl font-bold">
                245 lb bench press.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-6">
            <h2 className="text-2xl font-bold">Fitness</h2>
            <p className="mt-4 text-gray-400">
              3+ years of consistent training, strength building, and learning
              what actually works for beginners.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-6">
            <h2 className="text-2xl font-bold">Computer Science</h2>
            <p className="mt-4 text-gray-400">
              I’m studying CS and using that skillset to build tools, systems,
              and a real fitness-tech platform.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-6">
            <h2 className="text-2xl font-bold">Discipline</h2>
            <p className="mt-4 text-gray-400">
              The mission is simple: help people build structure before chasing
              intensity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}