import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Please consent to being contacted");
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with your n8n webhook URL
      const webhookUrl = "https://gzoidx.app.n8n.cloud/webhook-test/lovable";
      
      const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error("Webhook failed");

  toast.success("Demo request received!", {
    description: "We'll contact you within 24 hours",
  });

  setFormData({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
    consent: false,
  });
} catch (error) {
  toast.error("Something went wrong", {
    description: "Please try again or email us directly",
  });
} finally {
  setIsSubmitting(false);
}
};
  return (
    <section id="contact" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Book Your <span className="gradient-text">Free Demo</span>
            </h2>
            <p className="text-lg text-foreground/60 font-light max-w-2xl mx-auto">
              See how Voxen's AI voice reception can transform your business
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-card p-10 shadow-glow animate-slide-up relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth" />
            <div className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Tan"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Company *
                  </label>
                  <Input
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your Business Name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Phone *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+65 9123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Additional Notes
                </label>
                <Textarea
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Tell us about your business and call volume..."
                  rows={4}
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked === true })
                  }
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  I consent to being contacted for a demo and understand that my data will be handled according to Singapore's PDPA
                </label>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Book My Demo
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-foreground/60 font-light">
                Or email us at{" "}
                <a
                  href="mailto:hello@voxen.sg"
                  className="text-accent hover:text-primary transition-smooth font-normal"
                >
                  hello@voxen.sg
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
