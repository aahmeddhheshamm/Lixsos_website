---
name: LIXSOS Technologies
description: Software, marketing and ERP from one bilingual partner, printed like currency people trust in the LIXSOS brand colours.
colors:
  paper: "#f5f6fb"
  paper-2: "#eaedf7"
  paper-3: "#ffffff"
  ink: "#11163a"
  ink-soft: "#50577f"
  primary: "#2563eb"
  primary-hover: "#1d4ed8"
  primary-light: "#60a5fa"
  navy: "#0e1330"
  accent: "#7c3aed"
  cyan: "#22d3ee"
  blue: "#3b82f6"
  violet: "#8b5cf6"
  rule: "rgb(17 22 58 / 0.16)"
  rule-strong: "rgb(17 22 58 / 0.45)"
  snow: "#f5f6fb"
  night-paper: "#0b1030"
  night-paper-2: "#121941"
  night-paper-3: "#0f1538"
  night-ink: "#eef0fb"
  night-ink-soft: "#9aa3c7"
  night-primary-hover: "#93c5fd"
  night-navy: "#151d4d"
  night-accent: "#a78bfa"
  night-rule: "rgb(238 240 251 / 0.14)"
  night-rule-strong: "rgb(238 240 251 / 0.42)"
typography:
  display:
    fontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.2vw, 5.75rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.4vw, 5.2rem)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  section:
    fontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.2vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  display-arabic:
    fontFamily: "Amiri, serif"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0"
  body:
    fontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-lead:
    fontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body-arabic:
    fontFamily: "Noto Sans Arabic, Roboto, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0"
  label:
    fontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
  serial:
    fontFamily: "Roboto Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    letterSpacing: "0.08em"
    fontFeature: "tnum"
  microtext:
    fontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.55rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.28em"
rounded:
  none: "0px"
  print: "2px"
  seal: "9999px"
spacing:
  gutter-sm: "16px"
  gutter: "32px"
  cell: "24px"
  block: "48px"
  section: "112px"
  section-lg: "144px"
  container: "84rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    rounded: "{rounded.print}"
    padding: "0 24px"
    height: "48px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.paper}"
  button-primary-dark:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.navy}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.print}"
    padding: "0 24px"
    height: "48px"
  button-line-hover:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
  button-snow:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.navy}"
    rounded: "{rounded.print}"
    padding: "0 24px"
    height: "48px"
  button-snow-hover:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.navy}"
  button-snow-line:
    backgroundColor: "transparent"
    textColor: "{colors.snow}"
    rounded: "{rounded.print}"
    padding: "0 24px"
    height: "48px"
  button-snow-line-hover:
    backgroundColor: "transparent"
    textColor: "{colors.primary-light}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.print}"
    padding: "0 14px"
    height: "40px"
  chip-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 0"
  note:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "56px"
  sheet-cell:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "24px"
  sheet-cell-hover:
    backgroundColor: "{colors.paper-3}"
  navy-section:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.snow}"
    rounded: "{rounded.none}"
---

# Design System: LIXSOS Technologies

## Overview

**Creative North Star: "The Banknote Engraving"**

LIXSOS is printed like currency people trust, in the colours of its own logo. The ground is a cool, faintly lavender paper; text is a deep navy ink; one brand blue carries every action, emphasis and hover; violet prints serial numerals and markers. The logo's cyan → blue → violet spectrum appears only as engraved line work: the rings of the guilloche rosette, and the gradient of the logo mark and the wordmark's X. Arabic and English are the two faces of one note. In the dark theme the paper turns to a deep navy night note and the inks lift to stay legible on it.

Everything is drawn with lines, not light. Panels are square, framed by a fine double rule; work is packed edge to edge as an uncut sheet separated by hairline cut rules; process is a row of fixed, numbered stations. Guilloche rosettes and wave bands are generated in SVG; bands are tinted through `currentColor`, so a band takes whatever ink its context sets. The ERP product prints on its own navy note, with snow text and snow buttons, in both themes. State is shown by line form (a single rule becomes a double rule) and by the one brand blue, rarely by fill and never by glow.

