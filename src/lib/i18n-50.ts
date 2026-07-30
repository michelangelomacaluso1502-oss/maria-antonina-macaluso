// 105 languages with code, native name, flag emoji, and text direction.
// Priority languages listed first (it, en, es, fr, de, pt, ru, zh, ja, ar, hi, ko, tr, pl, nl).
// 14 langs ship with static JSON in /public/translations; the rest use runtime Google Translate via /api/translate.

export interface LanguageDef {
  code: string;
  name: string; // English name
  native: string; // Native name
  flag: string; // Emoji flag
  dir: "ltr" | "rtl";
}

export const LANGUAGES_50: LanguageDef[] = [
  // --- Priority 15 (with static JSON preloaded for top 14) ---
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
  // --- European (16-35) ---
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
  // --- Middle East & South Asia (36-50) ---
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
  // === NEW: 51-105 (55 additional languages for 100+ support) ===
  // --- Asia & Pacific (51-70) ---
  { code: "fil", name: "Filipino", native: "Filipino", flag: "🇵🇭", dir: "ltr" },
  { code: "ne", name: "Nepali", native: "नेपाली", flag: "🇳🇵", dir: "ltr" },
  { code: "si", name: "Sinhala", native: "සිංහල", flag: "🇱🇰", dir: "ltr" },
  { code: "my", name: "Burmese", native: "ဗမာ", flag: "🇲🇲", dir: "ltr" },
  { code: "km", name: "Khmer", native: "ខ្មែរ", flag: "🇰🇭", dir: "ltr" },
  { code: "lo", name: "Lao", native: "ລາວ", flag: "🇱🇦", dir: "ltr" },
  { code: "mn", name: "Mongolian", native: "Монгол", flag: "🇲🇳", dir: "ltr" },
  { code: "ps", name: "Pashto", native: "پښتو", flag: "🇦🇫", dir: "rtl" },
  { code: "ku", name: "Kurdish", native: "Kurdî", flag: "🏳️", dir: "ltr" },
  { code: "az", name: "Azerbaijani", native: "Azərbaycan", flag: "🇦🇿", dir: "ltr" },
  { code: "uz", name: "Uzbek", native: "Oʻzbek", flag: "🇺🇿", dir: "ltr" },
  { code: "kk", name: "Kazakh", native: "Қазақ", flag: "🇰🇿", dir: "ltr" },
  { code: "ky", name: "Kyrgyz", native: "Кыргызча", flag: "🇰🇬", dir: "ltr" },
  { code: "tg", name: "Tajik", native: "Тоҷикӣ", flag: "🇹🇯", dir: "ltr" },
  { code: "tk", name: "Turkmen", native: "Türkmen", flag: "🇹🇲", dir: "ltr" },
  { code: "yi", name: "Yiddish", native: "ייִדיש", flag: "🏳️", dir: "rtl" },
  { code: "haw", name: "Hawaiian", native: "ʻŌlelo Hawaiʻi", flag: "🌺", dir: "ltr" },
  { code: "mi", name: "Maori", native: "Māori", flag: "🇳🇿", dir: "ltr" },
  { code: "sm", name: "Samoan", native: "Gagana Samoa", flag: "🇼🇸", dir: "ltr" },
  { code: "to", name: "Tongan", native: "Lea Faka-Tonga", flag: "🇹🇴", dir: "ltr" },
  // --- Africa (71-90) ---
  { code: "yo", name: "Yoruba", native: "Yorùbá", flag: "🇳🇬", dir: "ltr" },
  { code: "ig", name: "Igbo", native: "Igbo", flag: "🇳🇬", dir: "ltr" },
  { code: "ha", name: "Hausa", native: "Hausa", flag: "🇳🇬", dir: "ltr" },
  { code: "am", name: "Amharic", native: "አማርኛ", flag: "🇪🇹", dir: "ltr" },
  { code: "zu", name: "Zulu", native: "isiZulu", flag: "🇿🇦", dir: "ltr" },
  { code: "xh", name: "Xhosa", native: "isiXhosa", flag: "🇿🇦", dir: "ltr" },
  { code: "af", name: "Afrikaans", native: "Afrikaans", flag: "🇿🇦", dir: "ltr" },
  { code: "st", name: "Sesotho", native: "Sesotho", flag: "🇱🇸", dir: "ltr" },
  { code: "sn", name: "Shona", native: "ChiShona", flag: "🇿🇼", dir: "ltr" },
  { code: "so", name: "Somali", native: "Soomaali", flag: "🇸🇴", dir: "ltr" },
  { code: "rw", name: "Kinyarwanda", native: "Kinyarwanda", flag: "🇷🇼", dir: "ltr" },
  { code: "ln", name: "Lingala", native: "Lingála", flag: "🇨🇩", dir: "ltr" },
  { code: "lg", name: "Luganda", native: "Luganda", flag: "🇺🇬", dir: "ltr" },
  { code: "mg", name: "Malagasy", native: "Malagasy", flag: "🇲🇬", dir: "ltr" },
  { code: "ny", name: "Chichewa", native: "Chichewa", flag: "🇲🇼", dir: "ltr" },
  { code: "ti", name: "Tigrinya", native: "ትግርኛ", flag: "🇪🇷", dir: "ltr" },
  { code: "wo", name: "Wolof", native: "Wolof", flag: "🇸🇳", dir: "ltr" },
  { code: "ff", name: "Fulani", native: "Fulfulde", flag: "🇸🇳", dir: "ltr" },
  { code: "bm", name: "Bambara", native: "Bamanankan", flag: "🇲🇱", dir: "ltr" },
  { code: "tn", name: "Tswana", native: "Setswana", flag: "🇧🇼", dir: "ltr" },
  { code: "ts", name: "Tsonga", native: "Xitsonga", flag: "🇿🇦", dir: "ltr" },
  // --- Americas, Europe minority & constructed (91-105) ---
  { code: "gn", name: "Guarani", native: "Avañeẽ", flag: "🇵🇾", dir: "ltr" },
  { code: "qu", name: "Quechua", native: "Runa Simi", flag: "🇵🇪", dir: "ltr" },
  { code: "ay", name: "Aymara", native: "Aymar aru", flag: "🇧🇴", dir: "ltr" },
  { code: "ht", name: "Haitian Creole", native: "Kreyòl Ayisyen", flag: "🇭🇹", dir: "ltr" },
  { code: "ty", name: "Tahitian", native: "Reo Tahiti", flag: "🇵🇫", dir: "ltr" },
  { code: "fj", name: "Fijian", native: "Vosa Vakaviti", flag: "🇫🇯", dir: "ltr" },
  { code: "co", name: "Corsican", native: "Corsu", flag: "🇫🇷", dir: "ltr" },
  { code: "br", name: "Breton", native: "Brezhoneg", flag: "🇫🇷", dir: "ltr" },
  { code: "oc", name: "Occitan", native: "Occitan", flag: "🇫🇷", dir: "ltr" },
  { code: "sc", name: "Sardinian", native: "Sardu", flag: "🇮🇹", dir: "ltr" },
  { code: "rm", name: "Romansh", native: "Rumantsch", flag: "🇨🇭", dir: "ltr" },
  { code: "la", name: "Latin", native: "Latina", flag: "🏛️", dir: "ltr" },
  { code: "eo", name: "Esperanto", native: "Esperanto", flag: "🌍", dir: "ltr" },
  { code: "jw", name: "Javanese", native: "Basa Jawa", flag: "🇮🇩", dir: "ltr" },
  { code: "su", name: "Sundananese", native: "Basa Sunda", flag: "🇮🇩", dir: "ltr" },
];

// Alias for clarity (the array now contains 105 languages, name kept for backward compat)
export const LANGUAGES = LANGUAGES_50;

export const DEFAULT_LANG = "it";
export const SOURCE_LANG = "it";
export const SUPPORTED_LANG_CODES = LANGUAGES_50.map((l) => l.code);
export const LANG_BY_CODE = Object.fromEntries(LANGUAGES_50.map((l) => [l.code, l]));

export function getLang(code: string): LanguageDef {
  return LANG_BY_CODE[code] ?? LANGUAGES_50[0];
}

// Languages that ship with a static JSON translation file in /public/translations.
// All other languages use runtime Google Translate via /api/translate (edge).
export const STATIC_TRANSLATION_LANGS = [
  "en", "es", "fr", "de", "pt", "ru", "zh", "ja", "ar", "hi", "ko", "tr", "pl", "nl",
];

export function detectBrowserLang(): string {
  if (typeof navigator === "undefined") return DEFAULT_LANG;
  const raw = navigator.language || navigator.languages?.[0] || DEFAULT_LANG;
  const code = raw.toLowerCase().split("-")[0];
  return SUPPORTED_LANG_CODES.includes(code) ? code : DEFAULT_LANG;
}
