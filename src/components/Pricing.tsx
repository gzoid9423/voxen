import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Pricing = () => {

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8">
            Pay-as-you-go for maintenance and running costs.
          </p>
          <p className="text-base text-foreground/60 mb-12">
            Contact us for a custom quote tailored to your business needs.
          </p>
          
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToContact}
            className="shadow-glow hover:shadow-glow-lg"
          >
            Book a Free Demo
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
