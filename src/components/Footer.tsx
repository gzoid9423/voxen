const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">AVENIQ</h3>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-secondary">
            <a href="mailto:hello@aveniq.sg" className="hover:text-primary transition-smooth text-lg">
              hello@aveniq.sg
            </a>
            <span className="hidden sm:block">•</span>
            <a href="tel:+6512345678" className="hover:text-primary transition-smooth text-lg">
              +65 1234 5678
            </a>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Aveniq. AI-powered voice reception for Singapore's premium businesses.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
