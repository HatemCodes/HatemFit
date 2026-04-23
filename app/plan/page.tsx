"use client";

import Link from "next/link";
import { useState } from "react";

const plans: Record<string, Record<string, string[]>> = {
  muscle: {
    "3": ["Full Body A", "Rest / Steps", "Full Body B", "Rest / Mobility", "Full Body C"],
    "4": ["Upper", "Lower", "Rest / Steps", "Upper", "Lower"],
    "5": ["Push", "Pull", "Legs", "Upper", "Lower"],
  },
  fatloss: {
    "3": ["Full Body Strength", "Cardio + Core", "Full Body Strength"],
    "4": ["Upper", "Lower", "Cardio + Core", "Full Body"],
    "5": ["Push", "Pull", "Legs", "Cardio + Core", "Full Body"],
  },
  strength: {
    "3": ["Squat Focus", "Bench Focus", "Deadlift Focus"],
    "4": ["Upper Strength", "Lower Strength", "Upper Volume", "Lower Volume"],
    "5": ["Squat", "Bench", "Deadlift", "Upper Accessories", "Lower Accessories"],
  },
};

export default function PlanPage() {
  const [goal, setGoal] = useState("muscle");
  const [days, setDays] = useState("3");

  const selectedPlan = plans[goal][days];

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-bold">HatemFit</h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/start">Start Here</Link>
          <Link href="/coaching">Coaching</Link>
          <Link href="/plan">Plan Generator</Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            Build your structure
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Beginner Plan Generator
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Pick your goal and weekly availability. The system gives you a clean
            starting split so you stop guessing and start training.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-6 shadow-2xl">
            <h2 className="mb-6 text-2xl font-bold">Choose your inputs</h2>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Goal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4 text-white outline-none"
                >
                  <option value="muscle">Build Muscle</option>
                  <option value="fatloss">Fat Loss</option>
                  <option value="strength">Strength</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Days per week
                </label>
                <select
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4 text-white outline-none"
                >
                  <option value="3">3 days</option>
                  <option value="4">4 days</option>
                  <option value="5">5 days</option>
                </select>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                Focus
              </p>
              <p className="mt-2 text-lg text-gray-300">
                Consistency first. Complexity later.
              </p>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-gray-950 p-6 shadow-2xl">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-white/10 blur-3xl" />

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your Starter Plan</h2>
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                {days} days/week
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {selectedPlan.map((workout, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black p-5 transition hover:bg-white/5"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    Day {index + 1}
                  </p>
                  <p className="mt-3 text-xl font-bold">{workout}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-white p-5 text-black">
              <p className="font-bold">Next step:</p>
              <p className="mt-1 text-sm text-gray-700">
                Use this as your weekly structure, then track exercises,
                weights, reps, and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}