import { readFile } from 'node:fs/promises';

const files = {
  config: await readFile(new URL('../src/i18n/config.ts', import.meta.url), 'utf8'),
  messages: await readFile(new URL('../src/i18n/messages.ts', import.meta.url), 'utf8'),
  layout: await readFile(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8'),
  css: await readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8'),
  guidance: await readFile(new URL('../docs/multilingual-readiness.md', import.meta.url), 'utf8')
};

const failures = [];

function requireText(source, text, explanation) {
  if (!source.includes(text)) failures.push(explanation);
}

requireText(files.config, "plannedLocales = ['ar']", 'Arabic must remain in the planned locale registry.');
requireText(files.config, "direction: 'rtl'", 'Arabic must retain RTL direction metadata.');
requireText(files.config, 'enabled: false', 'Planned Arabic must remain disabled until its release gate is passed.');
requireText(files.messages, 'Record<EnabledLocale, SharedMessages>', 'Enabled locales must have complete typed shared messages.');
requireText(files.layout, 'lang={localeDefinition.htmlLang}', 'The document language must come from the locale registry.');
requireText(files.layout, 'dir={localeDefinition.direction}', 'The document direction must come from the locale registry.');
requireText(files.layout, 'hreflang={hreflang}', 'Translated pages must support hreflang metadata.');
requireText(files.guidance, 'English source → Arabic translation → review → implementation → QA → released', 'The localisation review workflow must remain documented.');

const physicalDirectionPattern = /(^|[;{]\s*)(?:left|right|margin-left|margin-right|padding-left|padding-right|border-left|border-right)\s*:/gm;
const physicalDirectionMatches = [...files.css.matchAll(physicalDirectionPattern)];

if (physicalDirectionMatches.length > 0) {
  failures.push('Use CSS logical inline properties instead of physical left/right declarations.');
}

if (failures.length > 0) {
  console.error('Multilingual readiness check failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Multilingual readiness check passed: English enabled, Arabic planned, RTL foundations protected.');
