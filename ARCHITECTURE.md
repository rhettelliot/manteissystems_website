# Manteis Systems Website Architecture

## Overview

The official website for Manteis Systems, built with Next.js and featuring a Batiq Noir design aesthetic. Showcases the company's products, philosophy, and capabilities.

---

## High-Level Design

```
┌─────────────────────────────────────────────┐
│              Next.js Application              │
│  ┌─────────────┐    ┌─────────────────────┐  │
│  │  App Router │    │  React Components   │  │
│  │  (Pages)    │    │  (UI + Sections)    │  │
│  └──────┬──────┘    └─────────────────────┘  │
│         │                                     │
│  ┌──────▼──────────────────────┐             │
│  │    Tailwind CSS + Images   │             │
│  │    (Styling + Assets)      │             │
│  └────────────────────────────┘             │
└─────────────────────────────────────────────┘
```

---

## Core Components

### 1. Next.js App Router
- TypeScript-based pages and layouts
- Static generation for performance

### 2. React Components
- Hero sections, product showcases, feature grids
- Batiq Noir visual language throughout

### 3. Styling & Assets
- Tailwind CSS for utility-first styling
- Custom images: hero, diagrams, audit graphics, mobile variants

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.2 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Hosting | Vercel |
| Domain | Squarespace (manteis.systems) |
| Build Pipeline | Vercel CI/CD |

---

## Design Principles

1. **Batiq Noir** — Crushed shadows, industrial futurism, black void aesthetic
2. **Performance** — Static generation, optimized images
3. **Mobile-first** — Multiple responsive hero and diagram variants
