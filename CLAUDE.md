# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

This is the **main website for Nomad Summer Camp (NSC)**, currently in development. The repo is scoped to the Cape Town 2027 edition (Camp Big Daddy), but it's built to evolve into the permanent NSC web presence.

**What NSC is:** An event series bringing digital nomads and remote workers together for an all-inclusive long-weekend camp experience. New location each time. NSC started in 2023 (Camp Bädäss, Austria). Camp Big Daddy (Cape Town) is becoming an annual edition — the first one was in 2026. Past camps: Austria, Serbia, Mexico, France, Cape Town. Founded and run by Ali, Alex, Julio, and Jeff.

**What people love most about it — in order of importance:**
1. **Worry-free** — everything is handled (accommodation, all food, all drinks, all activities). They just show up and participate.
2. **Unplugging** — no work, no phone, no AI. Being fully present.
3. **Fun activities and games** — team competition, epic challenges, surprise events.
4. **Genuine connection** — meeting other nomads through games and shared experiences, not through work or social media. Every camp creates unique memories and inside jokes.

**Audience:** Digital nomads and remote workers looking for community and real human connection on the road. Includes both NSC alumni and first-timers who've never heard of it.

**Tone:** Warm, irreverent, and genuinely fun — never corporate. Self-aware humor is on-brand. Copy should feel like it was written by someone who loves camp, not a marketing team.

**Capitalization:** Camp, Camper, and Counselor are always capitalized.

**Camp lore (context, not content):** The official NSC mascot is Jeff — a rubber chicken who shows up at every camp. Camp lore also includes the bad vibes ghost (chased away at camp) and Nubbel (a character borrowed from Cologne Carnival).

## Running locally

```bash
python3 -m http.server
```

Open `http://localhost:8000`. A local HTTP server is **required** — pages use `fetch()` to load the shared header (`/nav.html`) and the leaderboard data (`/data/campers.json`), and every asset path is root-relative. Opening via `file://` breaks all of it.

## Verifying CSS/layout changes

**Default to reasoning about the box model, not spinning up a browser.** Most layout bugs in this codebase are simple arithmetic — a card's width vs. its frame's width vs. its padding, a grid track's sizing behavior, a flex item's stretch default — that a careful read of the CSS catches without ever loading the page. Don't treat "navigate → resize → screenshot" as a default habit after every small edit; it burns a lot of tokens and, worse, often verifies the wrong thing (re-checking the symptom that was just fixed instead of the invariant the fix actually depends on — e.g. confirming a caption wraps without re-confirming the frame still fits inside its card).

Reserve real browser verification for:
- a change whose visual result genuinely can't be predicted from the CSS alone
- when the user explicitly asks to see it
- one final pass across a batch of related changes, not one pass per change

Before trusting a browser check, sanity-check the numbers against what you already know is true (padding + frame = card width, etc.) — a browser measurement that contradicts arithmetic you just verified is more likely a stale/cached state than a new bug.

If you do open the page, this environment's preview pane has known quirks — treat these as tool artifacts first, not app bugs, when a number looks physically impossible:
- Edited CSS can serve stale from cache; force a fresh load (cache-busting query param, or inject a fresh `<link>`) before trusting a measurement.
- `innerWidth` sometimes reports `0` or sticks at a stale value right after `navigate`/resize — re-resize, or open a fresh tab, before measuring.
- Screenshots of content below the fold can return blank — use a tall viewport instead of scrolling to capture it.

## Deployment

GitHub Pages. Push to the repo; Pages serves the static files.

## Architecture

Seven pages, one shared stylesheet:

| File | Purpose |
|------|---------|
| `index.html` | Main landing page (`/`) — hero, quotes, schedule, venue tour, accommodation, camper testimonials |
| `rankings/index.html` | All-time camper leaderboard (`/rankings`); fetches and aggregates `data/campers.json` client-side |
| `about/index.html` | About page (`/about`) — "Meet your Counselors" story + a four-card crew grid (Ali, Alex, Julio, Jeff) + a CTA. Copy imported from the live nomadsummercamp.com/about; built with our own components. Photos are placeholders. |
| `past-camps/index.html` | **Placeholder** (`/past-camps`) — header + "still being built". Replace with the real page. |
| `imprint/index.html` | Legal disclosure page (`/imprint`) — company details, contact, disclaimer. Linked from the footer. Responsible person: Alexander Holzhammer. One `<!-- TODO -->` left: the Texas SOS registration / filing number. |
| `privacy/index.html` | Privacy policy (`/privacy`) — covers Tally, Stripe, Beehiiv, GA4, YouTube/Google Fonts, GitHub Pages hosting. Linked from the footer. Written for the intended end-state (GA4, Beehiiv, consent banner not wired up yet); `<!-- TODO -->` for retention periods and the cookie-settings control. Not legal advice — needs a review. |
| `terms/index.html` | Terms &amp; Conditions (`/terms`) — website use + Camp booking (bookings, deposit/payment via Stripe, cancellations, conduct, liability, photo consent, Texas governing law). Linked from the footer. Business specifics are filled in: $99 deposit + balance both due 12 Dec 2026, full refund on/before that date and none after, 18+, travel insurance required. Not legal advice — needs a review. |
| `nav.html` | The shared site header, as an HTML fragment. **Edit the nav here — nowhere else.** |
| `footer.html` | The shared site footer, as an HTML fragment. **Edit the footer here — nowhere else.** |
| `components.js` | Fetches `nav.html` / `footer.html` and swaps them into their placeholder divs |
| `css/style.css` | All styles — design tokens at top, then one section per component/section |
| `data/campers.json` | Source of truth: 81 named campers + 6 past camps with team membership and points |

