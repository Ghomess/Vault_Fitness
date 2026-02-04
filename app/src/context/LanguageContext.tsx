import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Language, LanguageContextValue } from "../types/languageType";
import { storage } from "../services/mmkv/mmkv";

import { TranslationKey } from "../types/i18nType";
import { i18n } from "../i18n";

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = storage.getString("language");

    if (stored) {
      setLang(stored as Language);
      i18n.locale = stored;
    } else {
      storage.set("language", lang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLang(lang);
    i18n.locale = lang;
    storage.set("language", lang);
  };

  const t = useCallback(
    (key: TranslationKey, options?: any) => i18n.t(key, options),
    [],
  );

  const value = useMemo(() => ({ language: lang, setLanguage, t }), [lang]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
