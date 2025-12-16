import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <img 
              src="https://cdn.jsdelivr.net/gh/freshlab-web/enterprise-solutions@main/dist/assets/horus-logo-e8lk5uFZ.png" 
              alt="Horus Smart Detections" 
              className="h-8 md:h-10 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Soluções
            </a>
            <a href="#differentials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Diferenciais
            </a>
            <a href="#hardware" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Hardware
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>

          <Button onClick={scrollToContact} variant="hero" size="lg">
            Falar com especialista
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
