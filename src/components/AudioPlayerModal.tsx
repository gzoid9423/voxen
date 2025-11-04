import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Play, Pause } from "lucide-react";
import { useState } from "react";

interface AudioPlayerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContactClick: () => void;
}

const AudioPlayerModal = ({ open, onOpenChange, onContactClick }: AudioPlayerModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Audio playback logic would go here
  };

  const handleContactClick = () => {
    onOpenChange(false);
    onContactClick();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] bg-background border-border p-0 overflow-hidden">
        <div className="relative h-full flex flex-col items-center justify-center p-12">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-foreground/60 hover:text-foreground"
            onClick={() => onOpenChange(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Animated waveform background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="flex gap-2 items-end h-64">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-gradient-to-t from-primary to-accent rounded-full animate-wave"
                  style={{
                    height: `${Math.random() * 100 + 30}%`,
                    animationDelay: `${i * 0.08}s`,
                    animationDuration: isPlaying ? "1.2s" : "3s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hear <span className="gradient-text">Aveniq</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience how our AI handles real customer conversations with natural, human-like warmth.
            </p>

            {/* Play/Pause button */}
            <Button
              size="xl"
              onClick={togglePlay}
              className="w-24 h-24 rounded-full bg-primary hover:bg-primary/90 shadow-glow-lg transition-smooth"
            >
              {isPlaying ? (
                <Pause className="w-10 h-10" />
              ) : (
                <Play className="w-10 h-10 ml-1" />
              )}
            </Button>

            {/* CTA */}
            <div className="pt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Interested in a live demo tailored to your business?
              </p>
              <Button
                size="xl"
                onClick={handleContactClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
              >
                Book a Free Demo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AudioPlayerModal;