Motion is a print pass: the rosette strokes draw in once on load, the hero note turns over when the language changes, pages cross-fade. There are no scroll reveals, smooth-scroll, rotating words, glass, blur or glows, and no gradients beyond the logo itself. Navy is a brand ground here, not an invitation to the neon-gradient agency hero with glass cards and particle canvases, which the world still rejects.

**Key Characteristics:**
- Cool paper ground, navy ink text, one brand blue for action, emphasis and every hover, violet for serial numerals.
- The logo spectrum (cyan, blue, violet) lives only in rosette line work and the logo's own gradient.
- Navy notes for the ERP product, in both themes.
- Square-cornered panels framed by fine double rules; hairline cut rules between cells.
- Roboto throughout for Latin (light 300 for hero and page titles, 400 for headings), Amiri and Noto Sans Arabic for Arabic, Roboto Mono only for serial numerals.
- Flat paper; depth comes from paper tone and rule weight.

## Colors

A restrained palette taken from the logo: three paper tones, two navy inks, one brand blue, one violet for numerals, a navy ground for the product, and the logo spectrum held back for line work.

### Primary
- **Brand Blue** (primary): the one action and emphasis colour. Primary buttons, the emphasised phrase of a heading, the active nav rule, focus outlines, selection, caret, selected chips, positive ERP deltas, hatched dashboard bars and the resting wave bands on paper. It is also the hover colour of every link, row, card title, arrow and toggle on paper.
- **Brand Blue Deep** (primary-hover): the primary button's hover fill on paper.
- **Light Brand Blue** (primary-light): the hover colour on navy (snow button fill, snow-line text and border), and the primary itself in the dark theme, where its hover lifts to Night Blue Hover (night-primary-hover).

### Secondary
- **Serial Violet** (accent): numerals and markers only. Serials, the tick that starts each process station, negative deltas and pending statuses in the ERP ledger, invalid field rules. Lifts to Night Violet (night-accent) in the dark theme.

### Tertiary
- **Logo Spectrum** (cyan, blue, violet): the three stops of the logo gradient. They print the rings of the guilloche rosette and the logo mark and wordmark X, and nothing else.
- **Navy** (navy): the ground of the ERP notes (home ERP section, ERP page hero, highlighted ERP plan) and the text colour on light buttons in the dark theme. Lifts slightly to Night Navy (night-navy) in the dark theme so the note still separates from night paper.

### Neutral
- **Cool Paper** (paper): the page ground.
- **Paper Shade** (paper-2): footer ground and image wells.
- **Paper White** (paper-3): the face of a note (hero, CTA, ERP dashboard, plan cards) and the hover fill of a sheet cell.
- **Navy Ink** (ink): headings and body text.
- **Soft Ink** (ink-soft): secondary text, descriptions, labels, microtext, resting arrows and resting bands. Its night value is the logo's "TECHNOLOGIES" lavender.
- **Hairline Rule** (rule) and **Cut Rule** (rule-strong): every border in the system, tinted from Navy Ink. The strong rule frames notes and sheets and underlines fields; the light rule divides inside them.
- **Snow** (snow): always paper-coloured, for text, rules and buttons on navy notes in both themes.
- **Night family** (night-paper, night-paper-2, night-paper-3, night-ink, night-ink-soft, night-rule, night-rule-strong): the dark-theme values of the same roles, swapped in under `html.dark`.

### Named Rules
**The One Blue Rule.** Brand Blue is the only action, emphasis and hover colour. Headings take one blue phrase at most; every hover on paper turns Brand Blue, and every hover on navy turns Light Brand Blue. No item has a hover colour of its own.

**The Violet Is For Numbers Rule.** Serial Violet marks numerals, station starts and negative or invalid states. It never fills a button or colours a heading.

