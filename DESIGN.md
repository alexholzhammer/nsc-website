---
name: Nomad Summer Camp
description: Marketing site for an all-inclusive, unplugged long-weekend camp for digital nomads — built to look like a hand-assembled 1996 camp scrapbook.
colors:
  cream-paper: "#fff7ed"
  sticker-pink: "#f43f5e"
  sticker-teal: "#14b8a6"
  sticker-orange: "#f97316"
  control-yellow: "#facc15"
  ink-navy: "#1b1533"
  card-white: "#ffffff"
  frame-gray: "#d4d4d4"
  wash-blush: "#fdeef1"
  wash-peach: "#fdeee0"
  wash-mint: "#ecf7f4"
typography:
  display:
    fontFamily: "Bungee, sans-serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.06em"
  quote:
    fontFamily: "Kalam, cursive"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
rounded:
  sharp: "0"
  sticker: "16px"
  pill: "999px"
spacing:
  gutter-left: "155px"
  gutter-right: "80px"
  section-top: "80px"
  section-bottom: "96px"
components:
  button-primary:
    backgroundColor: "{colors.control-yellow}"
    textColor: "{colors.ink-navy}"
    typography: "{typography.display}"
    rounded: "{rounded.sharp}"
    padding: "16px 36px"
  button-primary-sm:
    backgroundColor: "{colors.control-yellow}"
    textColor: "{colors.ink-navy}"
    typography: "{typography.display}"
    rounded: "{rounded.sharp}"
    padding: "10px 20px"
  button-newsletter-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.card-white}"
    typography: "{typography.display}"
    rounded: "{rounded.sharp}"
    padding: "15px 30px"
  sticker-headline:
    backgroundColor: "{colors.sticker-teal}"
    textColor: "{colors.card-white}"
    typography: "{typography.display}"
    rounded: "{rounded.sticker}"
    padding: "10px 20px"
  info-tag:
    backgroundColor: "{colors.sticker-pink}"
    textColor: "{colors.card-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "8px 16px"
  badge-pill:
    backgroundColor: "{colors.sticker-orange}"
    textColor: "{colors.card-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  card-outlined:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.sharp}"
    padding: "28px 26px"
  polaroid:
    backgroundColor: "{colors.card-white}"
    rounded: "{rounded.sharp}"
    padding: "20px 20px 80px"
---

# Design System: Nomad Summer Camp

## Overview

**Creative North Star: "The Camp Scrapbook"**

The page is not a website about camp — it is the scrapbook someone assembled after they got home: photos pinned down, captions written in pen, stickers and torn notebook paper stuck to the sheet with a glue stick, circa 1996. Every element is a discrete physical object with its own weight, its own hand-placed tilt, and one hard-edged shadow proving it sits a few millimetres above the page. Nothing looks generated in software, and that is the whole point.

The energy comes from density and colour — chunky poster type, four loud hues, objects overlapping at angles — but the restraint is what keeps it a scrapbook and not a mess: a tight palette, hard 90° corners almost everywhere, no soft gradients, no blur, and a page paced as a stack of paper sheets where only two of them are allowed to shout in full colour. Motion is currently minimal — a single tactile "press" on interactive controls — and is an open area for future work, welcome as long as it doesn't undermine the cut-and-glued, hard-edged feel.

Confirmed anti-references: anything that looks designed in a computer — soft drop shadows, blurred glass, smooth gradients, rounded-everything cards, tasteful restraint for its own sake. This is scissors-and-glue, not Figma-default.

**Key Characteristics:**
- Every placed object casts one flat, zero-blur offset shadow in ink.
- Four accent hues (pink, teal, orange, yellow) over three neutrals (cream, ink-navy, white); yellow is controls only.
- Borders are inset outlines drawn just inside the edge, not `border`.
- Hard 90° corners everywhere except stickers (16px) and pills/discs (999px).
- Objects are hand-rotated in small amounts (−4° to +4°) and vertically nudged so rows read as placed by hand.
- The page is a stack of paper sheets: each section gets either a soft wash or a hard-edged pattern, never both; exactly two carry a full teal colour field.
- Three type voices with fixed jobs: Bungee (poster), Archivo Black (functional), Kalam (handwriting).

## Colors

Four saturated "marker" hues doing all the shouting, set against a warm cream page, near-black navy ink, and white card stock. Three barely-there tinted washes give quiet sections their own sheet of paper.

