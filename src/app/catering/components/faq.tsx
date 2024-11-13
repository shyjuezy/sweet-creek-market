import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We currently serve the greater metropolitan area and surrounding suburbs within a 50-mile radius."
  },
  {
    question: "What is your minimum guest count?",
    answer: "Our minimum guest count is 20 people for most events. For smaller groups, please contact us for special arrangements."
  },
  {
    question: "Do you provide staffing?",
    answer: "Yes, we provide professional service staff including servers, bartenders, and event captains as needed."
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Absolutely! We can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and other allergies or restrictions."
  }
];

export function FAQ() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 