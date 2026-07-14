const hubAuthUrl =
  import.meta.env.PUBLIC_HUB_AUTH_URL || 'https://hub.thetrustleader.com/auth';

export const siteConfig = {
  name: 'Trust Leader',
  description:
    'Trust Leader helps practitioners turn trust from a broad idea into specific behaviours people can practise in real working relationships.',
  trialUrl: import.meta.env.PUBLIC_HUB_TRIAL_URL || hubAuthUrl,
  signInUrl: import.meta.env.PUBLIC_HUB_SIGN_IN_URL || hubAuthUrl,
  telegraphUrl: '/#trust-telegraph'
};
