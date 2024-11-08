import { Header } from "@/components/header";
import { Component } from "@/components/component";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";
import { TopDishesSection } from "@/components/top-dishes";

export default function HomePage() {
  return (
    <>
      <Header />
      <Component />
      <TopDishesSection />
      <Gallery />
      <Footer />
    </>
  );
}
