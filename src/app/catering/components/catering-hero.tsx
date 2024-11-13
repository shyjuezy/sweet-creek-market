import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CateringHero() {
  return (
    <section className="relative py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="font-heading text-4xl md:text-6xl font-bold">
            Exceptional Catering Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring culinary excellence
            to your special events. Experience personalized menus and impeccable service.
          </p>
          <div className="flex gap-4 justify-center">
            {/* <Button size="lg">Get a Quote</Button> */}
            <Link href="/menu">
              <Button size="lg" variant="outline">View Menu</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 