"use client";

import { useState } from "react";

const plans: Record<string, Record<string, string[]>> = {
  muscle: {
    "3": ["Full Body A", "Rest", "Full Body B", "Rest", "Full Body C"],
    "4": ["Upper", "Lower", "Rest", "Upper", "Lower"],
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
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Beginner Plan Generator</h1>
          <p className="mt-3 text-gray-400">
            Choose your goal and weekly availability. This gives you a simple starting structure.
          </p>
        </div>

        <div className="grid gap-6 rounded-2xl border border-gray-800 p-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm text-gray-300">Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full rounded-xl bg-gray-900 p-3 text-white"
            >
              <option value="muscle">Build Muscle</option>
              <option value="fatloss">Fat Loss</option>
              <option value="strength">Strength</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-300">Days per week</label>
            <select
              value={days}
              onChange={(e) => setDays(e.target.value)}
              className="w-full rounded-xl bg-gray-900 p-3 text-white"
            >
              <option value="3">3 days</option>
              <option value="4">4 days</option>
              <option value="5">5 days</option>
            </select>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Your Starter Plan</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {selectedPlan.map((workout, index) => (
              <div key={index} className="rounded-xl bg-gray-900 p-4">
                <p className="text-sm text-gray-500">Day {index + 1}</p>
                <p className="text-lg font-semibold">{workout}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}