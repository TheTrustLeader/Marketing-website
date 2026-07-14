import type { EnabledLocale } from './config';
import { defaultLocale } from './config';

export interface JourneyStep {
  label: string;
  title: string;
  text: string;
  score: number;
  alt: string;
}

export interface SharedMessages {
  skipToContent: string;
  navigation: {
    menu: string;
    ariaLabel: string;
    howItWorks: string;
    practitioners: string;
    knowledgeBase: string;
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
    aboutPending: string;
    contactPending: string;
    privacyPending: string;
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
    panelTitle: string;
    currentView: string;
    illustrativePanel: string;
    disclosure: string;
    axes: [string, string, string, string, string];
    steps: JourneyStep[];
  };
}

const en: SharedMessages = {
  skipToContent: 'Skip to content',
  navigation: {
    menu: 'Menu',
    ariaLabel: 'Main navigation',
    howItWorks: 'How it works',
    practitioners: 'For practitioners',
    knowledgeBase: 'Knowledge Base',
    about: 'About',
    aboutPendingTitle: 'About page pending',
    signIn: 'Sign in',
    signInPendingTitle: 'Hub sign-in route pending',
    startTrial: 'Start free trial'
  },
  footer: {
    summary: 'Structure, practice and evidence for the trust work practitioners already do.',
    explore: 'Explore',
    connect: 'Connect',
    account: 'Account',
    aboutPending: 'About page pending',
    contactPending: 'Contact route pending',
    privacyPending: 'Privacy route pending',
    legal: 'Trust Leader. Initial implementation draft; final links, imagery and legal routes are pending approval.'
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
    panelTitle: 'Maya’s Trust Map',
    currentView: 'Daniel · current view',
    illustrativePanel: 'Illustrative product panel',
    disclosure: 'Fictional people and demonstration data. Shown for illustration only.',
    axes: [
      'Clarity & Honesty',
      'Delivery & Consistency',
      'Capability & Realism',
      'Understanding & Connection',
      'Fairness & Consideration'
    ],
    steps: [
      {
        label: 'One relationship',
        title: 'Start with what matters',
        text: 'Daniel’s targets depend on Maya’s delivery. She needs him to back her judgement instead of working around her.',
        score: 2,
        alt: 'Maya’s Trust Map journey begins with Daniel and the outcome she wants in their working relationship.'
      },
      {
        label: 'Map',
        title: 'See where confidence may be held back',
        text: 'Maya maps her view of how Daniel currently experiences her. Delivery and Consistency is the clearest gap.',
        score: 2,
        alt: 'Maya’s Trust Map shows Delivery and Consistency as the lowest area, scored 2 out of 5.'
      },
      {
        label: 'Focus',
        title: 'Choose one behaviour',
        text: 'Maya chooses Flag It Early: give progress updates and raise risks before Daniel has to chase.',
        score: 2,
        alt: 'Maya selects B5 Flag It Early as the behaviour she will practise with Daniel.'
      },
      {
        label: 'Practise',
        title: 'Act in the real relationship',
        text: 'Three short activities turn the behaviour into something Maya can practise between sessions.',
        score: 2,
        alt: 'Maya’s playlist contains If Only, Early Warning and Red Flag Slalom.'
      },
      {
        label: 'Reflect',
        title: 'Record what happened',
        text: 'Maya records what she tried and how Daniel responded. Her next coaching conversation has something specific to work with.',
        score: 2,
        alt: 'Maya records a private fictional reflection after practising with Daniel.'
      },
      {
        label: 'Review',
        title: 'See what moved',
        text: 'At day 14, Delivery and Consistency moves from 2 to 3 in Maya’s own Trust Map. Early movement—not a verdict or guarantee.',
        score: 3,
        alt: 'Maya’s day-14 Trust Map shows Delivery and Consistency moving from 2 to 3.'
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
