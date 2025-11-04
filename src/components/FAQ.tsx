import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Can your AI handle Chinese or local accents?",
      answer: "Yes! Our AI supports Mandarin Chinese and is trained on Singapore English, ensuring natural conversations with your local customers.",
    },
    {
      question: "Do I need to replace my receptionist?",
      answer: "Not at all. Our AI works alongside your team, handling overflow calls, after-hours inquiries, and routine bookings so your staff can focus on in-person customer service.",
    },
    {
      question: "How long does setup take?",
      answer: "Most businesses are up and running within 2-3 business days. We handle all the technical setup and integration with your existing systems.",
    },
    {
      question: "What if a call is too complex for the AI?",
      answer: "The AI intelligently recognizes when a call needs human attention and can transfer to your staff or take detailed messages for follow-up.",
    },
    {
      question: "Can it integrate with my existing booking system?",
      answer: "Yes, we integrate with most major booking and CRM systems including Cliniko, Timely, SevenRooms, and more. Custom integrations are available for Enterprise plans.",
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "All plans are month-to-month with no lock-in contracts. You can upgrade, downgrade, or cancel at any time with 30 days notice.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our AI voice reception
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-slide-up">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-card hover:shadow-soft transition-smooth border-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
