import Navbar from "../components/Navbar";
import Image from "next/image";

const eras = [
  {
    age: "15",
    title: "The Starting Point",
    image: "/story/age-15.jpg",
    text: "Write what you were going through mentally, physically, and lifestyle-wise at this age.",
  },
  {
    age: "16–17",
    title: "Trying to Figure It Out",
    image: "/story/age-16-17.jpg",
    text: "Write about early gym attempts, eating habits, confidence, confusion, discipline, or struggles.",
  },
  {
    age: "18",
    title: "Building Structure",
    image: "/story/age-18.jpg",
    text: "Write about when things started becoming more serious or consistent.",
  },
  {
    age: "19",
    title: "Learning Balance",
    image: "/story/age-19.jpg",
    text: "Write about training, food, school, discipline, and how your mindset changed.",
  },
  {
    age: "20",
    title: "Purposeful Fitness",
    image: "/story/age-20.jpg",
    text: "Write about where you are now and what you finally understand about fitness, health, food, and life.",
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

      <section className="mx-auto max-w-6xl space-y-10 px-6 pb-20">
        {eras.map((era, index) => (
          <div
            key={era.age}
            className="grid gap-8 rounded-[2rem] border border-white/10 bg-gray-950 p-6 md:grid-cols-2 md:p-8"
          >
            <div
              className={`relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={era.image}
                alt={`${era.title} - age ${era.age}`}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Age {era.age}
              </p>

              <h2 className="mt-4 text-3xl font-bold">{era.title}</h2>

              <p className="mt-6 leading-8 text-gray-400">{era.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            What I Believe Now
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Fitness should make your life better, not consume it.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black p-5">
              <h3 className="font-bold">Training Logic</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Write your current lifting philosophy here.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-5">
              <h3 className="font-bold">Eating Logic</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Write your healthy, filling, non-restrictive food approach here.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-5">
              <h3 className="font-bold">Living Logic</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Write your lifestyle, discipline, sleep, balance, and purpose
                philosophy here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}