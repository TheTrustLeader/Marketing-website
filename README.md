# Trust Leader Marketing Website

The public discovery, credibility and conversion layer for Trust Leader.

## Current build

This first implementation includes:

- the Home page and responsive Maya–Daniel Trust Journey;
- the Knowledge Base landing page;
- an example long-form article template;
- shared navigation, footer, design tokens and accessibility foundations.

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

Copy `.env.example` to `.env` to override the public site or Hub destinations. Trial actions default to the verified registration deep link, `https://hub.thetrustleader.com/auth?mode=signup`, while sign-in actions default to `https://hub.thetrustleader.com/auth`. Keep the destinations separate so each authentication state remains explicit. Do not commit secrets.

## Preview deployment

The repository includes a Netlify configuration for pull-request previews:

- build command: `npm run build`;
- publish directory: `dist`;
- Node.js: current Node 22 release.

Connect the GitHub repository through Netlify's **Import an existing project** flow. Netlify will then build the production branch and create a separate preview for each pull request.

## Status

This is an implementation draft. Product panels use safe fictional demonstration data and photography spaces remain placeholders until approved assets are supplied.
