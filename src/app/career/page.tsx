import { CareerForm } from "@/app/career/components/career-form";

export default function CareerPage() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl font-bold text-center mb-6">
          Join Our Team
        </h1>
        <p className="text-muted-foreground text-center mb-12">
          We're always looking for talented individuals to join our growing team.
          Fill out the form below and we'll get back to you soon.
        </p>
        <CareerForm />
      </div>
    </main>
  );
} 