### URLs

Clean URLs, matching the main nomadsummercamp.com site: `/`, `/rankings`, `/about`, `/past-camps`, `/imprint`, `/privacy`, `/terms`. Each is a directory with an `index.html`.

Because pages are no longer all at the root, **every asset path is root-relative** (`/css/style.css`, `/hero.jpeg`, `/data/campers.json`). Never use a relative path — it will break on any page in a subdirectory. This assumes the site is served from a domain root (as it is via `CNAME`), not from a `user.github.io/repo/` subpath.

### Site header

The header lives in **`nav.html`** as a fragment, and `components.js` injects it. Each page carries only:

```html
<script src="/components.js" defer></script>   <!-- in <head> -->
<div id="nav-placeholder"></div>               <!-- top of <body> -->
```

Same pattern as the main nomadsummercamp.com site. **To change the nav, edit `nav.html` — that's the only copy.**

The active link is set at runtime by comparing `location.pathname` against each href, so nothing in the fragment is page-specific. `components.js` also re-runs `Tally.loadEmbeds()` after injection, because Tally scans the document before the header exists — **any Tally button added to the header needs this, don't remove it.**

`#nav-placeholder` is given the header's height in `style.css` so the swap causes no layout shift (71px by default; 80px on desktop ≥1101px). Keep the two in sync if the header's height changes.

On desktop (≥1101px) the header is a fixed 80px bar that collapses to 50px once the page is scrolled — `components.js` toggles `.site-header--scrolled` from a scroll listener; the height and `200ms` transition live in `style.css`. Tablet/mobile keep the header's natural height.

### Newsletter (beehiiv popup)

The header "Newsletter" link and the footer "Sign up for our newsletter" ghost button both carry the class **`.js-beehiiv-newsletter`** and `href="#"`. They open **`#nsc-newsletter-overlay`** — a plain full-screen overlay defined at the bottom of `footer.html` that wraps a beehiiv **embed** iframe (`https://subscribe-forms.beehiiv.com/113948f3-d7ae-48e5-b5d3-c490cb43e535`, class `beehiiv-embed`). The iframe is in the markup from the start, so it loads with the page and opening the popup is a pure class toggle (`.nsc-nl-overlay--open`) — instant. `components.js` wires the triggers, the close button, backdrop-click and Esc once **both fragments have settled** (the triggers are in `nav.html`, the overlay is in `footer.html`), and appends `subscribe-forms.beehiiv.com/embed.js`, which just watches `.beehiiv-embed` iframes and resizes them. Styles: `COMPONENT — NEWSLETTER POPUP` in `style.css`. Same approach as the live nomadsummercamp.com site.

This replaced beehiiv's `v3/loader.js` popup, which *built* the popup on click (~1s delay) and whose click handler was single-use (opened once, then dead). No beehiiv dashboard trigger-selector config is needed with the embed approach. Every page still loads `subscribe-forms.beehiiv.com/attribution.js` just before `</body>` for signup attribution.

### Site footer

Same mechanism as the header. The footer lives in **`footer.html`** as a fragment; `components.js` injects it into the `<div id="footer-placeholder"></div>` each page carries just before `</body>`. After injection `components.js` re-runs `Tally.loadEmbeds()` (the footer has a "Sign up for Camp Big Daddy 2027" button on the same Tally form `zxDW8M` as the header) — **any Tally button added to the footer needs this.**

Visual spec — full teal colour field with the same 45° stripe as the quote sections, hard 3px dark rule on top, no shadow: the bottom edge of the paper. One row (`.site-footer__main`), three blocks left-to-right: the CTA stack (yellow Tally button with the newsletter ghost button under it), the company address + email, and the social links (Instagram, YouTube). Below that, a copyright + legal-stub bar. `.site-footer__newsletter` is a ghost twin of `.btn-primary` (outlined, not filled, so yellow stays the one "button" colour); it carries `.js-beehiiv-newsletter` and opens the beehiiv popup (see the Newsletter section above). The legal links all point to real pages: Privacy Policy → `/privacy`, Terms → `/terms`, Imprint → `/imprint`. Stacks to one column below 768px.

`#footer-placeholder` gets a rough `min-height` in `style.css` so injection doesn't jump the page's scroll height; it sits below all content, so an exact match matters less than the header's.

