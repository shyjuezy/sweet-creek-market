import { Header } from "@/components/header";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";
import { FeaturedProducts } from "@/components/featured-products";
import { HeroSection } from "@/components/hero-section";
import TestimonialSection from '@/components/testimonial-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <Gallery />
      <TestimonialSection />
    </>
  );
}
