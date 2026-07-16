# Trust Leader Marketing Website

The public discovery, credibility and conversion layer for Trust Leader.

## Current build

The current implementation includes:

- the Home page and responsive Maya–Daniel Trust Journey;
- The thinking, How it works, For practitioners, Pricing and About pages;
- searchable Knowledge Base and Articles landing pages;
- seven published articles and four published Knowledge Base guides using shared content templates;
- a shared, on-brand graphic system for articles and editorial content;
- a dedicated Certified Practitioner waitlist, plus Trust Telegraph and contact forms prepared for Netlify Forms;
- an approved Warsaw speaking photograph on the Home page;
- search and AI-discovery controls, structured data and a generated sitemap;
- consent-gated analytics support, shared navigation, footer, design tokens and accessibility foundations.

The product Hub remains a separate product and repository.

## Local development

Requires Node.js 22.12 or later.

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run check
npm run build
```

## Configuration

Copy `.env.example` to `.env` to override the public site or Hub destinations. Trial actions default to the verified registration deep link, `https://hub.thetrustleader.com/auth?mode=signup`, while direct Practitioner actions preserve `/upgrade` as the post-authentication destination. Sign-in actions default to `https://hub.thetrustleader.com/auth`. Keep the destinations separate so each authentication state remains explicit. Do not commit secrets.

Analytics remains disabled until `PUBLIC_GA_MEASUREMENT_ID` is set. When supplied, it loads only after the visitor accepts analytics cookies. Netlify preview and branch deployments set `PUBLIC_ROBOTS_NOINDEX=true` automatically.

`PUBLIC_HUB_LOCALE_PARAM` is deliberately blank. Set it only after the Hub verifies a locale handoff parameter; the marketing site must not invent one.

## Multilingual readiness

The initial release is British English. Arabic is recorded as the first planned localisation but remains disabled until reviewed content and the complete Arabic conversion journey pass their release gate.

The build already includes:

- a typed locale and shared-message registry;
- document-level `lang` and `dir` handling;
- optional `hreflang` support;
- locale-aware shared navigation and conversion links;
- RTL-safe logical CSS and direction-aware controls;
- an automated multilingual-readiness check.

Run `npm run check:i18n` for the focused guard, or `npm run check` for the full Astro and multilingual validation. See [`docs/multilingual-readiness.md`](docs/multilingual-readiness.md) for the content workflow and Arabic release gate.

## Preview deployment

The repository includes a Netlify configuration for pull-request previews:

- build command: `npm run build`;
- publish directory: `dist`;
- Node.js: current Node 22 release.

Netlify builds the production branch and creates a separate, search-blocked preview for each pull request.

Netlify Forms stores Certified Practitioner, Trust Telegraph and contact submissions in the site dashboard. Before production launch, enable form detection and add an email notification for the `certified-practitioner-waitlist` form under Project configuration → Notifications → Emails and webhooks → Form submission notifications. The email subject is version controlled in the form and includes the Netlify submission ID. Samai and the Relationship Engine are not treated as the source of truth until an approved webhook is connected and tested.

## Content publication

Article and Knowledge Base entries live in `src/content`. Each entry has a `draft` or `published` status. Draft pages are available in the review preview but remain out of the sitemap, `llms.txt` and search indexes. See [`docs/search-and-ai-discovery.md`](docs/search-and-ai-discovery.md) for the page intent map and publication gate.

## Status

This is an implementation draft. Product panels use safe fictional demonstration data and remain placeholders until approved platform captures are supplied. English is enabled; Arabic is planned but must not be presented as available yet.
