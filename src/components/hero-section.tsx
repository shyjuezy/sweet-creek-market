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
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsqAcAAWUA8f6XWZkAAAAASUVORK5CYII="
        />
      </div>

    </section>
  );
}
