import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Particles } from "@/components/magicui/particles";

export function Component() {
  return (
    <section className="relative text-center pt-[4.5rem]">
      <div className="w-full relative h-[12rem] md:h-[24rem] max-w-full lg:h-[36rem]">
        <Image alt="Image" src="/images/hero.png" fill={true} objectFit="cover" objectPosition="top" className="max-w-full"/>
      </div>
      <h1 className="bg-gradient-to-br from-foreground from-30% to-foreground/40 bg-clip-text py-6 text-center text-5xl font-medium font-heading leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] caret-foreground">
        Magic UI is the new way to build landing pages.
      </h1>
      <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] max-w-xl mx-auto">
        Beautifully designed, animated components and templates built with Tailwind CSS, React and
        Framer Motion.
      </p>
      <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg opacity-0 ease-in-out [--animation-delay:600ms]">
        <span>Get Started for free</span>
        <ArrowRight
          size={20}
          className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        />
      </Button>
      <div className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
        <div className="rounded-xl border border-white/10 bg-white/10 bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,hsl(var(--accent)),hsl(var(--accent)),transparent_40%)] before:animate-image-glow before:opacity-0">
          <BorderBeam size={200} anchor={90} duration={10} borderWidth={1.5} />
          <img
            alt="Hero Image"
            src="/images/hero-dark.png"
            className="relative w-full h-full rounded-[inherit] object-contain border"
          />
        </div>
      </div>
      <Particles
        ease={70}
        size={0.05}
        color="#ffffff"
        quantity={100}
        staticity={40}
        className="absolute inset-0 -z-10 h-full"
      />
    </section>
  );
}
