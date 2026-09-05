import {
  ui,
  defaultLang,
  showDefaultLang,
  routes,
  languageTags,
  type SupportedLanguage,
} from "./ui";

/**
 * Extracts the active language code from a given URL.
 * e.g., /hi/compress-pdf -> "hi", /compress-pdf -> "en"
 */
export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split("/");
  if (lang && lang in ui) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

/**
 * Returns a translation lookup function for the given language.
 */
export function useTranslations(lang: SupportedLanguage) {
  const localizedUI: Record<string, string> = ui[lang];
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return key in localizedUI ? localizedUI[key] : ui[defaultLang][key];
  };
}

/**
 * Generates a localized path for a given route and language.
 * When showDefaultLang is false, default language (en) paths have no prefix.
 */
export function useTranslatedPath(lang: SupportedLanguage) {
  return function translatePath(
    path: string,
    l: SupportedLanguage = lang
  ): string {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const pathName = cleanPath.replaceAll("/", "");

    const routeMap =
      l !== defaultLang && l in routes ? routes[l as keyof typeof routes] : undefined;

    const translatedPath =
      routeMap && pathName in routeMap ? `/${routeMap[pathName]}` : cleanPath;

    // Normalize homepage path
    if (translatedPath === "/") {
      return !showDefaultLang && l === defaultLang ? "/" : `/${l}/`;
    }

    // Default language has no prefix
    if (!showDefaultLang && l === defaultLang) {
      return translatedPath;
    }

    return `/${l}${translatedPath}`;
  };
}

/**
 * Reverse-lookup for route mapping based on URL.
 */
export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/").filter(Boolean);
  const path = parts.pop();

  if (!path) return undefined;

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0] as Record<string, string> | undefined;
    return route ? route[path] : undefined;
  }

  const getKeyByValue = (
    obj: Record<string, string>,
    value: string
  ): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const currentRoutes = routes[currentLang];
  if (currentRoutes) {
    return getKeyByValue(currentRoutes, path);
  }

  return undefined;
}

export interface HreflangAlternate {
  hreflang: string;
  href: string;
}

/**
 * Computes bidirectional hreflang links for SEO according to Google and BCP 47 guidelines.
 * Maps English (en + x-default) and Hinglish (hi-Latn + hi).
 */
export function getHreflangLinks(
  currentUrl: URL,
  siteUrl: string = "https://zcompressor.com",
  customAlternates?: Record<SupportedLanguage, string>
): HreflangAlternate[] {
  const cleanSiteUrl = siteUrl.replace(/\/+$/, "");

  if (customAlternates) {
    const enHref = `${cleanSiteUrl}${customAlternates.en.startsWith("/") ? customAlternates.en : `/${customAlternates.en}`}`;
    const hiHref = `${cleanSiteUrl}${customAlternates.hi.startsWith("/") ? customAlternates.hi : `/${customAlternates.hi}`}`;
    return [
      { hreflang: "x-default", href: enHref },
      { hreflang: languageTags.en, href: enHref },
      { hreflang: languageTags.hi, href: hiHref },
      { hreflang: "hi", href: hiHref },
    ];
  }

  const pathname = currentUrl.pathname;
  let basePath = pathname;

  if (basePath.startsWith("/hi/")) {
    basePath = basePath.slice(3); // remove /hi
  } else if (basePath === "/hi") {
    basePath = "/";
  }

  if (!basePath.startsWith("/")) {
    basePath = `/${basePath}`;
  }

  // Ensure trailing slash consistency with existing site structure
  const enPath = basePath === "" ? "/" : basePath;
  const hiPath = enPath === "/" ? "/hi/" : `/hi${enPath}`;

  const enHref = `${cleanSiteUrl}${enPath}`;
  const hiHref = `${cleanSiteUrl}${hiPath}`;

  return [
    { hreflang: "x-default", href: enHref },
    { hreflang: languageTags.en, href: enHref },
    { hreflang: languageTags.hi, href: hiHref },
    { hreflang: "hi", href: hiHref },
  ];
}