Visual spec — sticky, cream, hard 3px dark bottom rule, no shadow. Left: `NSC` wordmark. Middle: four sub-page links plus a "Newsletter" link that opens the beehiiv popup. Right: the yellow `.btn-primary--sm` CTA on the same Tally form as the hero button.

Two deliberate constraints:
- **Nav links are plain text, never tags or stickers.** Made into pills the bar becomes a sticker sheet competing with the hero, and yellow stops being the one colour that means "click this". Only two things in the bar carry weight: the wordmark and the CTA.
- **The bar has no shadow.** It is the top edge of the paper, not an object on top of it — and a sticky shadow would drag across all nine sections on scroll.

Below 768px the nav links are hidden and only the wordmark and CTA remain. There is no hamburger menu, by choice: a drawer is more machinery than a four-link site needs, and it is not part of the design vocabulary.

JavaScript is inline at the bottom of each HTML file. The `js/` directory is currently empty.

## Design concept

The page is not a website about camp — it looks like what someone brought home: a sticker-covered trapper-keeper page assembled with scissors and a glue stick circa 1996. Everything is a physical object stuck down by hand — each element has its own weight and shadow. The restraint is in the palette (four colors, no animations) — that's what keeps it energetic rather than messy.

**Section backgrounds.** The page is a stack of sheets, not one beige field. A section gets *either* a soft wash *or* a light pattern — never both. Exactly two sections (the Julie quote and Everything's Included) carry a full teal colour field with a pattern on top; the page is paced around them. No dark section backgrounds. Every pattern is built from hard colour stops, never a soft gradient — same reason the shadows have no blur. The full section-by-section list is commented at the top of `css/style.css`.

**The non-negotiable rule: hard shadows, zero blur.** Every shadow is a flat offset (`6px 6px 0 var(--color-dark)`). No `blur` values anywhere. This is what makes everything look cut out and placed, not designed in software. Breaking this breaks the whole aesthetic.

**Color guide**

| Element | Allowed colors |
|---|---|
| Headline stickers (`.sticker`) | Pink, teal, orange |
| Info tags / pills (`.info-tag`, `.badge`) | Pink, teal, orange |
| Primary CTA button (`.btn-primary`) | Yellow only |
| Navigation buttons (prev/next arrows) | Yellow only |

Yellow is exclusively for interactive controls. Never use it on stickers or tags.

**Typography roles:**
- Bungee → sticker headlines and CTAs (chunky, poster-like)
- Archivo Black → info strips, badges, labels (flat, functional, all-caps)
- Kalam → captions, quotes, secondary CTAs (handwritten note voice). Weights 300/400/700 loaded; use 700 for "loud" spots (pull-quotes, checklist items) since it lacks Permanent Marker's inherent heft.

**UI elements and their purpose**

| Element | Class(es) | Used for |
|---|---|---|
| Sticker | `.sticker` | Section headline labels |
| Info tag | `.info-tag` | Small metadata (location, date, duration, status) |
| Badge pill | `.badge--pill` | Short status callouts ("30% sold out") |
| Polaroid | `.polaroid` | Photo frames and video placeholders |
| Quote card | `.quotes-duo__card` / `.quotes-lr__card` | Testimonial and pull-quote blocks |
| Torn paper card | `.quote-card--paper` | Long-form quotes overlaid on a notebook paper image |
| Schedule card | `.sched-b2__card` | Timeline event cards |
| Primary CTA button | `.btn-primary` | Main action calls-to-action |
| Nav arrow button | `.sched-b2__btn` | Prev/next controls for scrollable sections |

New elements can be introduced where needed — they should feel like a physical object from the same 1996 camp collage (sticker, tag, card, handwritten note, cutout, etc.) and must follow the hard-shadow/zero-blur rule and the color palette.

**Responsive breakpoints:** 1100px (tablet), 768px (mobile). Layout shifts from CSS Grid to single-column; horizontal scroll strips stay as flex rows.

## Photo placeholders

Most photo slots (`polaroid__frame`, `sched-b2__photo`, `accom-a__photo`, `venue__ph--*`, etc.) are empty divs with colored CSS backgrounds. They are intentional placeholders awaiting real photos. Swap in `<img>` tags with `class="polaroid__img"` (or the relevant photo class) when real assets are ready.

## Schedule layout

The schedule section uses layout **B2** (horizontal pin timeline, `.sched-b2`). Three earlier design variants (A1 tab-nav, A2 accordion, B1 cinematic scroll) and their `<details class="layouts-archive">` toggle were removed; if they're ever needed again, recover them from git history.

## Data model (`data/campers.json`)

```
campers: [{ id, name }]
camps: [{
  name, year, location,
  teams: [{ name, points, won, campers: [camperId, ...] }]
}]
```

`ranking.html` aggregates this client-side: for each camper, it sums `camps` attended, `wins`, and total `points` across all teams they appear in. Badge thresholds: duck-foot (3+ camps), bear-paw (5+ camps), bonfire (3+ wins).
