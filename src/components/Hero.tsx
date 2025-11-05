import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, User, Settings } from "lucide-react";
import { useState } from "react";
import AudioPlayerModal from "./AudioPlayerModal";

const Hero = () => {
  const [audioModalOpen, setAudioModalOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

        {/* Animated wave bars */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="flex gap-3 items-end h-40">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-gradient-to-t from-primary to-accent rounded-full animate-wave"
                style={{
                  height: `${Math.random() * 100 + 30}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-32 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
                Never Miss a Call
                <br />
                <span className="gradient-text">
                  Ever Again
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Human-quality AI voice reception for Singapore's premium businesses.{" "}
              <span className="text-primary font-normal">Powered by Aveniq.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up mb-20" style={{ animationDelay: "0.3s" }}>
              <Button
                size="xl"
                onClick={scrollToContact}
                className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-glow-lg font-semibold animate-pulse-glow"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-smooth" />
              </Button>
              
              <Button
                variant="secondary"
                size="xl"
                onClick={() => setAudioModalOpen(true)}
                className="font-semibold"
              >
                <Volume2 className="w-5 h-5" />
                Hear a Sample
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative p-8 glass-card hover:border-primary/20 transition-smooth animate-scale-in hover:scale-[1.02]" style={{ animationDelay: "0.4s" }}>
                <div className="text-5xl font-bold gradient-text mb-3">24/7</div>
                <div className="text-lg font-semibold mb-2 text-foreground">Always Available</div>
                <div className="text-sm text-secondary font-light">Never miss a potential booking, day or night</div>
              </div>
              
              <div className="group relative p-8 glass-card hover:border-primary/20 transition-smooth animate-scale-in hover:scale-[1.02]" style={{ animationDelay: "0.5s" }}>
                <div className="text-5xl mb-3">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center shadow-soft">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-lg font-semibold mb-2 text-foreground">Human Touch</div>
                <div className="text-sm text-secondary font-light">Sounding polite, and natural — every time</div>
              </div>
              
              <div className="group relative p-8 glass-card hover:border-primary/20 transition-smooth animate-scale-in hover:scale-[1.02]" style={{ animationDelay: "0.6s" }}>
                <div className="text-5xl mb-3">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center shadow-soft">
                    <Settings className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-lg font-semibold mb-2 text-foreground">Tailored for You</div>
                <div className="text-sm text-secondary font-light">Personalise tone, script, and language style</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AudioPlayerModal 
        open={audioModalOpen}
        onOpenChange={setAudioModalOpen}
        onContactClick={scrollToContact}
      />
    </>
  );
};

export default Hero;
