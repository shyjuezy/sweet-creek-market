import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-16 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-6 text-center">Our Family Story</h1>

        <div className="mb-12 relative h-[12rem] md:h-[24rem] lg:h-[36rem] rounded-lg overflow-hidden">
          <Image
            src="/images/about/family.jpg"
            alt="Our family restaurant"
            fill
            className="object-cover"
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsqAcAAWUA8f6XWZkAAAAASUVORK5CYII="
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-semibold mb-4">A Tradition of Flavor & Family</h2>

          <p className="mb-6">
            For three generations, our family has been bringing people together through the love of good food.
            What started in 1975 as a small family kitchen with our grandmother's cherished recipes has grown
            into the warm, welcoming establishment you see today.
          </p>

          <p className="mb-6">
            Every dish we serve carries with it the passion, care, and dedication that our grandmother, Maria,
            poured into her cooking. From hand-rolling pasta on Sunday mornings to selecting the freshest
            ingredients from local markets, she taught us that food is more than sustenance—it's a way to
            show love and create memories.
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-4">Our Values</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Family First</h3>
              <p>We treat every guest like family, because to us, that's exactly what you are.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Quality & Tradition</h3>
              <p>We honor traditional recipes while using the finest, locally-sourced ingredients.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p>We're proud to be part of this community and give back whenever we can.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p>We're committed to environmental responsibility in all our practices.</p>
            </div>
          </div>

          <p className="mb-6">
            Today, our children are learning these same values, ensuring that our family's dedication to
            quality, warmth, and hospitality continues for generations to come. When you dine with us,
            you're not just having a meal—you're becoming part of our story.
          </p>

          <div className="text-center mt-12">
            <p className="italic text-xl">
              "Food brings people together on many different levels. It's nourishment of the soul and body;
              it's truly love." - Maria, Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}