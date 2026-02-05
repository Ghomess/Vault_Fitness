import { TranslationKey } from "./i18nType";

export type Translate = (key: TranslationKey, options?: any) => string;
export type Language = "en" | "pt" | "es";

export type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translate;
};
