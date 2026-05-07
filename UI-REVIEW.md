# Standalone UI Review — CDC Website

**Audited:** May 7, 2026
**Baseline:** Abstract 6-pillar standards (no UI-SPEC.md exists)
**Screenshots:** Not captured (no dev server running at localhost:3000 or 5173)

---

## Pillar Scores

| Pillar | Score | Key Finding |
|--------|-------|-------------|
| 1. Copywriting | 3/4 | Professional, specific copy; no generic labels found |
| 2. Visuals | 3/4 | Good animation implementation with Framer Motion; solid visual hierarchy |
| 3. Color | 2/4 | Extensive hardcoded hex values (41 instances) instead of CSS variables |
| 4. Typography | 2/4 | 3 different font families; inconsistent font usage across components |
| 5. Spacing | 3/4 | Consistent rem-based spacing; good grid layouts |
| 6. Experience Design | 3/4 | Smooth navigation, responsive design; static site, no loading/error states needed |

**Overall: 16/24**

---

## Top 5 Priority Fixes

1. **Color: Convert hardcoded hex values to CSS variables** — Inconsistent theming, hard to maintain; grep all 41 instances and replace with var(--primary), var(--muted), var(--subtle), etc.
2. **Typography: Standardize on two font families maximum** — Current 3 fonts (Inter, Outfit, Plus Jakarta Sans) create visual inconsistency; pick primary (Inter) and display (Outfit) only
3. **Color: Add missing CSS variables for frequently-used shades** — Add --slate-500 (#475569), --slate-400 (#94A3B8), --slate-300 (#Cbd5e1) to :root for reuse
4. **Typography: Remove inline font-family overrides** — Components like Hero.tsx line 26, 29 override fonts inline; rely on CSS defaults
5. **Spacing: Standardize section padding** — Some sections use padding: 6rem 0 (index.css), others use inline padding values; create .section-padded utility class

---

## Detailed Findings

### Pillar 1: Copywriting (3/4)

**Strengths:**
- No generic placeholder labels found (Submit, Click Here, OK, Cancel, Save)
- Section-specific, professional copy throughout all components
- Descriptive CTAs: "Explore Programs" (Hero.tsx:46), "Connect With Us" (Contact.tsx:15)
- Contact info uses specific, real-sounding content

**Findings:**
- Hero.tsx:26-27 — "MES MUKUNDDAS LOHIA COLLEGE OF ENGINEERING, PUNE" in uppercase with letter-spacing creates visual noise
- Events.tsx:144 — "Youth Empowerment: To Build a Talent Pool" has grammar issue ("To Build" should be "Building")

### Pillar 2: Visuals (3/4)

**Strengths:**
- Framer Motion animations implemented on Hero, About, Team, Stats, Programs
- Glass-card pattern consistently applied (index.css:78-85)
- Visual hierarchy through font size scaling (clamp() functions used)
- Hover states on buttons and cards

**Findings:**
- Hero.tsx:12 — Inline background gradient hardcoded instead of using CSS variable
- Events.tsx:197 — Fallback tag colors use hardcoded hex: `{ bg: '#F1F5F9', color: '#475569' }`
- No focal point on Programs section — cards could benefit from stronger visual anchors

### Pillar 3: Color (2/4)

**Strengths:**
- CSS variables defined in index.css:1-14
- Primary (#1E3A8A Navy) and accent (#B91C1C Maroon) well-chosen
- Consistent use in some components (Navbar, Footer)

**Critical Issues (41 hardcoded hex/rgb values found):**

| File | Lines | Issue |
|------|-------|-------|
| Hero.tsx | 12, 14, 35 | Background gradient, radial-gradient, text color hardcoded |
| Contact.tsx | 15, 35 | Headings use #0F172A instead of var(--text) |
| Footer.tsx | 10, 19, 22, 31, 38, 46, 50, 53, 54 | Multiple slate shades hardcoded |
| Events.tsx | 124-130, 177, 189, 197, 219 | Tag colors all hardcoded |
| About.tsx | 20, 34, 52 | Hardcoded colors for headings and backgrounds |
| Team.tsx | 13, 17, 28 | Section background, heading colors hardcoded |
| Programs.tsx | 51, 55, 66 | Background and heading colors hardcoded |
| Stats.tsx | 11, 17, 21 | Dark background, accent color hardcoded |

**Recommendation:** Create mapping: #0F172A → var(--text), #475569 → var(--muted), #94A3B8 → var(--slate-400), #F1F5F9 → var(--subtle)

### Pillar 4: Typography (2/4)

**Issues:**
- 3 font families in use: Inter (body), Outfit (headings), Plus Jakarta Sans (Hero.tsx:26,29)
- Inline font-family overrides in Hero.tsx:26, 29 override global styles
- No consistent font size scale — inline clamp() values vary between components

**Font Usage:**
- index.css:22 — body uses 'Inter', sans-serif
- index.css:29 — h1-h5 use 'Outfit', sans-serif
- Hero.tsx:26 — inline: fontFamily: 'Plus Jakarta Sans'
- Hero.tsx:29 — inline: fontFamily: 'Plus Jakarta Sans'
- Hero.tsx:23 — uses CSS var(--primary) which resolves but no font-family set

**Font Weights Found:** 400, 500, 600, 700, 800 (5 weights — exceeds recommended 2-3)

### Pillar 5: Spacing (3/4)

**Strengths:**
- Consistent rem-based spacing in inline styles (2rem, 1.5rem, etc.)
- Grid layouts properly implemented with gap-2rem (Programs, Team, About)
- index.css defines standard .section { padding: 6rem 0 } and .container { padding: 0 1.5rem }

**Inconsistencies:**
- Some sections override .section padding with inline styles (Events.tsx:135, Programs.tsx:51, Team.tsx:13)
- About.tsx:16 uses gap: '5rem' while other grid sections use 2rem-3rem gaps
- Hero section uses px values (paddingTop: 100) instead of rem

### Pillar 6: Experience Design (3/4)

**Strengths:**
- Smooth scroll navigation (html { scroll-behavior: smooth } in index.css)
- Mobile-responsive with hamburger menu (Navbar.tsx:68-82)
- Backdrop blur on sticky navbar
- AnimatePresence for mobile drawer animation
- Hover states on all interactive elements (buttons, links, glass-cards)

**Not Applicable (Static Informational Site):**
- Loading states — not needed (no data fetching)
- Error boundaries — not needed (no API calls)
- Empty states — not needed (no list rendering from data)

**Minor Issues:**
- Team.tsx:33-34 — Social links use href="#" (dead links)
- Contact.tsx:6 — No mailto: or tel: links on contact info

---

## Registry Safety

Registry audit: Not applicable — no shadcn/ui components detected, no components.json found.

---

## Files Audited

| File | Purpose |
|------|---------|
| src/App.tsx | Main app composition |
| src/main.tsx | React entry point |
| src/index.css | Global styles and CSS variables |
| src/components/Navbar.tsx | Navigation with mobile drawer |
| src/components/Hero.tsx | Landing section with animations |
| src/components/About.tsx | About the CDC with pillars grid |
| src/components/Programs.tsx | Training programs grid |
| src/components/Events.tsx | Workshop schedule (7 days) |
| src/components/Team.tsx | Leadership team cards |
| src/components/Stats.tsx | Placement statistics |
| src/components/Contact.tsx | Contact information cards |
| src/components/Footer.tsx | Footer with navigation |

---

## Recommendation Summary

- Priority fixes: 5 (color consistency, typography standardization)
- Minor improvements: 4 (grammar fix, dead links, section padding standardization)