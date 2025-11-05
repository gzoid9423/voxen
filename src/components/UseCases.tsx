import { Heart, Utensils, Dumbbell, Sparkles } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: Heart,
      industry: "Clinics",
      benefit: "Better booking management",
      description: "Handle appointment scheduling and inquiries 24/7",
    },
    {
      icon: Sparkles,
      industry: "Spas & Aesthetic Clinics",
      benefit: "Never miss a booking",
      description: "Maintain your high-end brand with sophisticated call handling",
    },
    {
      icon: Utensils,
      industry: "Restaurants",
      benefit: "Never lose a reservation",
      description: "Manage table bookings even during peak hours",
    },
    {
      icon: Dumbbell,
      industry: "Fitness Studios",
      benefit: "Boost class attendance",
      description: "Easy class bookings and membership inquiries",
    },
  ];

  return (
    <section id="use-cases" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Built for <span className="gradient-text">Premium Service</span> Businesses
          </h2>
          <p className="text-xl text-foreground/70">
            Clinics • Spas • Restaurants • Fitness Studios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group p-10 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-glow transition-smooth animate-slide-up hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-smooth shadow-soft">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-glow transition-smooth" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{useCase.industry}</h3>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
                      {useCase.benefit}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
