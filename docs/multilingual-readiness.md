# Multilingual and Arabic readiness

## Confirmed direction

- English (`en-GB`) is the only enabled public locale for the initial release.
- Arabic (`ar`, right-to-left) is the first planned localisation.
- Do not show a language selector or claim Arabic support until reviewed Arabic content and the complete conversion journey are ready.
- Do not use automatic translation as the final source for core Trust Leader terminology, trust concepts, legal wording or conversion copy.

## Architecture already in the build

- `src/i18n/config.ts` is the locale registry and records enabled and planned locales separately.
- `src/i18n/messages.ts` holds typed shared interface copy and the interactive Trust Journey copy.
- `BaseLayout.astro` sets `lang`, `dir`, Open Graph locale and optional `hreflang` links from locale data.
- Shared navigation, footer, account actions and Trust Telegraph copy use the message registry.
- Page paths use `localisePath`, with `/ar/` reserved for Arabic when it is enabled.
- CSS uses logical inline properties and includes RTL typography, mirrored directional controls and direction-aware decorative values.
- `PUBLIC_HUB_LOCALE_PARAM` remains empty until the Hub verifies how a locale is carried into registration and sign-in.
- `npm run check:i18n` prevents physical left/right CSS and required locale hooks from silently regressing.

## Content workflow

Every Arabic item must move through:

1. approved British-English source;
2. Arabic translation;
3. Trust Leader terminology review;
4. Arabic-speaking subject review;
5. RTL layout, keyboard, mobile and screen-reader QA;
6. SEO metadata and structured-data review;
7. release approval.

Track the status as: **English source → Arabic translation → review → implementation → QA → released**.

## Arabic release gate

Before Arabic is added to `enabledLocales`:

- agree the Arabic register and glossary;
- translate a complete initial journey: Home, How it works, trial registration handoff, essential privacy/legal information and one core Trust Library page;
- verify Arabic-compatible fonts and text expansion on all breakpoints;
- verify the Trust Journey, arrows, diagrams, form controls and focus order in RTL;
- ensure canonical URLs, `hreflang`, sitemap entries and structured data match visible Arabic content;
- verify the Hub registration URL preserves the chosen locale;
- verify Hub authentication, onboarding, transactional emails, PDFs and charts do not drop the user into an unexpected English-only flow;
- obtain human language and product approval;
- only then expose a language selector or make an Arabic-support claim.

## Inclusion beyond translation

Multilingual delivery sits alongside, and does not replace, the existing requirements for readable HTML, plain language, keyboard access, visible focus, sufficient contrast, reduced motion, alternative text, captions or transcripts, inclusive imagery and strong mobile performance.
