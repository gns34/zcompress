export const languages = {
  en: "English",
  hi: "Hinglish",
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang: SupportedLanguage = "en";
export const showDefaultLang = false;

// Official BCP 47 language tags for HTML lang attribute and SEO hreflang
export const languageTags: Record<SupportedLanguage, string> = {
  en: "en",
  hi: "hi-Latn", // Hindi written in Latin script (Hinglish)
};

export const ui = {
  en: {
    // Navigation
    "nav.compressPdf": "Compress PDF",
    "nav.blog": "Blog",
    "nav.alternatives": "Alternatives",
    "nav.faq": "FAQ",
    "nav.about": "About Us",
    "nav.contact": "Contact Us",
    "nav.startCompressing": "Start Compressing",
    "nav.clientSide": "100% Client-Side",
    "nav.allComparisons": "View All Product Comparisons",

    // Language Switcher
    "lang.switch": "Switch Language",
    "lang.en": "English",
    "lang.hi": "Hinglish",

    // Hero & Common Headlines
    "hero.eyebrow": "Zero Server Uploads",
    "hero.title": "Free Online PDF Compressor.",
    "hero.subtitle":
      "Compress PDF files online securely in your browser with no server uploads. Fast, private, and unlimited.",
    "hero.cta": "Start Compressing",
    "hero.ctaSecondary": "View Size Presets",

    // Tool & Actions
    "tool.selectFiles": "Select PDF Files",
    "tool.dropFiles": "or drag and drop your PDFs here",
    "tool.targetSize": "Target Size",
    "tool.compressAll": "Compress All Files",
    "tool.download": "Download",
    "tool.downloadZip": "Download ZIP",
    "tool.original": "Original",
    "tool.compressed": "Compressed",
    "tool.savings": "Savings",

    // Privacy Box
    "privacy.title": "Your files stay on your device.",
    "privacy.desc":
      "Zcompressor processes your documents 100% locally inside your browser using WebAssembly. No files are ever sent to remote servers.",

    // Footer
    "footer.tagline":
      "A premium, high-security developer-grade utility to compress PDFs locally in your browser.",
    "footer.product": "Product",
    "footer.compare": "Compare",
    "footer.languages": "Languages",
    "footer.popularTools": "Popular Tools",
    "footer.security": "Security",
    "footer.localSandbox": "100% Local Sandbox",
    "footer.noTelemetry": "No telemetry / logs sent",
    "footer.rights": "All rights reserved. GNS",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
  },
  hi: {
    // Navigation
    "nav.compressPdf": "PDF Compress Karein",
    "nav.blog": "Blog",
    "nav.alternatives": "Alternatives",
    "nav.faq": "FAQ",
    "nav.about": "Hamare Baare Me",
    "nav.contact": "Sampark Karein",
    "nav.startCompressing": "Compress Karna Shuru Karein",
    "nav.clientSide": "100% Private & Browser Me",
    "nav.allComparisons": "Sabhi Comparison Dekhein",

    // Language Switcher
    "lang.switch": "Bhasha Badlein",
    "lang.en": "English",
    "lang.hi": "Hinglish",

    // Hero & Common Headlines
    "hero.eyebrow": "Bina Kisi Server Upload Ke",
    "hero.title": "Free Online PDF Compressor.",
    "hero.subtitle":
      "Apne documents ko bina kisi remote server par upload kiye direct apne browser me PDF size kam karein. 100% private, tez aur safe.",
    "hero.cta": "Compress Shuru Karein",
    "hero.ctaSecondary": "Size Presets Dekhein",

    // Tool & Actions
    "tool.selectFiles": "PDF Files Chunein",
    "tool.dropFiles": "ya apni PDF files yahan drop karein",
    "tool.targetSize": "Target Size Chunein",
    "tool.compressAll": "Sabhi Files Compress Karein",
    "tool.download": "Download Karein",
    "tool.downloadZip": "ZIP me Download Karein",
    "tool.original": "Asli Size",
    "tool.compressed": "Naya Size",
    "tool.savings": "Bachat",

    // Privacy Box
    "privacy.title": "Aapke documents aapke device par hi rehte hain.",
    "privacy.desc":
      "Zcompressor aapki files ko 100% locally browser memory me WebAssembly se process karta hai. Koi bhi file kisi external server par nahi jaati.",

    // Footer
    "footer.tagline":
      "Aapke browser me bina server upload ke PDFs locally compress karne ka premium aur 100% safe developer tool.",
    "footer.product": "Product",
    "footer.compare": "Compare",
    "footer.languages": "Bhashayein (Languages)",
    "footer.popularTools": "Popular Tools",
    "footer.security": "Suraksha",
    "footer.localSandbox": "100% Local Browser Sandbox",
    "footer.noTelemetry": "Koi telemetry ya log nahi bheje jaate",
    "footer.rights": "Sabhi adhikar surakshit hain. GNS",
    "footer.terms": "Niyam aur Shartein",
    "footer.privacy": "Privacy Policy",
  },
} as const;

// Optional route translations dictionary
export const routes: Record<string, Record<string, string>> = {
  hi: {},
};
