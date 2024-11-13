import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Corporate Events",
    description: "Professional catering for meetings, conferences, and company celebrations."
  },
  {
    title: "Weddings",
    description: "Customized menus and service for your special day."
  },
  {
    title: "Private Parties",
    description: "Intimate gatherings and celebrations catered to perfection."
  },
  {
    title: "Special Events",
    description: "Graduations, anniversaries, and milestone celebrations."
  }
];

export function CateringServices() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 