**The One Gradient Rule.** The logo mark and the wordmark's X carry the brand gradient (cyan → blue → violet); nothing else on the site uses a smooth gradient. Line hatching built with hard-stop repeating gradients is drawing, not a gradient, and is allowed.

## Typography

**Display Font:** Roboto (with system sans); Amiri for Arabic
**Body Font:** Roboto (with system sans); Noto Sans Arabic for Arabic
**Label/Mono Font:** Roboto Mono, for serial numerals only

**Character:** One neutral, engineered family that gains its voice through weight: light titles set large and tight, like the denomination on a note, over a plain regular text face. In Arabic, Amiri Naskh takes the display role and Noto Sans Arabic the text role; both scripts are first-class faces of the same note.

### Hierarchy
- **Display** (300, clamp(2.5rem, 6.2vw, 5.75rem), 1.02): inner-page titles in the page hero, above a wave band.
- **Headline** (300, clamp(2.5rem, 5.4vw, 5.2rem), 1.04): the home hero headline inside the note.
- **Section** (400, clamp(2.1rem, 4.2vw, 3.75rem), 1.06): section headings and the CTA title.
- **Title** (400, 1.6rem to 2rem, leading-tight): project cards, process stations, service ledger rows, plan names, mobile menu items. The next-item link scales to 4.5rem.
- **Body** (400, 1rem, 1.625): running text in Soft Ink. Lead paragraphs step to 1.125rem to 1.25rem, capped at about 42rem.
- **Label** (600, 0.875rem to 0.95rem): buttons, field labels, link-rule text. Sentence case.
- **Serial** (Roboto Mono 400, 0.72rem, 0.08em, tabular): serial numbers such as `LX-003 · 2025` and `№ 2 / 4`, always in Serial Violet, always `dir="ltr"`. The same face sets ERP deltas and invoice IDs.
- **Microtext** (500, 0.55rem, 0.28em): repeated security lettering used as a line between rules, decorative and `aria-hidden`.

### Named Rules
**The Light Display Rule.** Only the hero headline and inner-page titles are set light (300); every other heading is regular (400). Weight, not a second family, separates the two.

**The Mono Is A Serial Rule.** The mono face prints numerals only: serials, IDs, deltas. It never sets prose, labels or headings. (The wordmark is a brand asset and keeps its own light, tracked Roboto setting.)

**The Two Faces Rule.** Under RTL the display face swaps to Amiri (700, line-height 1.35) and text to Noto Sans Arabic, and all letter-spacing is removed so Arabic letters stay joined. Tracking survives only inside explicit LTR islands.

## Layout

A single centred container (84rem max) with 16px gutters on phones and 32px from `sm`. Sections are spaced generously, 112px on phones and 144px from `md`; heading-to-content gaps are 48px. Grids are 12-column at `md`/`lg`: text takes 7 columns against a 5-column visual, or 6/6 on the navy ERP note.

Collections are packed, not floated. The work grid is an uncut sheet (1, 2, then 3 columns) whose cells share hairline borders with no gaps. The service list is a full-width ledger of ruled rows. The process is four stations in a row, each started by a violet tick on the top rule, stacking with horizontal rules on phones. Logical properties (`ps`, `pe`, `border-e`, `inset-inline-start`) are used throughout so every layout mirrors cleanly in RTL; arrows flip with `rtl:-scale-x-100`.

The fixed header is 4.25rem tall over the paper ground; page heroes clear it with 128px to 160px of top padding. Navy sections run full-bleed, edged top and bottom by a snow wave band.

## Elevation & Depth

The system is flat paper. Depth comes from paper tone (paper, paper-2, paper-3, navy) and rule weight (rule vs rule-strong), never from cast shadows. Box-shadow is used as a drawing tool: inset rings draw the double frame of a note and the inner rule of a button.

