const hubAuthUrl =
  import.meta.env.PUBLIC_HUB_AUTH_URL || 'https://hub.thetrustleader.com/auth';
const hubTrialUrl =
  import.meta.env.PUBLIC_HUB_TRIAL_URL ||
  'https://hub.thetrustleader.com/auth?mode=signup';

export const siteConfig = {
  name: 'Trust Leader',
  description:
    'Trust Leader helps practitioners turn trust from a broad idea into specific behaviours people can practise in real working relationships.',
  trialUrl: hubTrialUrl,
  signInUrl: import.meta.env.PUBLIC_HUB_SIGN_IN_URL || hubAuthUrl,
  telegraphUrl: '/#trust-telegraph'
};
