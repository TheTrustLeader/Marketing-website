# Search and AI-discovery plan

Status: implementation guide  
Last updated: 14 July 2026

## Principle

Pages should answer a real question clearly. Search terms guide page intent; they are not repeated mechanically and are not added as a `meta keywords` tag.

The site supports discovery through readable static HTML, descriptive routes, internal links, canonical URLs, a sitemap, visible authorship and dates, source links, structured data and crawl controls. `llms.txt` provides an additional machine-readable guide for services that choose to use it. Google says it ignores this file, so it is not treated as a ranking signal or guarantee.

## Page and query map

| Page | Main search intent | Supporting language |
|---|---|---|
| Home | trust tools for coaches | trust platform, trust behaviour practice, L&D trust tools |
| The thinking | what is trust | trust definition, who decides trust, behaviour and trust |
| How it works | trust assessment and practice tool | Trust Map, trust behaviours, behaviour playlist, evidence of trust change |
| For practitioners | trust coaching tools | coaching platform for trust, L&D trust programme, between-session practice |
| Pricing | trust coaching platform pricing | practitioner membership, client seats, trust certification |
| Trust vs psychological safety | difference between trust and psychological safety | psychological safety behaviours, interpersonal trust |
| Direct, borrowed and system trust | direct borrowed system trust | institutional trust, swift trust, authority and trust |
| Authenticity and trust | does authenticity build trust | authentic leadership and trust, intentions and behaviour |
| Influence and manipulation | difference between influence and manipulation | ethical influence, manipulation warning signs, manufactured urgency |
| Thank you to Alexa | how habits strengthen trust under pressure | behaviour under pressure, practising trustworthy behaviour |
| Changing your mind | does changing your mind damage trust | leadership consistency, explaining a change of decision, adaptability at work |
| Authority article | authority vs influence vs trust | compliance vs trust, confidence gap |
| Qualification article | qualifications and client trust | borrowed trust, professional credibility |
| Why people do not trust me | why don't people trust me | trustworthiness, intent vs perception |
| What do they need to trust you with? | what do they need to trust you with | five Trust Questions, contextual trust, trust at work |

## Publication gate

Content collection entries have `status: draft` or `status: published`.

- Draft pages render in the review build but carry `noindex`.
- Draft entries are excluded from `sitemap.xml` and the published sections of `llms.txt`.
- Change a page to `published` only after copy, claims, sources and internal links are approved.
- Netlify deploy previews and branch builds are `noindex` through `PUBLIC_ROBOTS_NOINDEX=true`.

## Structured data

- Every page receives Organisation and WebSite entities.
- Articles and Knowledge Base pages receive Article and BreadcrumbList data.
- The About page receives a Person entity.
- The Pricing page receives SoftwareApplication, Offer and visible FAQPage data.
- No review ratings, unsupported claims or hidden FAQ content are marked up.

## Measurement

Analytics is disabled until `PUBLIC_GA_MEASUREMENT_ID` is supplied. Even then, it loads only after the visitor accepts analytics cookies.

Initial events:

- `site_action` for labelled trial, newsletter and contextual links;
- `trust_telegraph_submit` for newsletter form submissions;
- Trust Journey interaction events will be added when the screenshot deck is finalised.

## Crawler policy

- `OAI-SearchBot` is allowed so published pages can be considered for ChatGPT search.
- `ChatGPT-User` is allowed for visits initiated by a user.
- `GPTBot` is disallowed. Search visibility does not require permission to use site content for foundation-model training.
- The general rule allows other respectful search and answer-engine crawlers.

## Official guidance used

- [Google: optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: crawlable link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google: build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [OpenAI: overview of OpenAI crawlers](https://developers.openai.com/api/docs/bots)
