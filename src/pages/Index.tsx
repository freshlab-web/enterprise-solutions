import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Credibility from "@/components/landing/Credibility";
import TargetAudience from "@/components/landing/TargetAudience";
import Differentials from "@/components/landing/Differentials";
import HardwareSolutions from "@/components/landing/HardwareSolutions";
import Integration from "@/components/landing/Integration";
import Benefits from "@/components/landing/Benefits";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Horus Smart Detections | Hardware Profissional para Drones Enterprise e DJI Dock</title>
        <meta 
          name="description" 
          content="Especialistas em drones enterprise, DJI Dock e projetos de hardware sob medida para operações críticas. Consultoria técnica e suporte especializado desde 2014." 
        />
        <meta name="keywords" content="drones enterprise, DJI Dock, drones profissionais, hardware drone, inspeção aérea, automação drone" />
        <link rel="canonical" href="https://horus.com.br" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Credibility />
          <TargetAudience />
          <Differentials />
          <HardwareSolutions />
          <Integration />
          <Benefits />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
