"use client";

import Image from "next/image";
import { images, type GalleryImage } from "@/data/gallery-images";
import { useState } from "react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const animationDuration = 200;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, animationDuration);
  };

  return (
    <>
      <section className="flex flex-col items-center gap-6 py-24 sm:gap-7">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
            Gallery
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam
          augue, blandit sit amet varius a, rutrum in metus. Donec mattis sit
          amet nisl ac.
        </p>
        <div className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-7xl mx-auto relative md:h-screen">
          {images.map((image: GalleryImage, index: number) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-sm md:col-span-1 lg:col-span-1 min-h-[12rem] md:min-h-0 ${image.rowSpan} cursor-pointer`}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                alt={image.alt}
                src={image.src}
                fill
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsqAcAAWUA8f6XWZkAAAAASUVORK5CYII="
                placeholder="blur"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 ${
            isClosing
              ? `animate-out fade-out duration-${animationDuration}`
              : `animate-in fade-in duration-${animationDuration}`
          }`}
          onClick={handleClose}
        >
          <div
            className={`relative w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden ${
              isClosing
                ? `animate-out zoom-out-50 duration-200-${animationDuration}`
                : `animate-in zoom-in-50 duration-${animationDuration}`
            }`}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
