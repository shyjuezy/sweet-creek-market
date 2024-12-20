import Link from "next/link";
import Image from "next/image";
import { topDishes, type TopDishes } from "@/data/top-dishes";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturedProducts() {
  return (
    <section className="bg-gradient-to-br from-[#B2DFDB] to-[#E0E0E0]">
      <div className="container flex flex-col items-center gap-6 py-8 sm:gap-7 mx-auto">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
            Customer Favorites
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-2xl text-center">
          Most popular food items based on customer feedback
        </p>
        <Carousel
          opts={{ loop: true, align: "start" }}
          className="mt-6 w-full px-4 xl:px-0"
        >
          <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
          <CarouselContent className="pb-4">
            {topDishes.map((section: TopDishes, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <Card className="h-full shadow-lg">
                    <CardContent className="flex h-full flex-col items-start gap-5 p-5">
                      <div className="relative h-52 w-full">
                        <Image
                          alt={section.alt}
                          src={section.image}
                          fill
                          className="object-cover rounded-lg"
                          priority
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-4">
                        <h4 className="text-lg font-semibold">{section.topic}</h4>
                        <p className="mb-auto text-muted-foreground">
                          {section.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
        </Carousel>
      </div>
    </section>
  );
}
