import { Header } from "@/components/header";
import { Component } from "@/components/component";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";
import { BlogSection } from "@/components/blog-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <Component />
      <BlogSection />
      <Gallery />
      <Footer />
    </>
  );
}
