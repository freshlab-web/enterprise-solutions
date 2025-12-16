import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    const element = document.getElementById("rd-column-jsdbj8lz");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "#rd-column-jsdbj8lz";
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback for hash router if needed, though usually elements are on same page
      window.location.href = `#${id}`;
    }
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
            <a href="#solutions" onClick={(e) => handleNavClick(e, "solutions")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Soluções
            </a>
            <a href="#differentials" onClick={(e) => handleNavClick(e, "differentials")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Diferenciais
            </a>
            <a href="#hardware" onClick={(e) => handleNavClick(e, "hardware")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Hardware
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "rd-column-jsdbj8lz")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
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
