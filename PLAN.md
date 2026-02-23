# Taylor James Music — Site Plan

## Brand

| Token | Hex | Usage |
|-------|-----|-------|
| Dark Brown | `#332219` | Primary background, nav, footer |
| Warm Tan | `#8C6C50` | Dividers, secondary accents |
| Teal | `#02B0B0` | CTAs, highlights, hover states |
| Off-white | `#E8E2DA` | Body text, light surfaces |

**Logos:**
- `TaylorJames.svg` — horizontal wordmark (nav, hero)
- `TJ Color BG.svg` — square monogram (used as favicon source)
- `favicon.svg` — generated square favicon (static/)

**Typography:** TBD — likely a warm serif for headings (Playfair Display, Lora, or Cormorant) + clean sans for body (Inter, DM Sans). Google Fonts or local.

---

## Architecture

Single SvelteKit page (`src/routes/+page.svelte`) with anchor-based scroll navigation.
Mobile-first. Touch and swipe friendly.

```
src/
├── routes/
│   ├── +layout.svelte       # Root layout — nav + favicon
│   ├── +page.svelte         # One-page shell, imports all sections
│   └── layout.css           # Tailwind entry + CSS custom properties
└── lib/
    └── components/
        ├── Nav.svelte        # Fixed top nav
        ├── Hero.svelte       # Section 1
        ├── About.svelte      # Section 2
        ├── Music.svelte      # Section 3
        ├── Shows.svelte      # Section 4
        ├── Contact.svelte    # Section 5
        └── Footer.svelte     # Footer
```

---

## Sections

### 1. Hero (`#hero`)
- Full viewport height
- Dark brown (`#332219`) background
- Taylor James wordmark SVG centered or left-aligned
- Tagline: *"Soulful guitar. Genre-blending sound. 20+ years live."*
- Two CTAs: **Listen** → `#music` | **Book Taylor** → `#contact`
- Subtle background texture or photo overlay (placeholder until photo provided)

### 2. About (`#about`)
- Split layout on desktop (photo | text), stacked on mobile
- Bio copy from brief — artistry first, booking context second
- Warm off-white section bg or subtle dark variant

### 3. Music (`#music`)
- Embedded player(s) — **platform TBD** (Spotify, SoundCloud, YouTube)
- Grid of 2–3 featured tracks or albums on desktop, single column on mobile
- Teal accent color on play states / borders

### 4. Shows (`#shows`)
- Upcoming dates table/list
- Columns: Date | Venue | City | Tickets link
- "No shows currently scheduled" fallback state
- **Dates TBD** — placeholder UI for now

### 5. Contact / Booking (`#contact`)
- Heading: *"Book Taylor James"*
- Short form: Name, Email, Event Type (dropdown), Message, Submit
- Or: simple mailto CTA link if form backend isn't set up yet
- **Approach TBD**

### Footer
- Copyright, social links (Instagram, Spotify, Facebook — **links TBD**)
- Minimal — dark brown bg, off-white text

---

## Navigation

- **Fixed** top bar, full width
- Logo (wordmark SVG) on left
- Links on right: About · Music · Shows · Booking
- On mobile: hamburger icon → slide-down or overlay menu
- Transparent over hero, solid dark bg after scroll (using `svelte/reactivity/window` scroll state)
- Active section highlighting via IntersectionObserver

---

## Mobile-First Notes

- Min tap target: 44×44px on all interactive elements
- Nav collapses to hamburger at `md` breakpoint
- All sections stack vertically, full width
- No horizontal scroll anywhere
- Smooth scroll: `scroll-behavior: smooth` on `html`

---

## Open Questions (need answers before building)

- [ ] **Photography** — hero background image, about photo? (placeholder for now)
- [ ] **Music platform** — Spotify artist link? SoundCloud? YouTube? Bandcamp?
- [ ] **Show dates** — any upcoming to display, or placeholder only?
- [ ] **Booking contact** — simple email link, or do you want a real contact form?
- [ ] **Typography** — any font preferences, or should I pick something that fits the brand?
- [ ] **Social links** — Instagram handle, Spotify artist URL, Facebook, etc.?
- [ ] **Domain/deployment** — Vercel, Netlify, or elsewhere? (affects adapter)

---

## Build Order

1. CSS custom properties + Tailwind theme tokens in `layout.css`
2. `Nav.svelte` — mobile hamburger + desktop links
3. `+layout.svelte` — wire up Nav
4. `Hero.svelte`
5. `About.svelte`
6. `Music.svelte` (placeholder until platform confirmed)
7. `Shows.svelte` (placeholder until dates confirmed)
8. `Contact.svelte`
9. `Footer.svelte`
10. SEO — `<svelte:head>` meta tags, OG tags, title
