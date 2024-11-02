import Image from "next/image";
import { images, GalleryImage } from "@/components/galleryImages";

export function Gallery() {
  return (
    <section className=" flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Gallery
        </span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Our Work
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-2xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam
        augue, blandit sit amet varius a, rutrum in metus. Donec mattis sit amet
        nisl ac.
      </p>
      <div className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-7xl mx-auto relative md:h-screen">
        {images.map((image: GalleryImage, index: number) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-sm md:col-span-1 lg:col-span-1 min-h-[12rem] md:min-h-0 ${image.rowSpan}`}
          >
            <Image
              alt={image.alt}
              src={image.src}
              fill
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsqAcAAWUA8f6XWZkAAAAASUVORK5CYII="
              placeholder="blur"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
