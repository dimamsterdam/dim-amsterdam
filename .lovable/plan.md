

# Improvement Plan: Logo Bar, Thematic Landing Pages, Social Proof, and About Page

## 1. Client Logo Bar (Homepage)

Add a scrolling logo bar below the hero section showing organizations DIM has worked with. Based on the testimonials data in `ReferencesPage.tsx`, the following organizations can be featured:

- Ministerie van Infrastructuur en Milieu (ANVS)
- Ministerie van Algemene Zaken (WRR)
- Ministerie van Binnenlandse Zaken (RVB)
- Erasmus Medisch Centrum
- Ministerie van Landbouw (NVWA)
- Ministerie van Economische Zaken
- Ministerie van Buitenlandse Zaken
- Ministerie van Volksgezondheid

**Implementation:**
- Create `src/components/ClientLogoBar.tsx` with a horizontally scrolling/marquee row of client logos
- Use placeholder styled text badges for now (actual logos require permission/assets from clients)
- Place it between `MinimalistHeroSection` and `MinimalistTestimonialsSection` in `MinimalistVariant.tsx`
- Subtle animation using CSS keyframes for continuous scroll

---

## 2. Thematic Landing Pages

Create 2 new thematic pages targeting common search terms in the public sector organizational development space:

### Page A: "Verandermanagement in de publieke sector"
Route: `/themas/verandermanagement-publieke-sector`
- Intro on why change management is different in the public sector
- How DIM approaches it (link to services)
- Relevant case references (Cultuurverandering, Herijking visie & strategie)
- CTA to contact

### Page B: "Leiderschap in het publiek domein"
Route: `/themas/leiderschap-publiek-domein`
- Challenges of leadership in government/semi-public organizations
- DIM's approach (link to services)
- Relevant case references (Leiderschapsprogramma, Intervisie)
- CTA to contact

**Implementation:**
- Create `src/pages/themas/VerandermanagementPage.tsx`
- Create `src/pages/themas/LeiderschapPubliekDomeinPage.tsx`
- Add routes in `App.tsx`
- Add "Thema's" dropdown to navigation in `navigationData.ts`
- Add SEO meta tags per page

---

## 3. Social Proof / Impact Numbers

Add a statistics/impact section to the homepage showing key numbers:

- "10+ jaar" ervaring
- "50+ trajecten" begeleid
- "8 ministeries" als opdrachtgever
- "25+ jaar" gecombineerde ervaring

**Implementation:**
- Create `src/components/ImpactStats.tsx` with animated counters
- Place between the logo bar and testimonials section on the homepage
- Use framer-motion for number count-up animation on scroll

---

## 4. Expanded About Page

Significantly expand the current thin About page with:

- **Missie & Visie** section: why DIM exists, what drives the team
- **Werkwijze / Methodiek** section: DIM's approach explained (positive, sharp, involved -- reuse ValuesSection concepts)
- **Het Netwerk** section: description of DIM as a network organization, mention areas of expertise of network partners
- **Impact in cijfers**: reuse the ImpactStats component
- **Alexli profile** (keep existing, but enlarge the image from `w-1/6` to a proper portrait size)

**Implementation:**
- Rewrite `src/pages/AboutPage.tsx` with the expanded sections
- Fix the tiny Alexli image (currently `md:w-1/6` -- far too small)
- Add the ImpactStats component

---

## 5. Fix Remaining English Text (Bonus - Quick Win)

While implementing the above, also fix:
- `heroContent.ts`: change `description` and `cta` values to Dutch
- `Footer.tsx` line 81: change "All rights reserved" to "Alle rechten voorbehouden"

---

## Technical Details

### New files:
- `src/components/ClientLogoBar.tsx`
- `src/components/ImpactStats.tsx`
- `src/pages/themas/VerandermanagementPage.tsx`
- `src/pages/themas/LeiderschapPubliekDomeinPage.tsx`

### Modified files:
- `src/pages/variants/MinimalistVariant.tsx` -- add ClientLogoBar and ImpactStats
- `src/pages/AboutPage.tsx` -- full expansion
- `src/App.tsx` -- add 2 new routes
- `src/data/navigationData.ts` -- add Thema's menu item
- `src/content/heroContent.ts` -- fix English text
- `src/components/Footer.tsx` -- fix English copyright
- `public/sitemap.xml` -- add new page URLs

### No new dependencies needed
Uses existing framer-motion for animations and Tailwind for styling.

