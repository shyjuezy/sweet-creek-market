import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section className="py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Let us help you plan your next event. Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>📞 (555) 123-4567</p>
                  <p>📧 catering@example.com</p>
                  <p>📍 123 Main Street, City, State 12345</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Phone" type="tel" />
            <Textarea placeholder="Tell us about your event" rows={6} />
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
} 