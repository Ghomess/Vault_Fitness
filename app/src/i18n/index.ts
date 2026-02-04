import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import en from "./en";
import pt from "./pt";
import es from "./es";

export const i18n = new I18n({ en, pt, es });

const locale = Localization.getLocales()[0]?.languageCode ?? "en";

i18n.enableFallback = true;
i18n.defaultLocale = "en";
i18n.locale = locale;
