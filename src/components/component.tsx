import Image from "next/image";

export function Component() {
  return (
    <section className="relative text-center pt-[4.5rem]">
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
