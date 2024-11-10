"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const CafePage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/cafe/cafe-hero.jpg" // You'll need to add this image
          alt="Cafe interior"
          fill
          className="object-cover brightness-75"
          priority
          placeholder="blur"
          blurDataURL="/images/cafe/cafe-hero.jpg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center text-gray-100">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Cafe</h1>
            <p className="text-xl md:text-2xl">Where Every Cup Tells a Story</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Coffee Journey</h2>
            <p className="text-gray-600 mb-4">
              We take pride in serving the finest selection of coffee beans,
              carefully sourced from sustainable farms around the world. Our
              expert baristas craft each cup with precision and passion.
            </p>
            <p className="text-gray-600">
              Pair your coffee with our freshly baked pastries and treats,
              made daily in our kitchen using traditional recipes and the
              finest ingredients.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/cafe/coffee-making.jpg" // You'll need to add this image
              alt="Coffee making process"
              fill
              className="object-cover rounded-lg"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsqAcAAWUA8f6XWZkAAAAASUVORK5CYII="
            />
          </div>
        </motion.div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Glimpses of Our Cafe</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="relative h-[250px]">
                <Image
                  src={`/images/cafe/cafe-${index}.jpg`} // You'll need to add these images
                  alt={`Cafe image ${index}`}
                  fill
                  className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsqAcAAWUA8f6XWZkAAAAASUVORK5CYII="
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Artisanal Coffee",
              description: "Expertly roasted beans and crafted beverages",
              icon: "☕",
            },
            {
              title: "Fresh Bakery",
              description: "Daily baked goods using premium ingredients",
              icon: "🥐",
            },
            {
              title: "Cozy Atmosphere",
              description: "Perfect space for work or relaxation",
              icon: "🪑",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-white shadow-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CafePage; 