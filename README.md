# KS Consulting — Design System

**Concept: "Premium Digital Performance."** A dark, technological, data-forward system for a Brazilian
performance-marketing / digital-strategy consultancy. It should read like strategy consulting × fintech ×
enterprise SaaS — never like a generic agency template, never gamer, never cyberpunk.

Three words: **Premium · Tecnológico · Performance.**

## Sources this system was built from

Everything here derives from material the client supplied in `uploads/` — there was **no codebase, no Figma
file and no live site** to read, so component inventory and screen content are authored from the written
brand direction plus the three visual references.

| Source | What it gave us |
| --- | --- |
| `uploads/Pagina de vendas - Trafego Pago, Social Media - Marcelo Oliveira.jpg` | Closest match to the business: PT-BR sales page for a performance-marketing consultancy — section order, copy patterns, testimonial/logo/FAQ blocks |
| `uploads/Cryptocurrency App Homepage Design with Neon Aesthetic.jpg` | Neon-lime accent on near-black, numbered 3-up cards with one filled lime card, data-viz motifs, giant metrics |
| `uploads/Complete Website Design for DigitalPro - Modern Marketing Agency.jpg` | Dark premium scale, oversized display type, colour-accented headline words |
| `uploads/Follow 👉 new AI prompts & tools daily 🔥.jpg` | Reference mood board (not used directly) |
| `uploads/KS - fundo transparente (PNG).png` | **O logo oficial** (3240×3240, fundo transparente) — origem de todas as variações em `assets/` |
| `uploads/KS - fundo transparente (SVG).svg` | Mesma marca em SVG, porém **sem dados de imagem** — arquivo inutilizável, mantido apenas como referência |
| Written brand direction (chat) | Full token set: palette, type scale, spacing, radii, shadows, motion, art direction |

The reference JPGs are *inspiration*, not the brand's own screens: the purple gradients of DigitalPro and the
teal of the sales page were deliberately **not** adopted. The palette is the one specified in writing.

## Products / surfaces

One surface exists today: the **institutional website** (`ui_kits/website/`) — home, services + pricing, cases +
testimonials, contact. A client results dashboard is implied by the data-viz motifs in the references but was
not specified; it has not been invented here.

---

# CONTENT FUNDAMENTALS

**Language: Brazilian Portuguese.** Formal-but-direct business register — *você*, never *tu*, never *vós*.
The brand speaks to a decision-maker (owner, CMO, commercial director), not to a marketing intern.

**Person.** "Você" for the client, "nós/a KS" for the company — used sparingly. Prefer sentences whose subject
is the client's business: *"Transforme sua operação em resultado mensurável"*, not *"Nós transformamos…"*.

**Tone.** Confident, specific, slightly blunt. Every promise carries a number or a timeframe. No hype
adjectives ("incrível", "revolucionário"), no exclamation marks in body copy, no scarcity theatre.

- ✅ "De R$ 180 mil para R$ 1,1 milhão em receita atribuída em 11 meses."
- ✅ "Você contrata resultado, não horas."
- ✅ "Diagnóstico gratuito de 30 minutos. Sem apresentação comercial."
- ❌ "A melhor agência do Brasil!!!"
- ❌ "Soluções inovadoras e disruptivas para o seu negócio."

**Headlines.** Sentence case, one to two lines, **one word carries the accent colour** (blue for
action/technology, lime for result/opportunity): *Transforme sua operação em <span>resultado</span>.*
Never all-caps headlines, never 800/900 weights — impact comes from scale and contrast, not from fat type.

**Micro-labels.** Every section opens with a numbered eyebrow: `01 — METODOLOGIA`, `03 / RESULTADO`.
Uppercase, 12px, .14em tracking, muted grey with the index in colour.

**Numbers.** Written large and alone: `98%`, `+500`, `24/7`, `R$ 1,1 mi`. Brazilian formatting —
comma decimal, dot thousands, `R$` before the value. Percentages get a sign when directional (`−41%`, `+512%`).

**Buttons.** Verb-first, 2–3 words: *Começar agora*, *Agendar diagnóstico*, *Falar com especialista*,
*Ver cases*. Never "Clique aqui", never "Enviar".

**Body copy.** Two to three sentences per block, max ~60 characters per line at body-lg. Concrete nouns
(receita, funil, CPA, pipeline) over abstractions (soluções, jornadas, ecossistemas).

**Emoji: never.** Not in UI, not in copy. Status is carried by colour, icons and dots.

**Claims discipline.** Case metrics are always attributed to a named client and a timeframe. Placeholder
content in this system (clients, quotes, numbers) is **fictional** and must be replaced before publication.

---

# VISUAL FOUNDATIONS

## Colour

