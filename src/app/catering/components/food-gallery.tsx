'use client'

import Image from "next/image";
import { useState } from "react";

type FoodImage = {
  src: string;
  alt: string;
  rowSpan?: string;
};

const foodImages: FoodImage[] = [
  {
    src: "/images/catering/catering-1.jpg",
    alt: "Gourmet appetizers",
    rowSpan: "md:row-span-2"
  },
  {
    src: "/images/catering/catering-2.jpg",
    alt: "Main course dishes"
  },
  {
    src: "/images/catering/catering-3.jpg",
    alt: "Dessert platter"
  },
  {
    src: "/images/catering/catering-4.jpg",
    alt: "Buffet setup",
    rowSpan: "md:row-span-2"
  }
];

export function FoodGallery() {
  const [selectedImage, setSelectedImage] = useState<FoodImage | null>(null);
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
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Our Culinary Creations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {foodImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-lg cursor-pointer h-64 ${image.rowSpan}`}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                alt={image.alt}
                src={image.src}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 ${isClosing ? `animate-out fade-out duration-${animationDuration}` : `animate-in fade-in duration-${animationDuration}`
            }`}
          onClick={handleClose}
        >
          <div className={`relative w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden ${isClosing ? `animate-out zoom-out-50 duration-${animationDuration}` : `animate-in zoom-in-50 duration-${animationDuration}`
            }`}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
} 