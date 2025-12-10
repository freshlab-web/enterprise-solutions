import { Search, Target, FileCheck, Link, GraduationCap, Rocket } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Search,
      title: "Análise do cenário operacional",
      description: "Avaliamos suas necessidades antes de indicar qualquer equipamento.",
    },
    {
      icon: Target,
      title: "Indicação do hardware ideal",
      description: "Recomendação técnica baseada em cada caso de uso específico.",
    },
    {
      icon: FileCheck,
      title: "Homologação técnica",
      description: "Garantia de conformidade com todas as regulamentações vigentes.",
    },
    {
      icon: Link,
      title: "Integração com Dock",
      description: "Preparação para automação e operação remota futura.",
    },
    {
      icon: GraduationCap,
      title: "Treinamento e suporte",
      description: "Capacitação da equipe e suporte técnico contínuo.",
    },
    {
      icon: Rocket,
      title: "Evolução para IA",
      description: "Possibilidade de escalar para análise inteligente e operação remota.",
    },
  ];

  return (
    <section id="differentials" className="section-padding bg-surface">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="pill mb-4">Nosso diferencial</span>
          <h2 className="heading-section mt-4">
            Mais do que vender drones, entregamos projetos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="card-enterprise group"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-primary pl-6 py-4 bg-card rounded-r-md">
            <p className="text-lg font-medium text-foreground italic">
              "O hardware certo evita custos, retrabalho e limitações no futuro."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