### Shadow Vocabulary
- **Note frame** (`box-shadow: inset 0 0 0 5px var(--color-paper), inset 0 0 0 6px var(--color-rule)` with a 1px rule-strong border): the double rule around every note panel. On a navy note the inner ring and border take navy, with a faint snow hairline.
- **Button inner rule** (`box-shadow: inset 0 0 0 3px <fill>, inset 0 0 0 4px color-mix(in oklab, var(--color-paper) 45%, transparent)`): the printed inner line on filled buttons, strengthening to 60% on hover.
- **Header at rest / scrolled** (`0 1px 0 var(--color-rule)` / `0 1px 0 var(--color-rule-strong), 0 8px 24px -18px rgb(0 0 0 / 0.35)`): the only soft shadow in the system, appearing only once the page scrolls under the header.

### Named Rules
**The Drawn Not Lit Rule.** Edges are drawn with rules. If a surface needs separation, change its paper tone or its rule weight; do not add a cast shadow, glow or blur.

## Shapes

Square corners everywhere. Notes, sheets, cells, image wells, fields, plan cards and the ERP dashboard have no radius; buttons and chips take a barely-softened 2px, like the corner of a trimmed print. The only circles are the rosette, its frame rings, the logo's hub and nodes, and the round logo seal on the about page. Frames are double rules; dividers are single hairlines; the nav's current page and a hovered link-rule switch to a double underline.

## Components

### Buttons
Printed panels with square corners and an engraved inner rule.
- **Shape:** squared (2px), 48px tall, 24px side padding, 0.95rem semibold label.
- **Primary:** Brand Blue fill, paper text, a paper-tinted inner rule 3px in. In the dark theme the fill is Light Brand Blue with navy text.
- **Hover / Focus:** fill deepens to Brand Blue Deep (dark theme: Night Blue Hover); focus shows the global 2px blue outline offset 3px. Disabled drops to 55% opacity with a progress cursor.
- **Line:** transparent with a 1px Cut Rule border and ink text; hover turns border and text Brand Blue.
- **Snow / Snow Line:** the pair used on navy notes. Snow is a snow fill with navy text and a faint navy inner rule, hovering to a Light Brand Blue fill; Snow Line is a half-opacity snow border with snow text, hovering to Light Brand Blue border and text.

### Chips
- **Style:** 40px tall, 2px corners, 1px Cut Rule border, ink text at 0.9rem.
- **State:** selected fills Brand Blue with paper text. Used as toggle buttons (`aria-pressed`) and as radio labels on the contact form.

### Cards / Containers
- **Note:** the signature container. Square, Paper White face, 1px Cut Rule border plus an inset hairline 5px inside (the double frame). 32px padding, 56px from `md`. Hosts the hero, the CTA and the ERP plan cards; the highlighted plan prints as a navy note.
- **Sheet cell (project card):** no border of its own; the sheet draws shared cut rules. 20px to 24px padding, image in a 16:10 hairline-framed well, violet serial above the title, hover fills Paper White, scales the image 2.5% and turns the arrow Brand Blue.
- **ERP dashboard:** a ledger figure on Paper White with a double-rule frame, ruled KPI cells, mono deltas in blue (positive) or violet (negative), and hatched bars drawn with a repeating 1px diagonal Brand Blue line under a 2px blue top rule.

### Inputs / Fields
- **Style:** ruled lines to write on, like the blanks of a printed form. Inputs are a transparent field with only a bottom Cut Rule; the textarea is a full Cut Rule box. Labels sit above in 0.875rem semibold.
- **Focus:** the rule turns Brand Blue and doubles in weight (an extra 1px blue shadow line); no glow.
- **Error:** `:user-invalid` turns the bottom rule Serial Violet.

