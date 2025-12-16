import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Cpu, Cloud } from "lucide-react";

const Integration = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="pill mb-4">Arquitetura integrada</span>
            <h2 className="heading-section mt-4 mb-6">
              O hardware como parte de uma arquitetura maior
            </h2>
            <p className="text-body mb-8">
              O hardware pode ser adquirido isoladamente, mas também pode evoluir 
              para uma solução completa de operação remota, automação e análise por 
              inteligência artificial através do Monitora Technology™.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">Operação remota</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">Automação de missões</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">Análise por IA com Monitora Technology™</span>
              </div>
            </div>

            <Button variant="heroOutline" size="lg" onClick={() => {
              const element = document.getElementById("rd-column-jsdbj8lz");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "#rd-column-jsdbj8lz";
              }
            }}>
              Conheça as soluções automatizadas
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-md p-6 h-32 flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground text-center">Hardware Isolado</span>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-md p-6 h-40 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary text-center">Operação Remota</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-primary/20 border border-primary/30 rounded-md p-6 h-40 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary text-center">Automação + Dock</span>
                </div>
                <div className="bg-primary border border-primary rounded-md p-6 h-32 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-foreground text-center">IA + Monitora</span>
                </div>
              </div>
            </div>
            
            {/* Connecting lines visualization */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
