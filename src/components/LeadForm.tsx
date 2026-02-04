import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, Phone, Building2, User } from 'lucide-react';

// 🔴 1. COLE A URL QUE VOCÊ GEROU NO APPS SCRIPT AQUI:
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzo43WnKnVFjTssp_mqJ-dOIDbj7Ssnw9EE37wjSkGxNbjq3aS57aojXqSh3Ax8YXQgWw/exec";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validações
    if (!formData.name.trim()) {
      toast.error('Por favor, insira seu nome');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast.error('Por favor, insira um email válido');
      return;
    }
    if (!formData.phone.trim()) {
      toast.error('Por favor, insira seu telefone');
      return;
    }

    setIsSubmitting(true);

    try {
      // 🔴 2. Captura o IP (Opcional, mas útil)
      let userIp = 'IP Não identificado';
      try {
        const ipReq = await fetch('https://api.ipify.org?format=json');
        const ipJson = await ipReq.json();
        userIp = ipJson.ip;
      } catch (err) {
        console.warn("Não foi possível obter o IP");
      }

      // 🔴 3. Prepara os dados para o Google Sheets
      // As chaves aqui (nome, email...) devem ser iguais ao esperado no script do Google
      const payload = {
        nome: formData.name,
        email: formData.email,
        telefone: formData.phone,
        mensagem: formData.company ? `Empresa: ${formData.company}` : '', // Envia a empresa no campo mensagem
        ip: userIp
      };

      // 🔴 4. Envia os dados
      // 'no-cors' não permite ler a resposta, mas envia os dados. 
      // O 'text/plain' é o truque para funcionar sem preflight.
      await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });

      // Sucesso
      toast.success('Obrigado! Entraremos em contato em breve.');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
      });

    } catch (error) {
      console.error(error);
      toast.error('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-5">
      {/* Campo Nome */}
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
          <User size={14} className="text-primary flex-shrink-0" />
          Nome Completo
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          className="border-b-2 border-primary bg-white text-foreground placeholder:text-muted-foreground text-sm
                     focus:outline-none focus:ring-0 focus:border-primary rounded-none px-3 py-2.5 h-11 leading-tight align-middle"
          required
        />
      </div>

      {/* Campo Empresa */}
      <div className="space-y-2">
        <Label htmlFor="company" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
          <Building2 size={14} className="text-primary flex-shrink-0" />
          Empresa (Opcional)
        </Label>
        <Input
          id="company"
          name="company"
          type="text"
          placeholder="Nome da sua empresa"
          value={formData.company}
          onChange={handleChange}
          className="border-b-2 border-primary bg-white text-foreground placeholder:text-muted-foreground text-sm
                     focus:outline-none focus:ring-0 focus:border-primary rounded-none px-3 py-2.5 h-11 leading-tight align-middle"
        />
      </div>

      {/* Campo Telefone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
          <Phone size={14} className="text-primary flex-shrink-0" />
          Telefone
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(11) 99999-9999"
          value={formData.phone}
          onChange={handleChange}
          className="border-b-2 border-primary bg-white text-foreground placeholder:text-muted-foreground text-sm
                     focus:outline-none focus:ring-0 focus:border-primary rounded-none px-3 py-2.5 h-11 leading-tight align-middle"
          required
        />
      </div>

      {/* Campo Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
          <Mail size={14} className="text-primary flex-shrink-0" />
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange}
          className="border-b-2 border-primary bg-white text-foreground placeholder:text-muted-foreground text-sm
                     focus:outline-none focus:ring-0 focus:border-primary rounded-none px-3 py-2.5 h-11 leading-tight align-middle"
          required
        />
      </div>

      <div className="divider-red my-6" />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-cta bg-primary hover:bg-primary/90 text-white text-sm sm:text-base py-3 sm:py-4"
      >
        {isSubmitting ? 'Enviando...' : 'Fale com a Gente'}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Responderemos em até 24 horas
      </p>
    </form>
  );
}