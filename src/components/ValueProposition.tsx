import { Phone, Calendar, Shield } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Phone,
      title: "Never Miss a Call",
      description: "Your AI receptionist answers every call instantly, even when you're busy or after hours",
    },
    {
      icon: Calendar,
      title: "Seamless Booking",
      description: "Automatically schedules appointments and syncs directly with your calendar system",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Your data is encrypted, secure, and fully controlled by you",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            The Problem with <span className="gradient-text">Traditional Reception</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            Missed calls mean missed revenue. Overwhelmed staff, after-hours calls, and manual booking lead to frustrated customers and lost opportunities. Our AI voice reception solves this—intelligently, reliably, and affordably.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group p-10 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 shadow-elegant hover:shadow-glow transition-smooth animate-slide-up hover:scale-105"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-soft">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-glow transition-smooth" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
