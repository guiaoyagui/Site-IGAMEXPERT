import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt-BR', label: 'PT', flag: '🇧🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
  ] as const;

  return (
    <div className="flex items-center gap-1 bg-black/20 rounded-lg p-1 border border-primary/20">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
            language === lang.code
              ? 'bg-primary text-white'
              : 'text-gray-400 hover:text-white'
          }`}
          title={lang.label}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