### Primary
- **Control Yellow** (#facc15): interactive controls only — the primary CTA button, the header CTA, prev/next scroll arrows, video play buttons, modal close buttons. Its scarcity is the signal; if it is yellow, it is clickable.

### Secondary
- **Sticker Pink** (#f43f5e): headline stickers, info tags, one of the diagonal-stripe pattern fields (the schedule section). Warm, loud, used in short bursts.
- **Sticker Teal** (#14b8a6): headline stickers, info tags, time chips, icon discs, checkmarks, and — uniquely — the two full colour fields (the Julie quote and Everything's Included) plus the site footer. Teal is the closest thing to a brand core colour.
- **Sticker Orange** (#f97316): headline stickers, info tags, the "30% sold out" badge, and the hard rule under the active nav link.

### Neutral
- **Cream Paper** (#fff7ed): the default page ground and every "flat" section background. The sheet everything is glued to.
- **Ink Navy** (#1b1533): all body text, every outline, and every shadow. Reads as near-black but carries a faint violet warmth. Also the fill for the two deliberately dark interiors (venue info panel, video modal).
- **Card White** (#ffffff): card surfaces, polaroid mats, icon and social discs.
- **Frame Gray** (#d4d4d4): the fill of an empty photo frame — a visible "photo goes here" placeholder, not a final colour.

### Washes (quiet-section grounds)
- **Wash Blush** (#fdeef1), **Wash Peach** (#fdeee0), **Wash Mint** (#ecf7f4): a breath of palette colour behind a calm section (About intro, A Day at Camp, Where You'll Stay). Never a colour field — just a tinted sheet.

### Handwriting ink
Kalam text is not always set in ink-navy: polaroid captions use a warmer note-blue (#2d52c8) and torn-paper quotes a lined-paper blue (#1e3a6e). These are local to handwritten voice; do not promote them to primitives.

### Named Rules
**The Yellow-Is-A-Verb Rule.** Yellow (#facc15) appears only on things you can click. It never goes on a sticker, a tag, or a badge. Break this and yellow stops meaning "press here".

**The Two-Loud-Sheets Rule.** At most two sections on a page carry a full teal colour field (currently the Julie quote and Everything's Included). Everything else is cream or a wash. The page is paced around those two payoffs.

**The One-Or-The-Other Rule.** A section gets either a soft wash or a hard-edged pattern (halftone, barber stripe, ledger grid, contour lines). Never both, and never a soft gradient — every pattern is built from hard colour stops.

## Typography

**Display Font:** Bungee (fallback: sans-serif)
**Body Font:** Archivo Black (fallback: sans-serif)
**Handwriting Font:** Kalam — weights 300 / 400 / 700 (fallback: cursive)

**Character:** Bungee is a stacked, sign-painter poster face — it does the loud, chunky headline work. Archivo Black is a single heavy grotesque used flat and functional for every label and every line of running copy. Kalam is the pen: captions, pull-quotes, checklist items, the voice of a real person writing on the page. The pairing is deliberately three separate registers — poster, machine-label, handwriting — with no overlap in their jobs. (Note: the handwriting voice was Permanent Marker earlier in the project; it is Kalam now, and 700 is used wherever the handwriting needs weight since Kalam lacks Marker's inherent heft.)

### Hierarchy
- **Display / Sticker** (Bungee 400, 3rem desktop → 2.25rem ≤1100px → 1.75rem ≤768px, line-height 1.1, uppercase): section headline stickers and CTA labels. Always inside a sticker or a button, never bare on the page.
- **Display / Name** (Bungee 400, ~1.2–2.8rem): venue names, accommodation names and prices, schedule card titles. Same font as the sticker headline, smaller, unstickered.
- **Body** (Archivo Black 400, ~0.88–1.05rem, line-height 1.5): sub-heads, feature copy, card text. Kept short — this face has one heavy weight and does not tolerate long paragraphs.
- **Label** (Archivo Black 400, 0.65–0.8rem, letter-spacing 0.05–0.08em, uppercase): info tags, badges, nav links, section headings, time chips, quote attributions. Often set at reduced opacity (0.45–0.55) for secondary labels.
- **Handwriting / Quote** (Kalam 700, 1.05–1.7rem, line-height ~1.3): polaroid captions, pull-quotes, checklist items, testimonial quotes, accommodation pros. Coloured in note-blue rather than ink where it sits on "paper".

### Named Rules
**The Three-Voices Rule.** Bungee = poster, Archivo Black = machine label, Kalam = a person's handwriting. A piece of text picks exactly one voice for exactly its job. No blending.

**The Short-Copy Rule.** Body text is Archivo Black, which is all weight and no air. Keep it to a couple of lines; if a paragraph wants to run long, that is a content problem, not a reason to switch to a lighter weight.

## Layout

Centred content inside a `max-width: 1440px` inner (some sections tighten to 1100 / 960 / 1180). Page gutters are deliberately **asymmetric** — `--gutter-left: 155px`, `--gutter-right: 80px` — which biases content left like a binder with a wide punched margin; two sections that read as full-width bands (the hero and the footer) override this to symmetric 80/80.

Vertical rhythm is consistent: roughly `80px` padding above and `96px` below each section, so the sheets stack evenly. Section backgrounds change between sheets (cream, wash, or the two teal fields) to make the stack legible.

Horizontal strips — the schedule timeline, the venue tour, the accommodation cards, the polaroid strip — stay as `overflow-x` flex rows (some with `scroll-snap`) at every breakpoint and are dragged or scrolled; only the grid sections collapse. The testimonial wall is CSS multi-column (3 → 2 → 1).

**Breakpoints:** `1100px` (tablet) and `768px` (mobile) collapse multi-column grids to a single column and step type down. A separate `1101px` desktop-only rule turns the header into a fixed 80px bar that collapses to 50px on scroll; tablet and mobile keep the header's natural height. Below `768px` the header shows only the wordmark and CTA — no hamburger, by choice.

## Elevation & Depth

**No ambient or soft shadows exist in this system.** Depth is physical and faked with hard geometry: every placed object casts exactly one flat, zero-blur offset shadow in ink-navy, so it reads as a paper cutout lifted a few millimetres off the sheet. Further layering comes from the stacked-sheet section model and from hand rotation, not from blur or realistic lighting.

### Shadow Vocabulary
- **Small** (`box-shadow: 3px 3px 0 #1b1533`): badges, small chips, social discs, tight card treatments.
- **Medium** (`box-shadow: 6px 6px 0 #1b1533`): the default for stickers, white outlined cards, feature cards.
- **Large** (`box-shadow: 7px 7px 0 #1b1533`): the primary CTA button at rest.
- **X-Large** (`box-shadow: 9px 9px 0 #1b1533`): polaroids and the video modal box — the heaviest objects on the page.
- **Torn-paper drop** (`filter: drop-shadow(6px 6px 0 rgba(27,21,51,0.22))`): follows the irregular silhouette of the notebook-paper and clipboard PNGs, where a rectangular `box-shadow` would betray the cut edge.

### Named Rules
**The Zero-Blur Rule.** No shadow in the system has a blur radius. Ever. `box-shadow` is always `Npx Npx 0`. The one blur in the codebase is the hero's two 100px-blur colour blobs at 0.25 opacity, which are background atmosphere behind a halftone and never touch a foreground object — treat that as the sealed exception, not a precedent.

**The Press Rule.** On `:hover` / `:active`, an interactive control shrinks its shadow (to `3px` or `1px`) and translates by the same offset (`translate(4px, 4px)` / `translate(2px, 2px)`) over `80ms` — the object is physically pressed into the page.

**The Edges-Have-No-Shadow Rule.** The sticky header and the footer get a hard `3px` ink rule and no shadow. They are the top and bottom edges of the paper, not objects on top of it; a shadow there would drag across every section on scroll.

## Shapes

Two radii, and only two: **stickers are 16px**, **pills and discs are 999px**. Every other object — cards, tags, badges bodies, polaroids, photo frames, modals, notes — has **hard 90° corners**.

Borders are not `border`. They are `outline` with a negative `outline-offset` (`4px solid` ink at `-4px`, or `2.5px solid` ink at `-2.5px`), so the ink line sits just inside the object's edge like a hand-drawn frame. `accom` cards and a few dashed dividers are the deliberate exceptions that use real `border`.

Recurring silhouettes and cutouts:
- **Polaroid:** white mat, `20px` sides, `80px` chin for a handwritten caption; always rotated a few degrees.
- **Circular cutout:** icon discs, social buttons, and play buttons are the only true circles — a teal or white disc with a thin inset outline and a small hard shadow.
- **Torn notebook paper:** an actual raster PNG with absolutely-positioned Kalam text laid over it.
- **Pushpin:** a small rotated pin PNG pulled up over the top edge of scroll cards with a soft real drop-shadow (the one place a blurred shadow is allowed, because it is inside the pin artwork).
- **Clipboard:** a PNG holding the "Everything's Included" checklist.

## Components

### Buttons
- **Shape:** hard corners (`0` radius), inset `4px` ink outline at `-4px` offset, chunky Bungee uppercase label.
- **Primary** (`.btn-primary`): Control Yellow (#facc15) fill, ink-navy text, `16px 36px` padding, `7px 7px 0` shadow. The single filled button style on the site.
- **Small primary** (`.btn-primary--sm`): `10px 20px` padding, `3px 3px 0` shadow — used in the header bar.
- **Hover / Active:** shadow collapses to `3px 3px 0` (`1px 1px 0` for the small variant) and the button translates by the matching offset over `80ms` — the Press Rule.
- **Newsletter ghost** (`.site-footer__newsletter`): a hollow twin of the primary — transparent fill, `3px` white outline, white Bungee label, same `6px` shadow and same press. Outlined, never filled, so yellow stays the only "button colour".

### Tags & Badges
- **Info tag** (`.info-tag`): rectangular, hard corners, `2.5px` inset outline, no shadow, Archivo Black `0.75rem` uppercase white text on pink / teal / orange. Small metadata — location, date, duration.
- **Badge pill** (`.badge--pill`): `999px` radius, `2.5px` inset outline, `3px` shadow, uppercase label. Short status callouts ("30% sold out"), orange.
- Neither ever uses yellow.

### Cards / Containers
- **Corner Style:** hard 90° (`0` radius).
- **Background:** Card White on cream or teal grounds.
- **Border:** `4px` ink `outline` at `-4px` offset (the white outlined card); `accom` cards use a real `3px` border instead.
- **Shadow:** Medium (`6px 6px 0`); no hover change on static cards.
- **Internal padding:** ~`28px 26px` for feature cards; `36px 32px 28px` for quote cards.

### Polaroid
- White mat, `20px 20px 80px` padding, `4px` inset outline, X-Large (`9px 9px 0`) shadow, rotated −4° to +4°.
- `.polaroid__frame` holds the photo (or a Frame Gray placeholder); `.polaroid__caption` is Kalam 700 in note-blue on the chin.

### Navigation
- **Header:** sticky, cream, hard `3px` ink bottom rule, **no shadow**. Left: NSC logo image. Centre: plain uppercase Archivo Black text links at `0.72rem`, `opacity: 0.45`, rising to `1` on hover. Active link is full-opacity with an orange `3px` underline. Right: the small yellow CTA.
- **Links are text, never pills or stickers.** Only the wordmark and the CTA carry weight in the bar.
- **Mobile (≤768px):** links hidden; wordmark + CTA only. No drawer.
- **Scroll arrows** (`.sched-b2__btn`, `.accom-a__nav`): `44px` yellow squares, inset `4px` outline, `3px` shadow, same press on hover.

### Sticker Headline (signature)
Each headline line is its own puffy sticker: `inline-block`, `10px 20px` padding, `16px` radius, `4px` inset outline at `-4px`, Medium shadow, Bungee `3rem` white text. Colour is pink, teal, or orange — never yellow. Lines stack (`.headline-stack`) with a `12px` gap, each often rotated a touch.

### Torn-Paper Quote Card (signature)
A notebook-paper PNG with `position: absolute` Kalam text inset over it (`top: 12%; left: 7%; right: 18%` to clear the hole-punch margin). `filter: drop-shadow(6px 6px 0 rgba(27,21,51,0.22))` so the shadow follows the torn edge. Rotated ~1°.

### Pinned Scroll Card (signature)
Used in the schedule timeline and testimonial wall: a white card with a pushpin PNG in normal flow above it, pulled down over the card with a negative margin and rotated ±7–8°, so the card looks tacked to a board.

## Do's and Don'ts

### Do:
- **Do** give every placed object exactly one hard offset shadow in ink-navy from the `3 / 6 / 7 / 9px` set — always `Npx Npx 0`, never with blur.
- **Do** draw borders as `outline` with a negative `outline-offset` (`4px` / `2.5px` solid ink), so the line sits just inside the edge.
- **Do** keep Control Yellow (#facc15) exclusively on things you can click.
- **Do** hand-rotate repeated objects −4° to +4° and vary their vertical nudge (via `nth-child`) so rows read as placed by hand.
- **Do** build every section background from hard colour stops — halftone dots, barber stripes, ledger grid, contour lines — and give a section either a wash or a pattern, never both.
- **Do** keep the two full teal colour fields as the page's only loud sheets, and pace the layout around them.
- **Do** set headlines in a sticker (Bungee, 16px radius, inset outline, hard shadow) and nowhere else; use Kalam 700 for captions, quotes, and checklist voice.
- **Do** collapse a control's shadow and translate it by the same offset on hover/active (`80ms`) so it feels pressed.

### Don't:
- **Don't** add a blur radius to any shadow, or a soft gradient to any fill. The hero blobs are the one sealed exception.
- **Don't** put yellow on a sticker, tag, or badge.
- **Don't** make nav links into pills, tags, or stickers — they are plain uppercase text.
- **Don't** give the sticky header or footer a shadow; they get a hard `3px` rule only.
- **Don't** use a dark colour as a section background — only the venue info panel and the video modal interior are dark.
- **Don't** round the corners of cards, tags, polaroids, or photo frames; radius belongs to stickers (16px) and pills/discs (999px) only.
- **Don't** introduce a fifth accent hue, and don't set long paragraphs in Archivo Black — keep body copy brief.
