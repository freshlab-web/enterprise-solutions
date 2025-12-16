const droneEnterprise = "https://cdn.jsdelivr.net/gh/freshlab-web/enterprise-solutions@main/dist/assets/drone-enterprise-COzO7PNf.jpg";
const djiDock = "https://cdn.jsdelivr.net/gh/freshlab-web/enterprise-solutions@main/dist/assets/dji-dock-DGIDKfnV.jpg";
const thermalSensor = "https://cdn.jsdelivr.net/gh/freshlab-web/enterprise-solutions@main/dist/assets/thermal-sensor-BmaKYTIb.jpg";

const HardwareSolutions = () => {
  const solutions = [
    {
      image: droneEnterprise,
      title: "Drones DJI Enterprise",
      description: "Linha completa de drones profissionais para inspeção, mapeamento e monitoramento.",
    },
    {
      image: djiDock,
      title: "DJI Dock",
      description: "Estação de pouso e carregamento automático para operações remotas 24/7.",
    },
    {
      image: thermalSensor,
      title: "Sensores RGB e Térmicos",
      description: "Câmeras e sensores de alta precisão para diferentes aplicações industriais.",
    },
  ];

  return (
    <section id="hardware" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="pill mb-4">Hardware</span>
          <h2 className="heading-section mt-4">
            Principais tecnologias trabalhadas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-md border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="card-enterprise">
            <h3 className="font-semibold text-foreground mb-2">Acessórios e infraestrutura</h3>
            <p className="text-sm text-muted-foreground">
              Baterias, controles, cases de transporte e equipamentos complementares para sua operação.
            </p>
          </div>
          <div className="card-enterprise">
            <h3 className="font-semibold text-foreground mb-2">Estações de carregamento</h3>
            <p className="text-sm text-muted-foreground">
              Soluções de carregamento múltiplo e automação para frotas de drones enterprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareSolutions;
