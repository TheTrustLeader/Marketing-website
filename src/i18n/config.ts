export const defaultLocale = 'en' as const;

// A locale is enabled only when its reviewed content and complete user journey are ready.
export const enabledLocales = ['en'] as const;
export const plannedLocales = ['ar'] as const;

export type EnabledLocale = (typeof enabledLocales)[number];
export type PlannedLocale = (typeof plannedLocales)[number];
export type Locale = EnabledLocale | PlannedLocale;
export type TextDirection = 'ltr' | 'rtl';

interface LocaleDefinition {
  htmlLang: string;
  openGraphLocale: string;
  direction: TextDirection;
  label: string;
  pathPrefix: string;
  enabled: boolean;
}

export const localeConfig = {
  en: {
    htmlLang: 'en-GB',
    openGraphLocale: 'en_GB',
    direction: 'ltr',
    label: 'English',
    pathPrefix: '',
    enabled: true
  },
  ar: {
    htmlLang: 'ar',
    openGraphLocale: 'ar_AR',
    direction: 'rtl',
    label: 'العربية',
    pathPrefix: '/ar',
    enabled: false
  }
} satisfies Record<Locale, LocaleDefinition>;

export function getLocaleConfig(locale: Locale = defaultLocale): LocaleDefinition {
  return localeConfig[locale];
}

export function localisePath(path: string, locale: Locale = defaultLocale): string {
  if (locale === defaultLocale || /^(?:[a-z]+:)?\/\//i.test(path)) return path;

  const target = new URL(path, 'https://thetrustleader.com');
  const prefix = localeConfig[locale].pathPrefix;
  const pathname = target.pathname === '/' ? '/' : target.pathname;

  return `${prefix}${pathname}${target.search}${target.hash}`;
}