Base ink `#080E1C` (blue-black) and `#080C0F` (tech-black) — **never pure `#000`**. Surfaces step up through
`#101827` (card) and `#162236` (elevated). Ink is `#F7F9FC` / `#B8C1D1` / `#697386`, borders `#26344A`.

Three signal colours with strict jobs:

- **Blue `#0066FF` → `#20A4FF`** — action, trust, technology. CTAs, links, active states, focus rings.
- **Lime `#BAFC04`** — result, growth, opportunity. The *marker* colour: at most one lime element per section.
- **Cyan `#00D9FF`** — data, information, interaction detail. Chart strokes, info badges, micro-accents.

Target mix: **70% dark · 20% white/grey · 7% blue · 3% neon.** If a screen looks "gamer", the lime is over budget.

## Type

**Space Grotesk** for display and headings (400–700, mostly 600), **Inter** for body and UI (400–500).
Scale runs 72 / 60 / 48 / 40 / 30 / 24 / 20 / 16 / 14 / 12 with a mobile ladder at 44 / 40 / 36 / 32 / 26 / 22 / 18.
Display tracking −.03em, headings −.02em, body 0, labels +.14em. Line height 1.04 display → 1.6 body.
Both families load from Google Fonts (`tokens/fonts.css`) — **no binaries were supplied**; see Caveats.

## Spacing & layout

8px base: 4 · 8 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128. Container 1280px max, side padding
32 / 24 / 20 (desktop / tablet / mobile). 12-column grid, 24px gap. Sections breathe at 96px, hero at 96–128px.
Negative space is a feature — a section with one headline and three numbers is finished, not empty.

## Backgrounds

Layered, never flat: ink base → hairline grid `rgba(255,255,255,.035)` at 48–64px → radial blue glow behind the
most important element → optional cyan radial → data elements (sparklines, metric chips) in front.
`GridBackdrop` paints layers 1–3 for you. Photography, when used, is cool-toned, dark, high-contrast, with
blue/cyan rim light; no warm or grainy imagery, no stock-office smiles.

## Cards

Default: `rgba(16,24,39,.70)` glass, 1px `rgba(255,255,255,.08)` hairline, 12px backdrop blur, 16px radius,
`0 20px 60px rgba(0,0,0,.35)`. Elevated/premium: solid `#162236`, 24px radius, deeper shadow. Featured: blue
border + inner blue gradient + blue glow. Neon: full lime fill with ink text — **one per section, maximum**.

## Borders, radii, shadows

Radii 8 / 12 / 16 / 24 / pill — buttons 12, inputs 10, cards 16, premium cards 24, badges pill. Nothing rounder;
the brand stays corporate. Shadows are near-black and diffuse (never coloured drop shadows). Glow
(`0 0 30px` blue/lime) is a *highlight*, applied to the one element that matters, never system-wide.

## Transparency & blur

Glass is used for cards over active backgrounds and for the sticky navbar (`rgba(8,14,28,.72)` + 12px blur).
Modals do **not** use glass — they sit solid on a blurred 72% scrim so text stays crisp.

## Motion

Precision and speed, never bounce. Viewport entrance: `opacity 0→1` + `translateY(30px)→0`, 600–800ms,
`cubic-bezier(.16,1,.3,1)`, 80–120ms stagger. Hero sequence 0 / 100 / 200 / 300 / 400ms
(headline → sub → CTA → visual → metrics). Charts draw 0→100%; counters run 0→target in ~1.2s.
Parallax is minimal (background 10–30px, foreground 5–15px). Reduced motion collapses all of it.

## Interaction states

- **Hover** — cards lift `translateY(-4px)` + border lights blue + soft glow; buttons lift `-2px` with
  brightness +10%; images `scale(1.02)`; links go blue → cyan. 200–300ms, ease-standard.
- **Focus** — 3px `rgba(0,102,255,.35)` ring plus a blue border. Never removed.
- **Press** — brightness down, lift released (no shrink transform).
- **Disabled** — 40% opacity, `not-allowed`, all motion cancelled.
- **Selected** — blue border + 14% blue tint (tags, tabs, radio, pills).

---

# ICONOGRAPHY

**Lucide** (line, 1.75 stroke at 20px; 1.5 above 32px), loaded from CDN
`https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js` and wrapped by the `Icon` component. **This is a
substitution** — the sources contained no icon set at all, and Lucide's thin geometric line style is the
closest match to the references' minimal outline glyphs. If KS has its own icon library, swap it in and
`Icon` is the only file that changes.

Rules: line icons only (no filled, no duotone, no multicolour); icons inherit `currentColor` and are usually
`text-secondary`, blue when they mark an action, lime when they mark a result. House set for this brand:
`trending-up`, `target`, `line-chart`, `bar-chart-3`, `zap`, `shield-check`, `globe`, `users`, `search`,
`megaphone`, `sparkles`, `arrow-up-right`, `arrow-right`, `check`, `mail`, `phone`, `calendar-check`, `settings`.
Icons in cards sit in a 44px rounded square with a 10% tinted fill and a 25–30% border of the same hue.

