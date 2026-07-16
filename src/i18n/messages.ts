import type { EnabledLocale } from './config';
import { defaultLocale } from './config';

export interface JourneyStep {
  label: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}

export interface SharedMessages {
  skipToContent: string;
  navigation: {
    menu: string;
    ariaLabel: string;
    thinking: string;
    howItWorks: string;
    practitioners: string;
    knowledgeBase: string;
    articles: string;
    pricing: string;
    about: string;
    aboutPendingTitle: string;
    signIn: string;
    signInPendingTitle: string;
    startTrial: string;
  };
  footer: {
    summary: string;
    explore: string;
    connect: string;
    account: string;
    about: string;
    contact: string;
    certifiedWaitlist: string;
    privacy: string;
    terms: string;
    cookies: string;
    legal: string;
  };
  telegraph: {
    eyebrow: string;
    heading: string;
    text: string;
    action: string;
  };
  journey: {
    fictionalExample: string;
    stepCountTemplate: string;
    previousStep: string;
    chooseStep: string;
    showStepTemplate: string;
    nextStep: string;
    instructions: string;
    disclosure: string;
    steps: JourneyStep[];
  };
}

const en: SharedMessages = {
  skipToContent: 'Skip to content',
  navigation: {
    menu: 'Menu',
    ariaLabel: 'Main navigation',
    thinking: 'The thinking',
    howItWorks: 'How it works',
    practitioners: 'For practitioners',
    knowledgeBase: 'Knowledge Base',
    articles: 'Articles',
    pricing: 'Pricing',
    about: 'About',
    aboutPendingTitle: 'About Trust Leader',
    signIn: 'Sign in',
    signInPendingTitle: 'Hub sign-in route pending',
    startTrial: 'Start free trial'
  },
  footer: {
    summary: 'Structure, practice and evidence for the trust work practitioners already do.',
    explore: 'Explore',
    connect: 'Connect',
    account: 'Account',
    about: 'About',
    contact: 'Contact',
    certifiedWaitlist: 'Certified Practitioner waitlist',
    privacy: 'Privacy',
    terms: 'Terms',
    cookies: 'Cookies',
    legal: 'Trust Leader is a trading name of Venandi Solutions Ltd. Registered in England and Wales.'
  },
  telegraph: {
    eyebrow: 'Trust Telegraph',
    heading: 'One useful idea about trust, in your inbox.',
    text: 'Short, practical thinking for people whose work depends on other people’s confidence.',
    action: 'Join Trust Telegraph'
  },
  journey: {
    fictionalExample: 'Fictional example',
    stepCountTemplate: 'Step {current} of {total}',
    previousStep: 'Previous Trust Journey step',
    chooseStep: 'Choose a Trust Journey step',
    showStepTemplate: 'Show step {current}: {title}',
    nextStep: 'Next Trust Journey step',
    instructions: 'Use the arrows to follow Maya’s journey.',
    disclosure: 'Real product screens using fictional people and demonstration data.',
    steps: [
      {
        label: 'Map',
        title: 'See where to focus',
        text: 'Maya’s map makes one relationship specific: Daniel’s confidence matters, and Delivery & Consistency is the clearest gap.',
        image: '/images/trust-journey/01-identify.webp',
        alt: 'Maya’s Trust Map showing Delivery and Consistency as the focus area in her fictional relationship with Daniel.'
      },
      {
        label: 'Practise',
        title: 'Turn one behaviour into action',
        text: 'She chooses Flag It Early and uses short activities to practise it in the real relationship—not just in the coaching session.',
        image: '/images/trust-journey/03-design.webp',
        alt: 'Maya’s Flag It Early playlist showing the Early Warning and Red Flag Slalom practice activities.'
      },
      {
        label: 'Review',
        title: 'Bring back real evidence',
        text: 'Maya records what she tried, what happened and what to carry forward, giving the next conversation something concrete to work with.',
        image: '/images/trust-journey/05-reflect.webp',
        alt: 'Maya’s private fictional journal entry recording what she did to strengthen trust and what she will carry forward.'
      }
    ]
  }
};

const messages = { en } satisfies Record<EnabledLocale, SharedMessages>;

export function getMessages(locale: EnabledLocale = defaultLocale): SharedMessages {
  return messages[locale];
}

export function formatMessage(
  template: string,
  values: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? `{${key}}`));
}
