import { Check, AlertCircle } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    "Empresas de energia (solar, utilities, O&M)",
    "Telecom e infraestrutura de comunicação",
    "Indústrias e portos",
    "Órgãos públicos e smart cities",
    "Operações de segurança patrimonial",
    "Empresas com ativos distribuídos",
  ];

  return (
    <section id="solutions" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="pill mb-4">Público-alvo</span>
          <h2 className="heading-section mt-4">
            Projetado para operações profissionais
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-md hover:border-primary/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{audience}</span>
              </div>
            ))}
          </div>

          <div className="bg-surface border border-border rounded-md p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Atendimento exclusivo corporativo
                </h3>
                <p className="text-muted-foreground">
                  Nosso foco está em operações profissionais e empresas que buscam soluções de hardware de alto desempenho. 
                  Não atendemos uso recreativo ou hobbista.
                </p>
              </div>
            </div>
            
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Trabalhamos exclusivamente com projetos B2B, oferecendo consultoria técnica, 
                homologação e suporte especializado para operações críticas em escala empresarial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
