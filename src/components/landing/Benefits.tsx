import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Escolha técnica correta desde o início",
    "Redução de riscos e retrabalho",
    "Suporte especializado contínuo",
    "Visão de longo prazo para sua operação",
    "Possibilidade de escalar para automação",
    "Parceria estratégica, não venda pontual",
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill mb-4">Benefícios</span>
            <h2 className="heading-section mt-4">
              Por que escolher a Horus para projetos de hardware
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-md hover:border-primary/30 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
