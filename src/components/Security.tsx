import { Shield, Lock, Database, Eye } from "lucide-react";

const Security = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption protecting all voice data and customer information.",
    },
    {
      icon: Lock,
      title: "PDPA Ready",
      description: "Built with Singapore's Personal Data Protection Act principles in mind.",
    },
    {
      icon: Database,
      title: "Secure Infrastructure",
      description: "Hosted on enterprise-grade servers with robust security protocols.",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Complete logs of all interactions for your peace of mind.",
    },
  ];
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mx-auto mb-8 shadow-soft">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Your Data is <span className="gradient-text">Secure</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary">
              Enterprise-grade security built for Singapore businesses
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 animate-slide-up">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 glass-card hover:border-primary/20 text-center transition-smooth hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-6 group-hover:text-accent transition-smooth" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
