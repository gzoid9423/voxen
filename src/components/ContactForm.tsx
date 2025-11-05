import { useState } from "react";
import { toast } from "sonner";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Please consent to being contacted");
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with your n8n webhook URL
      const res = await fetch("/api/contact", {
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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Redefine <span className="gradient-text">Reception</span>
            </h2>
            <p className="text-sm text-foreground/60 mb-8">
              Get a free live demo agent tailored for your business and see how you could benefit.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth text-foreground placeholder:text-muted-foreground"
                  placeholder="John Tan"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth text-foreground placeholder:text-muted-foreground"
                  placeholder="Your Business Pte Ltd"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth text-foreground placeholder:text-muted-foreground"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth text-foreground placeholder:text-muted-foreground"
                  placeholder="+65 9123 4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-2 text-foreground">
                Tell us about your business *
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                required
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="What type of business do you run? What's your typical call volume? Any specific requirements?"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
                className="mt-1 rounded border-border text-primary focus:ring-primary/20"
              />
              <label htmlFor="consent" className="text-sm text-secondary">
                I agree to be contacted by Aveniq regarding this demo request. We respect your privacy and will never share your information.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-smooth shadow-glow hover:shadow-glow-lg"
            >
              {isSubmitting ? "Sending..." : "Book My Demo"}
            </button>
          </form>

          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm text-secondary">
              Prefer email? Reach us directly at{" "}
              <a href="mailto:hello@aveniq.sg" className="text-primary hover:text-primary/80 transition-smooth">
                hello@aveniq.sg
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
