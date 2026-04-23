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
