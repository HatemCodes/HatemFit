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
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
            Gallery
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            The journey.
          </h1>

          <p className="mt-10 text-xl leading-10 text-gray-300">
            Different phases. Different mindsets. Different versions of me.
          </p>
        </div>

        <div className="mt-20 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="mb-6 overflow-hidden rounded-[2rem] bg-gray-950"
            >
              <Image
                src={photo}
                alt={`Gallery image ${index + 1}`}
                width={800}
                height={1200}
                className="h-auto w-full object-cover transition duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}