**No emoji, ever.** No unicode-glyph icons. Chevrons and checks that are pure geometry (select arrow, checkbox
tick) are drawn with CSS borders so they never depend on the CDN.

---

# ASSETS

## Logo

The mark is an engineering/calculus rebus: a **K** drawn as a fixed support (hatched wall) with two red force
arrows, and a **S** drawn as an open arc carrying `df/dx` and a red node — "consultoria que calcula a taxa de
variação do negócio". Word "CONSULTING" sits below in thin uppercase letterforms.

| File | Use |
| --- | --- |
| `assets/ks-logo-light.png` | **Default** — full lockup on dark backgrounds (ink strokes recoloured to `#F7F9FC`, red preserved) |
| `assets/ks-mark-light.png` | Symbol only, dark backgrounds — navbar, footer, favicon, avatars |
| `assets/ks-logo-mono-white.png` / `ks-mark-mono-white.png` | Single-colour white, for busy imagery or one-colour printing |
| `assets/ks-logo-dark.png` / `ks-mark-dark.png` | For light backgrounds (graphite strokes) |
| `assets/ks-logo-source.png` | Untouched original supplied by the client |
| `assets/ks-logo-source-EMPTY.svg` | Supplied SVG — **renders blank** (declares two 3375×3375 `<image>` elements with no embedded data). Kept only for traceability; please re-export a real vector. |

**Rules.** Minimum clear space = half the symbol height on every side. Minimum symbol height 28px on screen.
The logo red `#ED1C24` is **the mark's own colour** — never recolour it, and never introduce it into UI: it is
not a system colour and does not appear in buttons, links, charts or text. Never place the light logo on a
light background, never add glow or shadow to the mark, never stretch or rotate it. Horizontal lockup =
`ks-mark-light.png` + "KS **Consulting**" in Space Grotesk (600 / 400), 14px gap, symbol height 38px in a 76px navbar.

No photography, illustration or background imagery was supplied; none has been generated. Image slots in the
UI kit are filled with real data-viz (SVG sparkline built from data) rather than decorative placeholders.

---

# INDEX

**Root**
- `styles.css` — the single entry point consumers link; `@import` list only
- `readme.md` — this file · `SKILL.md` — Agent Skills wrapper · `thumbnail.html` — homepage tile

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `effects.css`,
`motion.css`, `base.css` (element defaults + `.ks-grid-bg`)

**`components/`** — each with `.jsx`, `.d.ts`, `.prompt.md`, and one `@dsCard` HTML per folder
- `core/` — **Button**, **IconButton**, **Card**, **Badge**, **Tag**
- `forms/` — **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
- `navigation/` — **Tabs**
- `feedback/` — **Dialog**, **Toast**, **Tooltip**
- `brand/` — **Icon**, **MicroLabel**, **StatBlock**, **GridBackdrop**

*Intentional additions* (no source defined an inventory, so a standard set was authored): the four `brand/`
components exist because the art direction demands them — `MicroLabel` (numbered eyebrow), `StatBlock` (giant
number + caption), `GridBackdrop` (ink + grid + glow layering) and `Icon` (Lucide wrapper) encode motifs that
would otherwise be re-hand-rolled on every screen.

**`guidelines/`** — 19 specimen cards: Colors (brand, surfaces, text, semantic, ratio, gradients),
Type (display, headings, body, headline accent), Spacing (scale, rhythm, radius, shadow), Brand (background
layers, motion, iconography, logo, lockup)

**`ui_kits/website/`** — `index.html` (click-through), `Chrome.jsx`, `HomeScreen.jsx`, `ServicesScreen.jsx`,
`CasesScreen.jsx`, `ContactScreen.jsx`, `README.md`

---

# CAVEATS

1. **Logo entregue em PNG** (3240×3240) e derivado em 6 variações. O SVG enviado continua vazio — se precisar de
   vetor para impressão/grandes formatos, reexporte com "Embed images" ligado.
2. **Fonts are Google Fonts substitutes by necessity** — Space Grotesk and Inter are the families named in the
   brief and are loaded from Google's CDN. If KS has licensed binaries, drop them in `assets/fonts/` and swap
   `tokens/fonts.css` to `@font-face`.
3. **Icons are a Lucide substitution** — no icon set was supplied.
4. **All copy, client names, quotes and metrics in the UI kit are fictional**, modelled on the structure of the
   reference sales page. They are placeholders for real KS material.
5. **Only one surface was modelled.** If KS also has a client dashboard, proposal deck or app, that kit is missing.
