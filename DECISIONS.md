# Manteis Systems Website Architectural Decision Log

---

## ADR-001: Next.js with Static Generation

**Date:** 2026-03
**Status:** Accepted

### Decision
Build the site with Next.js using static generation for fast, CDN-friendly deployment.

### Consequences
- **Pros:** Fast loads, SEO-friendly, easy to deploy to Vercel or any static host
- **Cons:** No server-side dynamics without API routes, rebuild required for content changes

---

## ADR-002: Tailwind CSS for Styling

**Date:** 2026-03
**Status:** Accepted

### Decision
Use Tailwind CSS for all styling.

### Consequences
- **Pros:** Rapid development, consistent design system, small CSS bundle
- **Cons:** Utility class verbosity, requires build step

---

## ADR-003: Custom Image Assets

**Date:** 2026-03
**Status:** Accepted

### Decision
Store all image assets (hero, diagrams, audit graphics) in the repository.

### Consequences
- **Pros:** Version controlled, no external CDN dependencies, works offline
- **Cons:** Repository bloat, requires optimization to keep sizes manageable

---

## ADR-004: Hosting on Vercel

**Date:** 2026-04
**Status:** Accepted

### Decision
Pivot from GitHub Pages to Vercel for hosting the application.

### Consequences
- **Pros:** Native Next.js support, faster builds, automatic HTTPS, and better image optimization.
- **Cons:** Another third-party dependency (though industry standard for Next.js).

---

## ADR-005: Custom Domain Management

**Date:** 2026-04
**Status:** Accepted

### Decision
Use Squarespace as the domain registrar and point DNS records to Vercel.

### Consequences
- **Pros:** Centralized domain management, easy DNS record updates.
- **Cons:** Propagation delay when updating records.
