import { ArrowRight, Zap, TrendingUp, Users, Target } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

/**
 * Home Page - IGAMEXPERT Landing Page
 * Design Philosophy: Minimalist Tech Premium
 * - Black & Red palette (authority + action)
 * - Clean typography hierarchy (Montserrat + Inter)
 * - Mobile-first responsive design
 * - High conversion focus with clear CTAs
 */
export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-foreground relative z-10">
      {/* ==================== HEADER ==================== */}
      <header className="sticky top-0 z-[100] bg-white border-b border-black/10">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="font-bold text-lg md:text-xl hidden sm:inline">IGAMEXPERT</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
              {t('header.sobre')}
            </a>
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">
              {t('header.servicos')}
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
              {t('header.contato')}
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a href="#contato" className="btn-cta bg-primary text-white text-xs md:text-sm px-4 md:px-6 py-2 md:py-3">
              {t('header.faleConosco')}
            </a>
          </div>
        </div>
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section className="hero-section bg-black relative overflow-hidden z-10">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url(/images/hero-bg-green.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Content */}
        <div className="container relative z-10 flex flex-col items-center justify-center text-center py-16 md:py-32">
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 px-4 md:px-0">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {t('hero.titulo')} <span className="text-primary">{t('hero.destaque')}</span> {t('hero.subtitulo')}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              {t('hero.descricao')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a href="#contato" className="btn-cta bg-primary text-white flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                {t('hero.cta1')}
              </a>
              <a href="#servicos" className="btn-cta bg-white text-black border-2 border-primary flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                {t('hero.cta2')}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 md:pt-8 border-t border-primary/30 flex flex-col sm:flex-row justify-center gap-3 md:gap-8 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center justify-center gap-2">
                <Zap size={14} className="text-primary flex-shrink-0" />
                <span>+500 Campanhas</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <TrendingUp size={14} className="text-primary flex-shrink-0" />
                <span>300% ROI</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users size={14} className="text-primary flex-shrink-0" />
                <span>50+ Clientes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Red Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="sobre" className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="space-y-6 px-4 md:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Quem Somos
            </h2>

            <div className="divider-red w-16" />

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              A IGAMEXPERT é uma agência especializada em marketing para o setor de iGaming. Com mais de 10 anos de experiência, ajudamos cassinos online, plataformas de apostas e afiliados a crescer com estratégias de tráfego pago e otimização de conversão.
            </p>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              Nossa metodologia combina análise de dados, criatividade e performance. Cada campanha é customizada para seu público-alvo, garantindo máximo ROI e crescimento sustentável.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-8">
              <div className="card-minimal">
                <div className="text-3xl font-bold text-primary">10+</div>
                <p className="text-sm text-foreground/60">Anos de Experiência</p>
              </div>
              <div className="card-minimal">
                <div className="text-3xl font-bold text-primary">50+</div>
                <p className="text-sm text-foreground/60">Clientes Ativos</p>
              </div>
              <div className="card-minimal">
                <div className="text-3xl font-bold text-primary">300%</div>
                <p className="text-sm text-foreground/60">ROI Médio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="servicos" className="section-padding bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(/images/services-pattern.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto mb-12 md:mb-16 px-4 md:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Nossos Servicos
            </h2>
            <div className="divider-red w-16" />
            <p className="text-gray-300 text-base sm:text-lg mt-6">
              Solucoes completas de marketing para maximizar seu crescimento no iGaming.
            </p>
          </div>

          {/* Services Grid - 3 Pillars */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
            {/* Pillar 1: Player Operations */}
            <div className="group bg-black/50 border border-primary/30 p-8 rounded-lg hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-lg mb-6 group-hover:bg-primary/30 transition-colors">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Player Operations</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Gestão completa de operações de jogadores. Desde onboarding até retenção, otimizamos cada touchpoint para maximizar lifetime value e engagement contínuo.
              </p>
            </div>

            {/* Pillar 2: Risk & Payments */}
            <div className="group bg-black/50 border border-primary/30 p-8 rounded-lg hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-lg mb-6 group-hover:bg-primary/30 transition-colors">
                <TrendingUp size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Risk & Payments</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Gerenciamento de risco e processamento de pagamentos seguros. Integramos soluções de compliance, anti-fraude e múltiplos gateways para operações confiáveis.
              </p>
            </div>

            {/* Pillar 3: Marketing & Creative */}
            <div className="group bg-black/50 border border-primary/30 p-8 rounded-lg hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-lg mb-6 group-hover:bg-primary/30 transition-colors">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Marketing & Creative</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Campanhas criativas de alta performance. Tráfego pago, conteúdo viral, design premium e copywriting persuasivo para máxima conversão.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      {/* ==================== PROOF SECTION ==================== */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher a IGAMEXPERT
          </h2>
          <div className="divider-red w-16 mb-12" />

          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Expertise em iGaming</h3>
                <p className="text-foreground/70">
                  Conhecimento profundo do mercado de cassinos, apostas e afiliados. Entendemos as nuances e regulamentações.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Resultados Comprovados</h3>
                <p className="text-foreground/70">
                  ROI médio de 300%, com clientes gerando milhões em receita. Cada campanha é rastreada e otimizada continuamente.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Suporte Dedicado</h3>
                <p className="text-foreground/70">
                  Equipe disponível para estratégia, otimização e suporte. Você não é apenas um número para nós.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Tecnologia Avançada</h3>
                <p className="text-foreground/70">
                  Ferramentas de automação, tracking e análise. Decisões baseadas em dados reais, não em intuição.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section id="contato" className="section-padding bg-black relative overflow-hidden">
        {/* Background Accent */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(/images/cta-accent.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container relative z-10 max-w-2xl mx-auto px-4 md:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Pronto para Crescer?
            </h2>
            <div className="divider-red w-16 mx-auto mb-6" />
            <p className="text-gray-300 text-base sm:text-lg">
              Preencha o formulario abaixo e um especialista entrara em contato em ate 24 horas.
            </p>
          </div>

          {/* Lead Form */}
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-sm">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-black text-gray-400 border-t border-primary/20">
        <div className="container py-12 md:py-16 px-4 md:px-0">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary flex items-center justify-center text-white font-bold">
                  S
                </div>
                <span className="font-bold text-white">IGAMEXPERT</span>
              </div>
              <p className="text-sm">
                Agência especializada em marketing para iGaming, cassinos e apostas online.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: contato@igamexpert.com</li>
                <li>WhatsApp: +55 11 99999-9999</li>
                <li>São Paulo, Brasil</li>
              </ul>
            </div>
          </div>

          <div className="divider-red mb-8" />

          <div className="text-center text-sm">
            <p>&copy; 2026 IGAMEXPERT. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