### Navigation
- **Desktop:** 0.95rem medium links in Soft Ink with no underline at rest. Hover turns the text Brand Blue and draws one Cut Rule underline (offset 0.45em); the current page gets a double blue underline and ink text. A compact primary button ("Let's talk", 40px tall) sits at the end with the theme and language toggles, both hovering to Brand Blue.
- **Mobile:** a two-line hamburger that crosses into an X; the menu drops below the header as a ruled list of 1.75rem display-face items, the current one in Brand Blue.
- **Link-rule:** inline text links are semibold with a Cut Rule underline that becomes a double underline and Brand Blue text on hover.

### Logo Lockup (brand asset)
The circuit-rosette mark drawn with the logo gradient on paper-filled hub and nodes, beside the wordmark: "LIXSOS" in light Roboto tracked 0.14em with a bold gradient X, over "TECHNOLOGIES" in 0.5rem medium Soft Ink tracked 0.5em. Always `dir="ltr"`. A plain variant draws the mark in `currentColor` (inside the ERP dashboard and as the about-page seal).

### Guilloche Rosette and Bands (signature)
The rosette is up to four rings of phase-shifted curves (r = R + A sin(nθ + φ) + B sin(kθ − φ)) at 0.32 stroke inside two engraved frame circles, generated client-side and drawn in once with a 2.4s print ease. Each ring prints in a step of the logo spectrum at 80% opacity; hovering or focusing a denomination brings its ring to full strength and fades the others to 20%. Wave bands are a 48 × 14 SVG mask repeated horizontally and tinted by `currentColor`: Brand Blue at 40% to 60% on note, page-title and footer edges, snow at 25% to 40% on navy notes, Soft Ink at 50% on a resting denomination or ledger row that turns full Brand Blue on hover.

### Serial and Microtext Edges (signature)
A note's top and bottom edges carry a wave band, a hairline-ruled strip of repeated microtext, and a violet serial printed twice (top-end and bottom-start). Microtext wraps onto hidden lines so the visible run always ends on a whole repeat.

### Next Link
A closing full-width link between two Cut Rules: a small Soft Ink label, then the next item's title in display face up to 4.5rem, turning Brand Blue on hover while the arrow slides 8px toward the reading direction.

## Do's and Don'ts

### Do:
- **Do** frame every primary panel as a note: square corners, 1px Cut Rule plus the inset hairline 5px inside.
- **Do** pack collections edge to edge with shared hairline cut rules instead of gaps and floating cards.
- **Do** show state with line form and the one blue: single rule to double rule, rule to blue rule, soft ink to Brand Blue.
- **Do** use Brand Blue for every hover on paper and Light Brand Blue for every hover on navy.
- **Do** print serials in Roboto Mono, Serial Violet, tabular numerals, `dir="ltr"`.
- **Do** keep the ERP product on navy notes with snow text and snow buttons in both themes.
- **Do** draw ornament as SVG line art (guilloche rosettes, wave bands, 1px diagonal hatching).
- **Do** use logical properties and flip directional arrows so every surface mirrors in RTL, and strip letter-spacing from Arabic text.
- **Do** honour `prefers-reduced-motion`: the rosette appears fully printed and the note does not turn over.

### Don't:
- **Don't** use smooth gradients anywhere except the logo mark and the wordmark X; the only other gradient-built fill allowed is hard-stop line hatching.
- **Don't** use glows, glass, backdrop blur or particle canvases, on paper or on navy.
- **Don't** fill text, buttons or backgrounds with cyan or the spectrum violet; they are rosette and logo inks only.
- **Don't** give a service, card or link a hover colour of its own, or put more than one blue phrase in a heading.
- **Don't** round panels, cards or images; 2px on buttons and chips is the most the system allows.
- **Don't** set prose, labels or headings in the mono face, or set headings other than hero and page titles in the light weight.
- **Don't** add scroll reveals, smooth-scroll or rotating words; motion is a single print pass, a page cross-fade and the language turn-over.
- **Don't** cast soft drop shadows under panels; separate with paper tone and rule weight.
