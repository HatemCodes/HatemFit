import Navbar from "../components/Navbar";
import Image from "next/image";

const eras = [
  {
    age: "15",
    title: "The Starting Point",
    summary:
      "The first time I felt genuinely insecure about my appearance and started comparing myself to everyone around me.",
    images: [
      "/story/age-15-1.jpg",
      "/story/age-15-2.jpg",
      "/story/age-15-3.jpg",
    ],
    text: `At 15, I never really cared much about looks. Throughout my childhood, I was always “good-looking enough” to talk to girls or have girlfriends, but what people mostly liked about me was my personality. I was funny, social, and honestly just enjoyed life.

Because of that, I ate whatever I wanted and never thought much about my appearance or health.

Then quarantine happened.

For the first time in my life, I gained a lot of weight and became overweight. I was known as the funny guy who could eat a lot, but over time, I started noticing all my friends glowing up. They were dressing better, getting leaner, hitting the gym, and starting to look like men.

Meanwhile, I felt like I was going in the opposite direction.

That was the first time I ever felt genuinely insecure about myself. I hated looking at my stomach and face fat in the mirror. I became obsessed with wanting to look better and prove myself physically.

I was willing to do almost anything to change how I looked, which eventually led me into the extreme phase I entered at 16.`,
  },

  {
    age: "16",
    title: "Trying To Figure It Out",
    summary:
      "Extreme restriction, basketball, cardio, and finally seeing abs for the first time.",
    images: [
      "/story/age-16-1.jpg",
      "/story/age-16-2.jpg",
      "/story/age-16-3.jpg",
    ],
    text: `At 16, I became obsessed with losing weight.

I was playing basketball constantly and wanted to look and play like Steph Curry, so I was doing insane amounts of cardio through hoops, running, and staying active all day.

But the biggest thing was my calorie restriction.

I was basically eating one meal a day at around 7 or 8 PM after school, studying, cardio, and basketball. Most days I was probably eating around 1200–1500 calories total.

From around June 2021 to early 2022, I went from roughly 85 kg to around 60 kg.

And honestly, when I finally saw abs for the first time, I was shocked.

I couldn’t believe I actually had good genetics underneath all the weight I had gained. Even though my mindset was unhealthy and rooted in insecurity, seeing my frame lean out gave me confidence I had never felt before.

I started talking to more girls again, going out more, and regaining confidence socially. I became extremely lean, super active, and honestly addicted to staying shredded.

But mentally, I still wasn’t healthy. I was doing everything out of fear of getting fat again.`,
  },

  {
    age: "17",
    title: "The Dirty Bulk Era",
    summary:
      "Moving to Canada, gym culture, ego, comparison, and chasing size for validation.",
    images: [
      "/story/age-17-1.jpg",
      "/story/age-17-2.jpg",
      "/story/age-17-3.jpg",
    ],
    text: `At 17, I moved to Canada.

Around that same time, I had just started lifting seriously, and suddenly my insecurity changed completely.

Before, I only cared about being lean and attractive.

Now I cared about being big.

In high school, especially around gym culture and Arab friend groups, there was a huge comparison culture around size, strength, and being “the big guy.” I didn’t want to be seen as the skinny lean kid anymore.

I wanted to be respected physically.

So I started dirty bulking aggressively.

And honestly, it’s one of the biggest mistakes I’ve ever made.

I convinced myself I could get huge without gaining much fat. I started eating absurd amounts of food, force-feeding myself constantly, and ignoring every signal my body was giving me.

I ruined my sleep, productivity, energy, digestion, and appearance.

Eventually, I realized I had simply traded one insecurity for another.`,
  },

  {
    age: "18",
    title: "Losing The Plot",
    summary:
      "Binging, force-feeding, gym obsession, and realizing bigger wasn’t better.",
    images: [
      "/story/age-18-1.jpg",
      "/story/age-18-2.jpg",
      "/story/age-18-3.jpg",
    ],
    text: `At 18, I was at my biggest physically, but probably one of the worst places mentally and physically overall.

I was eating until I felt sick almost every night.

I thought I was “bulking,” but realistically I was just unhealthy.

I trained hard in the gym, but outside of that, I felt terrible. I was constantly tired, taking naps, having terrible digestion, and just felt heavy all the time.

Even though I was stronger, I didn’t actually feel healthier or happier.

Eventually I looked at myself and realized I had completely lost the plot.

I had gone from starving myself to force-feeding myself. Both extremes came from insecurity and comparison.

That realization eventually pushed me to finally start changing for the right reasons.`,
  },

  {
    age: "19",
    title: "Learning Balance",
    summary:
      "Finally understanding health, consistency, digestion, energy, and sustainable habits.",
    images: [
      "/story/age-19-1.jpg",
      "/story/age-19-2.jpg",
      "/story/age-19-3.jpg",
    ],
    text: `At 19, everything slowly started changing mentally.

This time, instead of starving myself like before, I simply cleaned up my eating habits and stopped the extreme binge eating.

I started eating foods that actually made me feel good physically.

I became more active naturally, stayed consistent in the gym, improved my sleep, and slowly lost weight without doing anything extreme.

And honestly, my body responded incredibly fast because deep down, it never wanted to be that overweight.

As I leaned out again, I started realizing something important:

Being healthy affects EVERYTHING.

My energy improved.
My digestion improved.
My mood improved.
My confidence improved.
My productivity improved.

I stopped needing naps constantly and started feeling alive again.

This was also when I started learning what foods my body tolerated well, what routines made me happy, and how important balance actually is.`,
  },

  {
    age: "20",
    title: "Purposeful Fitness",
    summary:
      "Training for health, discipline, longevity, confidence, and purpose instead of insecurity.",
    images: [
      "/story/age-20-1.jpg",
      "/story/age-20-2.jpg",
      "/story/age-20-3.jpg",
    ],
    text: `Now at 20, I finally feel mentally and physically healthier than ever before.

I’m currently around 160 lbs and still slowly cutting toward 155, but for the first time in my life, the process feels easy and sustainable because I’m no longer approaching fitness from extremes.

I’m not starving myself.
I’m not force-feeding myself.

I’m eating foods that are nutritious, filling, enjoyable, and “good enough” to satisfy cravings without destroying how I feel afterward.

I also started identifying my personal habits and triggers.

For example, I realized I binge far less when I eat without watching YouTube or shows. I learned that slowing down and actually focusing on food makes me feel fuller, happier, and healthier.

Mentally, everything feels clearer now.

I stopped seeing the gym as a place to chase validation and started seeing it as a way to honor the body God gave me.

I still want to look good, but not out of insecurity anymore.

I want to feel healthy, energetic, capable, disciplined, and confident. I want fitness to improve my future, my family, my mental health, and my longevity.

And honestly, I can’t wait to share everything I’ve learned throughout this journey.`,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
            My Story
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Different phases.
            <br />
            Different mindsets.
            <br />
            Different versions of me.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-gray-300">
            This is the honest story behind HatemFit — the insecurities,
            mistakes, dirty bulks, starvation phases, mindset shifts, and
            lessons that eventually taught me what healthy fitness actually
            looks like.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-40 px-6 pb-32">
        {eras.map((era) => (
          <div key={era.age}>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                Age {era.age}
              </p>

              <h2 className="mt-5 text-5xl font-black md:text-7xl">
                {era.title}
              </h2>

              <p className="mt-8 max-w-3xl text-2xl leading-10 text-gray-300">
                {era.summary}
              </p>

              <div className="mt-12">
                <p className="text-xl leading-[2.2] text-gray-400 whitespace-pre-line">
                  {era.text}
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {era.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950"
                >
                  <Image
                    src={image}
                    alt={`${era.title} image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}