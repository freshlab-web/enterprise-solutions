import { Calendar, MapPin, Award, Cpu } from "lucide-react";

const Credibility = () => {
  const cards = [
    {
      icon: Calendar,
      title: "Especialistas desde 2014",
      description: "Uma década de experiência em projetos profissionais com drones enterprise.",
    },
    {
      icon: MapPin,
      title: "Atuação nacional",
      description: "Projetos em todo o território brasileiro, com suporte técnico dedicado.",
    },
    {
      icon: Award,
      title: "Projetos homologados",
      description: "Hardware certificado e homologado conforme normas ANAC e regulamentações.",
    },
    {
      icon: Cpu,
      title: "Integração com IA",
      description: "Possibilidade de integração com Monitora Technology™ para análise avançada.",
    },
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card-enterprise group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credibility;
