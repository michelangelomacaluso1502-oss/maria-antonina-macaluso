// 50 languages with code, native name, flag emoji, and text direction.
// Priority languages listed first (it, en, es, fr, de, pt, ru, zh, ja, ar, hi, ko, tr, pl, nl).

export interface LanguageDef {
  code: string;
  name: string; // English name
  native: string; // Native name
  flag: string; // Emoji flag
  dir: "ltr" | "rtl";
}

export const LANGUAGES_50: LanguageDef[] = [
  { code: "it", name: "Italian", native: "Italiano", flag: "🇮🇹", dir: "ltr" },
  { code: "en", name: "English", native: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "es", name: "Spanish", native: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "fr", name: "French", native: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "de", name: "German", native: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "pt", name: "Portuguese", native: "Português", flag: "🇵🇹", dir: "ltr" },
  { code: "ru", name: "Russian", native: "Русский", flag: "🇷🇺", dir: "ltr" },
  { code: "zh", name: "Chinese", native: "中文", flag: "🇨🇳", dir: "ltr" },
  { code: "ja", name: "Japanese", native: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "ar", name: "Arabic", native: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "hi", name: "Hindi", native: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
  { code: "ko", name: "Korean", native: "한국어", flag: "🇰🇷", dir: "ltr" },
  { code: "tr", name: "Turkish", native: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  { code: "pl", name: "Polish", native: "Polski", flag: "🇵🇱", dir: "ltr" },
  { code: "nl", name: "Dutch", native: "Nederlands", flag: "🇳🇱", dir: "ltr" },
  { code: "sv", name: "Swedish", native: "Svenska", flag: "🇸🇪", dir: "ltr" },
  { code: "no", name: "Norwegian", native: "Norsk", flag: "🇳🇴", dir: "ltr" },
  { code: "da", name: "Danish", native: "Dansk", flag: "🇩🇰", dir: "ltr" },
  { code: "fi", name: "Finnish", native: "Suomi", flag: "🇫🇮", dir: "ltr" },
  { code: "cs", name: "Czech", native: "Čeština", flag: "🇨🇿", dir: "ltr" },
  { code: "sk", name: "Slovak", native: "Slovenčina", flag: "🇸🇰", dir: "ltr" },
  { code: "hu", name: "Hungarian", native: "Magyar", flag: "🇭🇺", dir: "ltr" },
  { code: "ro", name: "Romanian", native: "Română", flag: "🇷🇴", dir: "ltr" },
  { code: "bg", name: "Bulgarian", native: "Български", flag: "🇧🇬", dir: "ltr" },
  { code: "el", name: "Greek", native: "Ελληνικά", flag: "🇬🇷", dir: "ltr" },
  { code: "uk", name: "Ukrainian", native: "Українська", flag: "🇺🇦", dir: "ltr" },
  { code: "hr", name: "Croatian", native: "Hrvatski", flag: "🇭🇷", dir: "ltr" },
  { code: "sr", name: "Serbian", native: "Српски", flag: "🇷🇸", dir: "ltr" },
  { code: "sl", name: "Slovenian", native: "Slovenščina", flag: "🇸🇮", dir: "ltr" },
  { code: "lt", name: "Lithuanian", native: "Lietuvių", flag: "🇱🇹", dir: "ltr" },
  { code: "lv", name: "Latvian", native: "Latviešu", flag: "🇱🇻", dir: "ltr" },
  { code: "et", name: "Estonian", native: "Eesti", flag: "🇪🇪", dir: "ltr" },
  { code: "is", name: "Icelandic", native: "Íslenska", flag: "🇮🇸", dir: "ltr" },
  { code: "ga", name: "Irish", native: "Gaeilge", flag: "🇮🇪", dir: "ltr" },
  { code: "cy", name: "Welsh", native: "Cymraeg", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", dir: "ltr" },
  { code: "ca", name: "Catalan", native: "Català", flag: "🇪🇸", dir: "ltr" },
  { code: "eu", name: "Basque", native: "Euskara", flag: "🇪🇸", dir: "ltr" },
  { code: "gl", name: "Galician", native: "Galego", flag: "🇪🇸", dir: "ltr" },
  { code: "mt", name: "Maltese", native: "Malti", flag: "🇲🇹", dir: "ltr" },
  { code: "he", name: "Hebrew", native: "עברית", flag: "🇮🇱", dir: "rtl" },
  { code: "fa", name: "Persian", native: "فارسی", flag: "🇮🇷", dir: "rtl" },
  { code: "ur", name: "Urdu", native: "اردو", flag: "🇵🇰", dir: "rtl" },
  { code: "bn", name: "Bengali", native: "বাংলা", flag: "🇧🇩", dir: "ltr" },
  { code: "ta", name: "Tamil", native: "தமிழ்", flag: "🇮🇳", dir: "ltr" },
  { code: "te", name: "Telugu", native: "తెలుగు", flag: "🇮🇳", dir: "ltr" },
  { code: "ml", name: "Malayalam", native: "മലയാളം", flag: "🇮🇳", dir: "ltr" },
  { code: "th", name: "Thai", native: "ไทย", flag: "🇹🇭", dir: "ltr" },
  { code: "vi", name: "Vietnamese", native: "Tiếng Việt", flag: "🇻🇳", dir: "ltr" },
  { code: "id", name: "Indonesian", native: "Indonesia", flag: "🇮🇩", dir: "ltr" },
  { code: "ms", name: "Malay", native: "Melayu", flag: "🇲🇾", dir: "ltr" },
  { code: "sw", name: "Swahili", native: "Kiswahili", flag: "🇰🇪", dir: "ltr" },
];

export const DEFAULT_LANG = "it";
export const SUPPORTED_LANG_CODES = LANGUAGES_50.map((l) => l.code);
export const LANG_BY_CODE = Object.fromEntries(LANGUAGES_50.map((l) => [l.code, l]));

export function getLang(code: string): LanguageDef {
  return LANG_BY_CODE[code] ?? LANGUAGES_50[0];
}

// Languages that ship with a static JSON translation file in /public/translations.
export const STATIC_TRANSLATION_LANGS = [
  "en", "es", "fr", "de", "pt", "ru", "zh", "ja", "ar", "hi", "ko", "tr", "pl", "nl",
];

export function detectBrowserLang(): string {
  if (typeof navigator === "undefined") return DEFAULT_LANG;
  const raw = navigator.language || navigator.languages?.[0] || DEFAULT_LANG;
  const code = raw.toLowerCase().split("-")[0];
  return SUPPORTED_LANG_CODES.includes(code) ? code : DEFAULT_LANG;
}
