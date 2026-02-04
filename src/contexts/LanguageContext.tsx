import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt-BR' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

// Traduções
const translations = {
  'pt-BR': {
    'header.sobre': 'Sobre',
    'header.servicos': 'Serviços',
    'header.contato': 'Contato',
    'header.faleConosco': 'Fale Conosco',
    'hero.titulo': 'Marketing de',
    'hero.destaque': 'Performance',
    'hero.subtitulo': 'para iGaming',
    'hero.descricao': 'Tráfego qualificado, conversão garantida e ROI comprovado para cassinos, apostas e afiliados.',
    'hero.cta1': 'Solicitar Contato',
    'hero.cta2': 'Conhecer Serviços',
    'about.titulo': 'Quem Somos',
    'about.desc1': 'A Seguro Play é uma agência especializada em marketing para o setor de iGaming. Com mais de 10 anos de experiência, ajudamos cassinos online, plataformas de apostas e afiliados a crescer com estratégias de tráfego pago e otimização de conversão.',
    'about.desc2': 'Nossa metodologia combina análise de dados, criatividade e performance. Cada campanha é customizada para seu público-alvo, garantindo máximo ROI e crescimento sustentável.',
    'about.anos': 'Anos de Experiência',
    'about.clientes': 'Clientes Ativos',
    'about.roi': 'ROI Médio',
    'services.titulo': 'Nossos Serviços',
    'services.descricao': 'Soluções completas de marketing para maximizar seu crescimento no iGaming.',
    'services.pillar1': 'Player Operations',
    'services.pillar1.desc': 'Gestão completa de operações de jogadores. Desde onboarding até retenção, otimizamos cada touchpoint para maximizar lifetime value e engagement contínuo.',
    'services.pillar2': 'Risk & Payments',
    'services.pillar2.desc': 'Gerenciamento de risco e processamento de pagamentos seguros. Integramos soluções de compliance, anti-fraude e múltiplos gateways para operações confiáveis.',
    'services.pillar3': 'Marketing & Creative',
    'services.pillar3.desc': 'Campanhas criativas de alta performance. Tráfego pago, conteúdo viral, design premium e copywriting persuasivo para máxima conversão.',
    'proof.titulo': 'Por Que Escolher a Seguro Play',
    'proof.item1': 'Experiência Comprovada',
    'proof.item1.desc': 'Mais de 10 anos no mercado de iGaming com histórico de sucesso.',
    'proof.item2': 'ROI Garantido',
    'proof.item2.desc': 'Campanhas otimizadas com foco em resultados mensuráveis.',
    'proof.item3': 'Suporte 24/7',
    'proof.item3.desc': 'Equipe dedicada sempre disponível para sua agência.',
    'cta.titulo': 'Pronto para Crescer?',
    'cta.descricao': 'Deixe seus dados e um de nossos especialistas entrará em contato em até 24 horas.',
    'form.nome': 'Nome Completo',
    'form.empresa': 'Empresa (Opcional)',
    'form.telefone': 'Telefone',
    'form.email': 'Email',
    'form.enviar': 'Fale com a Gente',
    'form.resposta': 'Responderemos em até 24 horas',
    'footer.empresa': 'Seguro Play',
    'footer.descricao': 'Agência especializada em marketing de performance para iGaming.',
  },
  'en': {
    'header.sobre': 'About',
    'header.servicos': 'Services',
    'header.contato': 'Contact',
    'header.faleConosco': 'Get in Touch',
    'hero.titulo': 'Performance',
    'hero.destaque': 'Marketing',
    'hero.subtitulo': 'for iGaming',
    'hero.descricao': 'Qualified traffic, guaranteed conversion, and proven ROI for casinos, betting platforms, and affiliates.',
    'hero.cta1': 'Request Contact',
    'hero.cta2': 'Explore Services',
    'about.titulo': 'About Us',
    'about.desc1': 'Seguro Play is a specialized marketing agency for the iGaming sector. With over 10 years of experience, we help online casinos, betting platforms, and affiliates grow with paid traffic strategies and conversion optimization.',
    'about.desc2': 'Our methodology combines data analysis, creativity, and performance. Each campaign is customized for your target audience, ensuring maximum ROI and sustainable growth.',
    'about.anos': 'Years of Experience',
    'about.clientes': 'Active Clients',
    'about.roi': 'Average ROI',
    'services.titulo': 'Our Services',
    'services.descricao': 'Complete marketing solutions to maximize your growth in iGaming.',
    'services.pillar1': 'Player Operations',
    'services.pillar1.desc': 'Complete management of player operations. From onboarding to retention, we optimize every touchpoint to maximize lifetime value and continuous engagement.',
    'services.pillar2': 'Risk & Payments',
    'services.pillar2.desc': 'Risk management and secure payment processing. We integrate compliance solutions, fraud prevention, and multiple gateways for reliable operations.',
    'services.pillar3': 'Marketing & Creative',
    'services.pillar3.desc': 'High-performance creative campaigns. Paid traffic, viral content, premium design, and persuasive copywriting for maximum conversion.',
    'proof.titulo': 'Why Choose Seguro Play',
    'proof.item1': 'Proven Experience',
    'proof.item1.desc': 'Over 10 years in the iGaming market with a track record of success.',
    'proof.item2': 'Guaranteed ROI',
    'proof.item2.desc': 'Optimized campaigns focused on measurable results.',
    'proof.item3': '24/7 Support',
    'proof.item3.desc': 'Dedicated team always available for your agency.',
    'cta.titulo': 'Ready to Grow?',
    'cta.descricao': 'Leave your details and one of our specialists will contact you within 24 hours.',
    'form.nome': 'Full Name',
    'form.empresa': 'Company (Optional)',
    'form.telefone': 'Phone',
    'form.email': 'Email',
    'form.enviar': 'Get in Touch',
    'form.resposta': 'We will respond within 24 hours',
    'footer.empresa': 'Seguro Play',
    'footer.descricao': 'Specialized marketing agency for iGaming performance.',
  },
  'es': {
    'header.sobre': 'Acerca de',
    'header.servicos': 'Servicios',
    'header.contato': 'Contacto',
    'header.faleConosco': 'Contáctenos',
    'hero.titulo': 'Marketing de',
    'hero.destaque': 'Rendimiento',
    'hero.subtitulo': 'para iGaming',
    'hero.descricao': 'Tráfico calificado, conversión garantizada y ROI comprobado para casinos, plataformas de apuestas y afiliados.',
    'hero.cta1': 'Solicitar Contacto',
    'hero.cta2': 'Explorar Servicios',
    'about.titulo': 'Quiénes Somos',
    'about.desc1': 'Seguro Play es una agencia especializada en marketing para el sector de iGaming. Con más de 10 años de experiencia, ayudamos a casinos en línea, plataformas de apuestas y afiliados a crecer con estrategias de tráfico pagado y optimización de conversión.',
    'about.desc2': 'Nuestra metodología combina análisis de datos, creatividad y rendimiento. Cada campaña se personaliza para su audiencia objetivo, garantizando máximo ROI y crecimiento sostenible.',
    'about.anos': 'Años de Experiencia',
    'about.clientes': 'Clientes Activos',
    'about.roi': 'ROI Promedio',
    'services.titulo': 'Nuestros Servicios',
    'services.descricao': 'Soluciones completas de marketing para maximizar su crecimiento en iGaming.',
    'services.pillar1': 'Operaciones de Jugadores',
    'services.pillar1.desc': 'Gestión completa de operaciones de jugadores. Desde la incorporación hasta la retención, optimizamos cada punto de contacto para maximizar el valor de por vida y el compromiso continuo.',
    'services.pillar2': 'Riesgo y Pagos',
    'services.pillar2.desc': 'Gestión de riesgos y procesamiento de pagos seguros. Integramos soluciones de cumplimiento, prevención de fraude y múltiples pasarelas para operaciones confiables.',
    'services.pillar3': 'Marketing y Creatividad',
    'services.pillar3.desc': 'Campañas creativas de alto rendimiento. Tráfico pagado, contenido viral, diseño premium y copywriting persuasivo para máxima conversión.',
    'proof.titulo': 'Por Qué Elegir Seguro Play',
    'proof.item1': 'Experiencia Comprobada',
    'proof.item1.desc': 'Más de 10 años en el mercado de iGaming con un historial de éxito.',
    'proof.item2': 'ROI Garantizado',
    'proof.item2.desc': 'Campañas optimizadas enfocadas en resultados medibles.',
    'proof.item3': 'Soporte 24/7',
    'proof.item3.desc': 'Equipo dedicado siempre disponible para su agencia.',
    'cta.titulo': '¿Listo para Crecer?',
    'cta.descricao': 'Deje sus datos y uno de nuestros especialistas se comunicará con usted dentro de 24 horas.',
    'form.nome': 'Nombre Completo',
    'form.empresa': 'Empresa (Opcional)',
    'form.telefone': 'Teléfono',
    'form.email': 'Correo Electrónico',
    'form.enviar': 'Contáctenos',
    'form.resposta': 'Responderemos dentro de 24 horas',
    'footer.empresa': 'Seguro Play',
    'footer.descricao': 'Agencia especializada en marketing de rendimiento para iGaming.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      return (saved as Language) || 'pt-BR';
    }
    return 'pt-BR';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt-BR']] || key;
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
