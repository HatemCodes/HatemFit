import Navbar from "../components/Navbar";
import Image from "next/image";

const eras = [
  {
    age: "15",
    title: "The Starting Point",
    image: "/story/age-15.jpg",
    text: "Coming soon — still reflecting on this period of my life.",
  },
  {
    age: "16",
    title: "Trying to Figure It Out",
    image: "/story/age-16.jpg",
    text: "Coming soon — reflecting on early gym attempts, eating habits, confidence, confusion, discipline, and struggles.",
  },
  {
    age: "17",
    title: "Starting To Take It Seriously",
    image: "/story/age-17.jpg",
    text: "Coming soon — reflecting on the phase where fitness started becoming more consistent, but I was still learning what actually mattered.",
  },
  {
    age: "18",
    title: "Building Structure",
    image: "/story/age-18.jpg",
    text: "Coming soon — reflecting on when things became more serious and consistent, but sometimes for the wrong reasons and with extreme thinking.",
  },
  {
    age: "19",
    title: "Learning Balance",
    image: "/story/age-19.jpg",
    text: "Coming soon — reflecting on training, food, school, discipline, and how my mindset started changing.",
  },
  {
    age: "20",
    title: "Purposeful Fitness",
    image: "/story/age-20.jpg",
    text: "Coming soon — reflecting on what I finally understand about fitness, health, food, discipline, and life.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
          My Story
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight md:text-6xl">
          From figuring it out to building a lifestyle.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          This page is the personal side of HatemFit — the years of learning,
          mistakes, training, eating, confidence, discipline, and the mindset
          shifts that shaped how I see fitness today.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-24 px-6 pb-20">
        {eras.map((era, index) => (
          <div
            key={era.age}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            <div
              className={`flex items-center justify-center ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={era.image}
                alt={`${era.title} - age ${era.age}`}
                width={380}
                height={560}
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Age {era.age}
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight">
                {era.title}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-9 text-gray-400">
                {era.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="border-t border-white/10 pt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            What I Believe Now
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight">
            Fitness should make your life better, not consume it.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold">Training Logic</h3>

              <p className="mt-4 text-lg leading-8 text-gray-400">
                My current lifting philosophy will be here.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Eating Logic</h3>

              <p className="mt-4 text-lg leading-8 text-gray-400">
                My healthy, satisfying, non-restrictive food approach will be
                here.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Living Logic</h3>

              <p className="mt-4 text-lg leading-8 text-gray-400">
                My lifestyle, discipline, sleep, balance, and purpose philosophy
                will be here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}