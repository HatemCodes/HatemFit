import Navbar from "../components/Navbar";
import Image from "next/image";

const eras = [
  {
    age: "15",
    title: "The Starting Point",
    image: "/story/age-15.jpg",
    text: `At 15, I never really cared much about looks. Throughout my childhood, I was always “good-looking enough” to talk to girls or have girlfriends, but what people mostly liked about me was my personality. I was funny, social, and honestly just enjoyed life. Because of that, I ate whatever I wanted and never thought much about my appearance or health.

Then quarantine happened.

For the first time in my life, I gained a lot of weight and became overweight. I was known as the funny guy who could eat a ton, but suddenly I started noticing how different I looked. Around the same time, all the guys around me started glowing up — getting leaner, dressing better, hitting the gym, and looking more masculine and put together.

Meanwhile, I felt like I was going in the opposite direction.

That was the first time I ever felt genuinely insecure about myself. I hated looking at my stomach and face fat in the mirror, and it slowly started affecting me mentally. I became obsessed with wanting to look better, not for health, but because I felt left behind.

I was willing to do almost anything to change how I looked, which eventually led me into the extreme phase I entered at 16. At that point, I didn’t care about health at all. I didn’t think about growth, hormones, balance, or long-term consequences. I just wanted the insecurity gone.`,
  },

  {
    age: "16",
    title: "Trying to Figure It Out",
    image: "/story/age-16.jpg",
    text: `At 16, I became obsessed with losing weight.

I started running constantly and playing a crazy amount of basketball because I wanted to play and look like Steph Curry. I was doing hours of cardio, but I still wasn’t lifting weights at this point.

The biggest issue was my diet.

I was barely eating. Most days, I only had one meal at night after school, studying, cardio, basketball, and everything else. I was probably eating around 1200–1500 calories while being insanely active every day.

Between June 2021 and early 2022, I went from around 85 kg to nearly 60 kg.

Mentally, it was a weird phase. Even though I was struggling internally and doing all of this out of insecurity, I also couldn’t believe the transformation. For the first time in my life, I saw abs. I saw my frame lean out. I realized I actually had good genetics, and it shocked me.

That phase completely changed my confidence.

I started talking to more girls, going out more, and honestly became a bit of an f-boy for a while because I suddenly felt attractive again after feeling insecure for so long. I was super active, shredded, and lean to the bone at 5’9 and around 60 kg.

But even though I looked “better,” I still wasn’t healthy mentally. Everything I was doing came from insecurity and extreme restriction rather than balance or self-respect.`,
  },

  {
    age: "17",
    title: "Starting To Take It Seriously",
    image: "/story/age-17.jpg",
    text: `At 17, I moved to Canada, and a completely new insecurity started forming.

I had started going to the gym shortly before moving, but once I got to high school in Canada, the comparison culture became intense. Me and my friends were constantly competing with each other physically, especially as Arab guys where being “big” and muscular was heavily respected.

At this point, being lean wasn’t enough for me anymore.

I was still getting attention and doing well socially because I naturally look better leaner, but now I wanted something different. I wanted to be the “big gym guy” that people respected physically, not just the skinny funny guy or the “pretty boy.”

That mindset led me into one of the biggest mistakes of my life: extreme dirty bulking.

I convinced myself I could reach 90 kg lean and stay aesthetic, so I started eating absolutely everything in sight. Massive portions, junk food, force feeding, late-night eating — anything to gain size as fast as possible.

And honestly, it ruined me.

I ruined my sleep, productivity, energy, face, and overall health. After some time, I realized I wasn’t even chasing fitness anymore. I was just feeding a new insecurity.

I thought getting huge would finally make me confident, but instead I slowly lost myself again.`,
  },

  {
    age: "18",
    title: "Losing The Plot",
    image: "/story/age-18.jpg",
    text: `At 18, I honestly lost the plot completely.

I was training hard and trying to become the “big guy,” but I didn’t care about health at all anymore. I thought eating massive amounts of food and lifting hard for one hour a day automatically meant I was healthy and making progress.

In reality, I was just binge eating constantly.

I was eating until I felt sick almost every night. My body clearly didn’t want to be that heavy, but I kept forcing it because I thought bigger automatically meant better.

Physically and mentally, I felt terrible.

I was constantly tired, taking naps every day, feeling sluggish after meals, ruining my sleep, and honestly damaging my body trying to chase this image of being huge. Even though I was stronger physically, deep down I didn’t feel healthy or confident at all.

At one point, I looked in the mirror and genuinely felt disgusted with myself again.

I couldn’t believe how far I had swung from one extreme to another. First I almost starved myself to become skinny, then I completely lost control trying to become big.

After reaching around 95 kg from being nearly 60 kg before, I barely recognized myself physically or mentally anymore.`,
  },

  {
    age: "19",
    title: "Learning Balance",
    image: "/story/age-19.jpg",
    text: `At 19, I slowly started becoming wiser mentally, even though I still wasn’t fully in the right place yet.

This time, instead of starving myself like I did at 16, I simply started removing the extreme habits that were destroying me. I cut out a lot of the junk food, ridiculous portion sizes, and constant overeating.

The weight started dropping quickly and steadily because my body honestly never wanted to be that big in the first place.

As I leaned out again, everything started improving.

I had more energy, slept better, stopped needing naps every day, became more productive, moved more throughout the day, and honestly just felt healthier overall.

This was also when I started becoming more mindful about food instead of emotional about it.

I began loosely tracking protein and calories, cooking meals that actually tasted good while still making me feel healthy, and learning what foods and habits genuinely worked for my body.

By summer 2025, I had gone from around 220 lbs down to about 173 lbs, and the difference physically and mentally was huge. I had visible abs again, more definition, more confidence, and overall felt happier when I looked in the mirror.

But the biggest change wasn’t physical anymore.

I started realizing how beautiful and realistic healthy living actually is when done with balance. I realized there was no reason for me, as a capable young man with access to health, movement, food, and knowledge, to willingly feel terrible all the time.

For the first time, I started understanding that the way you eat, move, train, and live affects not only your body, but also your mind, energy, discipline, and even your soul.`,
  },

  {
    age: "20",
    title: "Purposeful Fitness",
    image: "/story/age-20.jpg",
    text: `Now at 20 years old, I honestly feel healthier mentally and physically than I ever have before.

I’m currently around 160 lbs and still slowly cutting toward 155, but for the first time in my life, the process feels easy and sustainable because I’m no longer approaching fitness from extremes.

I’m not starving myself.
I’m not force feeding myself.
I’m not “dieting” in the miserable restrictive way I used to think dieting had to be.

I simply move a lot, train consistently, and eat filling, nutritious foods that taste GOOD ENOUGH to satisfy me while still making me feel energized, healthy, and productive throughout the day.

That “good enough” mindset changed everything for me.

I realized most ultra-processed junk food is engineered to taste amazing for five minutes and then leave you feeling terrible afterward. Meanwhile, healthy food can actually taste incredible when you learn how to cook properly and stop expecting every meal to feel like a dopamine hit.

I also started identifying my personal habits and triggers.

For example, I realized I binge way more when I eat while watching YouTube or shows, so now I try to eat more mindfully without constant stimulation. When I do that, I naturally slow down, enjoy food more, and actually notice when I’m full.

More importantly, my entire mindset around fitness changed.

I stopped seeing the gym as a place to chase validation or prove myself to other people. Now I see it as a healthy hobby, a form of discipline, a way to honor the body and health God blessed me with, and a way to improve myself physically and mentally for my future, my family, and my future wife.

I want to look good, yes — but not out of insecurity anymore.

I want to feel healthy, energetic, productive, capable, disciplined, and confident. I want food to fuel my life instead of controlling it. I want fitness to improve my life instead of consuming it.

And honestly, I can’t wait to share everything I’ve learned throughout this journey.`,
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

              <p className="mt-6 max-w-xl text-lg leading-9 text-gray-400 whitespace-pre-line">
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
                Train to become healthier, stronger, more disciplined, and more
                capable — not to obsess over validation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Eating Logic</h3>

              <p className="mt-4 text-lg leading-8 text-gray-400">
                Healthy food should taste good, satisfy you, fuel your life, and
                improve your health without feeling restrictive.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Living Logic</h3>

              <p className="mt-4 text-lg leading-8 text-gray-400">
                Good sleep, movement, discipline, balance, faith, and purpose
                create a healthier and happier life overall.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}