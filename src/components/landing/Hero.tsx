import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Settings, Headphones } from "lucide-react";
import heroDrone from "@/assets/hero-drone.jpg";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToSolutions = () => {
    const element = document.getElementById("solutions");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const features = [{
    icon: Shield,
    text: "Drones DJI Enterprise"
  }, {
    icon: Zap,
    text: "DJI Dock"
  }, {
    icon: Settings,
    text: "Projetos sob medida"
  }, {
    icon: Headphones,
    text: "Suporte técnico especializado"
  }];
  return <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <span className="pill mb-4">Hardware Enterprise</span>
              <h1 className="heading-display mt-4">
                Hardware profissional para operações críticas
              </h1>
              <p className="text-body-large mt-6 max-w-xl">
                Drones Enterprise, DJI Dock e projetos de hardware sob medida para operações em grande escala.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => <div key={index} className="flex items-center gap-2 px-4 py-2 bg-surface rounded-md border border-border">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>)}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} variant="hero" size="xl">
                Solicitar contato técnico
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button onClick={scrollToSolutions} variant="heroOutline" size="xl">
                Ver soluções completas
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in-up-delay-2">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img alt="Drone DJI Enterprise em operação industrial sobre usina solar" className="w-full h-auto object-cover aspect-[4/3]" src="/lovable-uploads/01ff3478-a295-4544-8e5e-853526af05c7.png" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card border border-border rounded-md p-4 shadow-lg">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Desde</p>
              <p className="text-2xl font-bold text-foreground">2014</p>
              <p className="text-sm text-muted-foreground">Especialistas em drones</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;