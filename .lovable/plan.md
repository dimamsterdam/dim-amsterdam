

# DIM Website Improvement Plan

## Overview
This plan addresses issues found across UX, loading speed, security, and SEO. Changes are grouped by priority.

---

## Phase 1: Quick Wins (High Impact, Low Effort)

### 1. Fix HTML lang attribute
Change `lang="en"` to `lang="nl"` in `index.html` since the site is in Dutch.

### 2. Remove contentEditable attributes
Remove `contentEditable` from `MinimalistTestimonialsSection.tsx` and `EnhancedTestimonialsGallery.tsx` to prevent visitors from accidentally editing text.

### 3. Remove debug console.log
Remove `console.log("WhatWeDoSection is being rendered")` from `WhatWeDoSection.tsx`.

### 4. Clean up App.css
Remove the Vite template styles (`#root` max-width, padding, text-align) that could interfere with the layout.

### 5. Remove empty elements on About page
Clean up the empty `div` and `Card` elements in `AboutPage.tsx`.

---

## Phase 2: SEO Improvements

### 6. Add react-helmet-async for per-page meta tags
Install `react-helmet-async` and add unique title, description, and OG tags to each page so search engines and social platforms see relevant metadata for every route.

### 7. Add robots.txt
Create a `public/robots.txt` file allowing all crawlers and pointing to the sitemap.

### 8. Add sitemap.xml
Create a `public/sitemap.xml` listing all public pages with appropriate priorities.

### 9. Add JSON-LD structured data
Add Organization/LocalBusiness schema markup to the homepage for better search engine understanding.

### 10. Add canonical URLs
Include canonical link tags on each page to avoid duplicate content issues.

---

## Phase 3: Performance Improvements

### 11. Optimize font loading
Switch from CSS `@import` to `<link rel="preload">` in `index.html` with `font-display: swap` to prevent render blocking.

### 12. Add lazy loading to images
Add `loading="lazy"` and explicit `width`/`height` attributes to all images to reduce initial load and prevent layout shift.

### 13. Remove willChange from AnimatedSection
Remove the broad `willChange` CSS property to reduce GPU memory usage.

---

## Phase 4: Security

### 14. Remove Google Maps API key placeholder
Either implement the Google Maps component properly with a restricted API key stored as an environment variable, or remove the component entirely if not in use.

### 15. Add basic email obfuscation
Use `mailto:` links but consider light obfuscation techniques to reduce bot scraping of email addresses.

---

## Phase 5: UX Enhancements

### 16. Simplify WhatWeDoSection
Refactor the three near-identical card branches into a single reusable card component to improve maintainability.

### 17. Add skip-to-content link
Add a visually hidden skip link at the top of each page for keyboard and screen reader users.

### 18. Add a contact form
Enhance the Contact page with a simple form (name, email, message) using the existing emailjs-com dependency.

---

## Technical Details

### Files to modify:
- `index.html` - lang, font preloading, structured data
- `src/index.css` - remove font @import
- `src/App.css` - remove Vite template styles
- `src/components/minimalist/MinimalistTestimonialsSection.tsx` - remove contentEditable
- `src/components/EnhancedTestimonialsGallery.tsx` - remove contentEditable
- `src/components/minimalist/WhatWeDoSection.tsx` - remove console.log, refactor cards
- `src/components/AnimatedSection.tsx` - remove willChange
- `src/pages/AboutPage.tsx` - remove empty elements
- `src/pages/ContactPage.tsx` - add contact form
- `src/components/PageLayout.tsx` - add skip link
- Multiple page files - add react-helmet-async meta tags

### New files:
- `public/robots.txt`
- `public/sitemap.xml`

### New dependency:
- `react-helmet-async` - for per-page meta tag management

