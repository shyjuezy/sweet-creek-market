import { Header } from "@/components/header";
import { Component } from "@/components/component";
import { Component2 } from "@/components/component-2";
import { SocialProof } from "@/components/social-proof";
import { Gallery } from "@/components/gallery";
import { Pricing } from "@/components/pricing";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Component />
      <Component2 />
      <SocialProof />
      <Gallery />
      <Pricing />
      <CtaSection />
      <Footer />
    </>
  );
}
