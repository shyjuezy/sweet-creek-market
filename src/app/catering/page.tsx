import { CateringHero } from "@/app/catering/components/catering-hero";
import { CateringServices } from "@/app/catering/components/catering-services";
import { FoodGallery } from "@/app/catering/components/food-gallery";
import { ContactSection } from "@/app/catering/components/contact-section";
import { FAQ } from "@/app/catering/components/faq";

export default function CateringPage() {
  return (
    <main className="min-h-screen">
      <CateringHero />
      <CateringServices />
      <FoodGallery />
      <ContactSection />
      <FAQ />
    </main>
  );
} 