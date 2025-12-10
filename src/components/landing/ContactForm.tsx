import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Nossa equipe técnica entrará em contato em breve.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-graphite">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section text-primary-foreground">
              Fale com um especialista em hardware profissional
            </h2>
            <p className="text-body mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Vamos entender sua operação e indicar o hardware mais adequado para o seu cenário.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-md p-8 md:p-10 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input id="name" name="name" required placeholder="Seu nome completo" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail corporativo *</Label>
                <Input id="email" name="email" type="email" required placeholder="nome@empresa.com.br" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa *</Label>
                <Input id="company" name="company" required placeholder="Nome da empresa" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Cargo</Label>
                <Input id="role" name="role" placeholder="Seu cargo" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="segment">Segmento *</Label>
                <select
                  id="segment"
                  name="segment"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Selecione o segmento</option>
                  <option value="energia">Energia / Solar</option>
                  <option value="telecom">Telecom</option>
                  <option value="industria">Indústria / Portos</option>
                  <option value="publico">Órgão público</option>
                  <option value="seguranca">Segurança patrimonial</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">Interesse principal *</Label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Selecione o interesse</option>
                  <option value="drone">Drone Enterprise</option>
                  <option value="dock">DJI Dock</option>
                  <option value="projeto">Projeto completo</option>
                  <option value="avaliando">Ainda avaliando</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="operation">Descreva brevemente sua operação</Label>
                <Textarea
                  id="operation"
                  name="operation"
                  placeholder="Conte sobre o tipo de operação, área de atuação, volume de atividades..."
                  rows={4}
                />
              </div>

              <div className="md:col-span-2 flex items-start gap-3">
                <Checkbox id="lgpd" name="lgpd" required />
                <Label htmlFor="lgpd" className="text-sm text-muted-foreground font-normal leading-relaxed">
                  Concordo com a coleta e tratamento dos meus dados conforme a LGPD para contato comercial.
                </Label>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center">
              <Button
                type="submit"
                variant="hero"
                size="xl"
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? "Enviando..." : "Solicitar contato técnico"}
                <Send className="w-5 h-5" />
              </Button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Atendimento exclusivo para uso profissional e corporativo.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
