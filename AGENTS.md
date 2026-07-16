# Trust Leader marketing-site guidance

- Use British English and plain language.
- Preserve the locked definition: “Trust is someone’s confidence in you with something they care about.”
- Keep the public marketing site separate from the Trust Leader Hub.
- Use “strengthen” and “erode” for public trust language. Do not introduce “Trust Breakers” or claims that the platform objectively diagnoses trust.
- Treat Maya Chen and Daniel as fictional demonstration data and label them visibly.
- The 28-day example uses one focus only: Delivery and Consistency; behaviour B5 · Flag It Early; three activities: If Only, Early Warning and Red Flag Slalom.
- Present the 2 → 3 re-score as Maya’s early movement, not proof, a verdict or a guaranteed outcome.
- Use `https://hub.thetrustleader.com/auth?mode=signup` for trial CTAs and `https://hub.thetrustleader.com/auth` for sign-in. Keep the verified registration and sign-in states separate.
- Keep all new work multilingual-ready. English is enabled; Arabic is the first planned localisation and remains disabled until the release gate in `docs/multilingual-readiness.md` is passed.
- Put reusable interface copy in the typed message registry. Keep page content in locale-specific sources when translations are introduced.
- Use CSS logical inline properties rather than physical left/right declarations. Test directional controls, reading order and interactive diagrams in RTL.
- Do not expose a language selector, invent a Hub locale parameter or claim Arabic support before reviewed Arabic content and the complete handoff journey are verified.
- Core Trust Leader language requires human translation and Arabic-speaking subject review; automatic translation is not final copy.
- Keep content readable as HTML. Support keyboard use, touch, reduced motion, zoom and sufficient colour contrast.
- Never use white text on the light brand green `#78BE7C`; use navy or charcoal.
- Run `npm run check`, including the multilingual-readiness guard, and `npm run build` before proposing release.
