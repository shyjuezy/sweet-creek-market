import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative text-center">
      <div className="w-full relative h-[12rem] md:h-[24rem] max-w-full lg:h-[36rem]">
        <Image
          alt="Image"
          src="/images/hero.png"
          fill={true}
          className="object-cover max-w-full"
          style={{ objectPosition: "top" }}
        />
      </div>

    </section>
  );
}
