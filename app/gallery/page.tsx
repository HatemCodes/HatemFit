import Navbar from "../components/Navbar";
import Image from "next/image";

const photos = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/15.jpg",
  "/gallery/16.jpg",
  "/gallery/17.jpg",
  "/gallery/18.jpg",
  "/gallery/19.jpg",
  "/gallery/20.jpg",
  "/gallery/21.jpg",
  "/gallery/22.jpg",
  "/gallery/23.jpg",
  "/gallery/24.jpg",
  "/gallery/25.jpg",
  "/gallery/26.jpg",
  "/gallery/27.jpg",
  "/gallery/28.jpg",
  "/gallery/29.jpg",
  "/gallery/30.jpg",
];

export default function GalleryPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <section className="px-6 pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
            Gallery
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            The journey.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-gray-300">
            Different phases. Different mindsets. Different versions of me.
          </p>
        </div>
      </section>

      <section className="mt-24">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-white/5"
          >
            <Image
              src={photo}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-gray-300">
                HatemFit Archive
              </p>

              <h2 className="mt-6 text-5xl font-black md:text-7xl">
                Phase {index + 1}
              </h2>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}