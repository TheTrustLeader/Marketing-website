import { defaultLocale, localisePath, type EnabledLocale } from '@/i18n/config';

const hubAuthUrl =
  import.meta.env.PUBLIC_HUB_AUTH_URL || 'https://hub.thetrustleader.com/auth';
const hubTrialUrl =
  import.meta.env.PUBLIC_HUB_TRIAL_URL ||
  'https://hub.thetrustleader.com/auth?mode=signup';
const hubPractitionerUrl =
  import.meta.env.PUBLIC_HUB_PRACTITIONER_URL ||
  'https://hub.thetrustleader.com/auth?mode=signup&next=%2Fupgrade';
const hubLocaleParameter = import.meta.env.PUBLIC_HUB_LOCALE_PARAM;

function withLocale(url: string, locale: EnabledLocale): string {
  if (locale === defaultLocale || !hubLocaleParameter) return url;

  const destination = new URL(url);
  destination.searchParams.set(hubLocaleParameter, locale);
  return destination.toString();
}

export function getSiteConfig(locale: EnabledLocale = defaultLocale) {
  return {
    name: 'Trust Leader',
    description:
      'Trust Leader helps practitioners turn trust from a broad idea into specific behaviours people can practise in real working relationships.',
    trialUrl: withLocale(hubTrialUrl, locale),
    practitionerUrl: withLocale(hubPractitionerUrl, locale),
    signInUrl: withLocale(import.meta.env.PUBLIC_HUB_SIGN_IN_URL || hubAuthUrl, locale),
    telegraphUrl: localisePath('/trust-telegraph/', locale),
    certifiedWaitlistUrl: localisePath('/certified-practitioner-waitlist/', locale),
    contactUrl: localisePath('/contact/', locale),
    privacyUrl: 'https://hub.thetrustleader.com/privacy-policy',
    termsUrl: 'https://hub.thetrustleader.com/website-terms-and-conditions',
    cookiesUrl: 'https://hub.thetrustleader.com/cookies-policy',
    refundUrl: 'https://hub.thetrustleader.com/refund-policy'
  };
}

export const siteConfig = getSiteConfig();
