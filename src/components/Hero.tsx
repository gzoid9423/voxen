import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2 } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-glow/10 rounded-full blur-3xl animate-pulse-glow" />

      {/* Animated wave bars */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="flex gap-3 items-end h-40">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-gradient-to-t from-primary to-primary-glow rounded-full animate-wave shadow-glow"
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
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
              <span className="text-foreground/95">Where Every Call</span>
              <br />
              <span className="text-foreground/95">Feels </span>
              <span className="gradient-text animate-shimmer bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto]">
                Human
              </span>
              <br />
              <span className="text-muted-foreground text-5xl md:text-7xl font-light">— Powered by AI</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Enterprise-grade AI voice reception that answers instantly, books naturally, and never takes a day off.{" "}
            <span className="text-primary/80 font-medium">Built for Singapore businesses.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up mb-20" style={{ animationDelay: "0.3s" }}>
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToDemo}
              className="group shadow-glow hover:shadow-glow-lg animate-pulse-glow"
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-smooth" />
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              onClick={scrollToDemo}
              className="border-primary/30 hover:border-primary/60 hover:bg-primary/5 backdrop-blur-xl"
            >
              <Volume2 className="w-5 h-5" />
              Hear a Sample
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative p-8 rounded-3xl bg-card/30 backdrop-blur-2xl border border-primary/20 hover:border-primary/50 shadow-elegant hover:shadow-glow transition-smooth animate-scale-in hover:scale-105 overflow-hidden" style={{ animationDelay: "0.4s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="relative z-10">
                <div className="text-5xl font-bold gradient-text mb-3">24/7</div>
                <div className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">Always Available</div>
                <div className="text-sm text-muted-foreground font-light">Never miss an opportunity, day or night</div>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-3xl bg-card/30 backdrop-blur-2xl border border-primary/20 hover:border-primary/50 shadow-elegant hover:shadow-glow transition-smooth animate-scale-in hover:scale-105 overflow-hidden" style={{ animationDelay: "0.5s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="relative z-10">
                <div className="text-5xl font-bold gradient-text mb-3">
                  <span className="text-3xl">⚡</span>
                </div>
                <div className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">Instant Response</div>
                <div className="text-sm text-muted-foreground font-light">Real-time, human-like conversations</div>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-3xl bg-card/30 backdrop-blur-2xl border border-primary/20 hover:border-primary/50 shadow-elegant hover:shadow-glow transition-smooth animate-scale-in hover:scale-105 overflow-hidden" style={{ animationDelay: "0.6s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="relative z-10">
                <div className="text-5xl font-bold gradient-text mb-3">
                  <span className="text-3xl">🔒</span>
                </div>
                <div className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">Enterprise Security</div>
                <div className="text-sm text-muted-foreground font-light">PDPA-ready data protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
