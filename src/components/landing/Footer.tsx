const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/freshlab-web/enterprise-solutions@main/dist/assets/horus-logo-e8lk5uFZ.png"
              alt="Horus Smart Detections"
              className="h-8 w-auto brightness-0 invert"
            />
          </div>

          <p className="text-sm text-background/70 text-center md:text-left">
            Especialistas em drones, automação aérea e inteligência aplicada.
          </p>

          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Horus Smart Detections
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
