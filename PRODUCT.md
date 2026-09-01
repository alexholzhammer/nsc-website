# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Digital nomads and remote workers looking for community and real human connection while living on the road. Two groups matter equally: NSC alumni deciding whether to come back, and first-timers who have never heard of NSC. Both are weighing a discretionary spend of a long weekend plus travel budget on an all-inclusive camp with people they mostly don't know yet — a social-trust decision more than a feature decision.

## Product Purpose

Marketing website for Nomad Summer Camp (NSC), an event series that brings digital nomads together for an all-inclusive long-weekend camp in a new location each edition. The site is currently scoped to the Cape Town 2027 edition — "Camp Big Daddy", Feb 12 2027, 3 nights — but is built to become NSC's permanent web presence.

The homepage's measurable job is to fill the Feb 2027 Cape Town camp to capacity. Its primary conversion action is the "Book Your Spot" application (Tally form `zxDW8M`): the visitor submits interest, then NSC contacts them for a short call before any deposit is taken — it is an application, not an instant checkout. Secondary goals are newsletter signups (beehiiv popup) and Instagram follows; both are click-only and not conversion-tracked.

## Positioning

NSC is fully worry-free: accommodation, every meal, every drink, and every activity are handled — the Camper just shows up and participates. It combines three things most nomad retreats don't do together:

1. **Total unplugging** — no work, no phone, no AI; being fully present is the point.
2. **Structured team competition** — games, epic challenges, and surprise events are the engine of the experience, not a side program.
3. **Connection through play** — friendships form through shared games and experiences, not networking or social media. Every edition generates its own memories and inside jokes.

Running since 2023 (first camp: Camp Bädäss, Austria), organized by four founders — Ali, Alex, Julio, and Jeff — who present as the camp's "Counselors".

## Operating Context

- Editions rotate location. Past camps: Austria, Serbia, Mexico, France, Cape Town. Camp Big Daddy (Cape Town) is now an annual edition; the first ran in 2026.
- Booking flow: form submission → NSC outreach → call → $99 deposit (described as fully refundable) → balance. Per the Terms page, deposit and balance are both due 12 Dec 2026; full refund on or before that date, none after. Attendees must be 18+ and carry travel insurance.
- Static site deployed to GitHub Pages from a domain root (CNAME). Local development requires an HTTP server — pages `fetch()` the shared nav/footer fragments and `data/campers.json`, and every asset path is root-relative, so `file://` breaks the site.
- Seven pages at clean URLs: `/`, `/rankings`, `/about`, `/past-camps` (unbuilt placeholder), `/imprint`, `/privacy`, `/terms`. Shared header (`nav.html`) and footer (`footer.html`) are HTML fragments injected by `components.js`.
- Third parties: Tally (booking form), beehiiv (newsletter popup + signup attribution), YouTube and Google Fonts, plus GA4 and a consent banner that are written for in the privacy policy but not yet wired up.
- Legal responsible person: Alexander Holzhammer (see `/imprint`; Texas SOS filing number still open). `/imprint`, `/privacy`, and `/terms` carry open TODOs and have not had a legal review.

## Capabilities and Constraints

- Plain static HTML plus one shared stylesheet (`css/style.css`, design tokens at the top), with page-specific JavaScript inline at the bottom of each file. No framework, no build step; the `js/` directory is empty.
- The all-time leaderboard (`/rankings`) aggregates `data/campers.json` client-side: 81 named Campers and 6 past camps with team membership and points. Badge thresholds: 3+ camps, 5+ camps, 3+ wins.
- Binding terminology: "Camp", "Camper", and "Counselor" are always capitalized. The rubber-chicken mascot is "Jeff". Camp lore also includes the "bad vibes ghost" and "Nubbel" — internal context, not homepage copy.
- The clean-URL structure and root-relative asset paths must be preserved; the site assumes domain-root hosting, not a `user.github.io/repo/` subpath.
- Many photo slots are intentional CSS placeholders awaiting real images; a substantial set of real photos and videos is already in place.
- Camp capacity (the number that defines "sold out") is not recorded here and must not be invented.

## Brand Commitments

- Name: Nomad Summer Camp / NSC. Current edition: Camp Big Daddy, Cape Town 2027.
- Voice: warm, irreverent, and genuinely fun — never corporate. Self-aware humor is on-brand. Copy should read like it was written by someone who loves camp, not by a marketing team.
- Incumbent visual world: a 1996 trapper-keeper / scrapbook collage — every element is a hand-placed physical object; hard flat shadows with zero blur; a four-color palette; yellow reserved exclusively for interactive controls; typefaces Bungee, Archivo Black, and Kalam. Documented in `CLAUDE.md` and `css/style.css`; no DESIGN.md yet.
- Logo asset: `nsc-logo-black.avif`.
- The live site nomadsummercamp.com is the reference for parity of claims and copy on ported pages (e.g. About).

## Evidence on Hand

- `data/campers.json` — 81 real named past Campers and 6 past camps (Austria, Serbia, Mexico, France, Cape Town) with real team names, points, and win records.
- Real, cleared testimonials with names and photos (Heather, Matty, Becca, Danny, Lindsey, Nela, Nikki, Rachel, Jeff) — genuine past Campers who consented to public use.
- Real camp photography and video: hero video (`bigdaddy-website-hero.mp4`), "day at camp" photos and clips, camp-grounds tour images, accommodation photos, and past-camp galleries (`camp-baedaess-*`, `camp-chateau-*`, `camp-chido-*`).
- Counselor portraits (`counselor-*.webp`) are placeholders per `CLAUDE.md`.
- No pricing or dates beyond the $99 deposit / balance model and the 12 Dec 2026 deadline should be fabricated.

## Product Principles

1. **Worry-free is the promise.** Every section should remove unknowns and friction, never add them — the Camper just shows up.
2. **Connection comes from play, not networking.** Lead with games, competition, and shared experience; never frame NSC as a professional or networking event.
3. **Unplugging is a feature, stated with confidence.** No work, no phone, no AI — pitched as the draw, not a sacrifice.
4. **Proof is people.** Real Campers, real names, real photos, and the all-time leaderboard are the main lever for a discretionary travel-budget decision.
5. **The homepage exists to fill the next camp.** "Book Your Spot" is the single loudest action; newsletter and Instagram are low-commitment fallbacks for the not-ready-yet visitor.
6. **Tone is non-negotiable.** Warm and irreverent, never corporate. If a line sounds like a marketing team wrote it, rewrite it.

## Accessibility & Inclusion

No product-specific standard was established. General web accessibility applies, and the scrapbook aesthetic — hard shadows, rotated stickers, a tight palette — must still meet basic text-contrast and visible-focus expectations. Audience is 18+.
