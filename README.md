# template-invitation-web

Wedding invitation web template. Built with Next.js 16 App Router, Tailwind CSS v4, TypeScript, and Framer Motion.

Deployed at: `berikesan.com/invitation`

## Stack

- **Framework**: Next.js 16.2 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5, React 19
- **Animation**: Framer Motion 12
- **Package manager**: Bun

## Getting Started

```bash
bun dev
```

Dev server: [http://localhost:3000](http://localhost:3000)  
With basePath: [http://localhost:3000/invitation](http://localhost:3000/invitation)

## Commands

```bash
bun dev      # Start dev server (prints basePath URL)
bun build    # Production build
bun start    # Start production server
bun lint     # ESLint check
```

## Project Structure

```
app/
  layout.tsx          # Root layout (fonts, globals)
  page.tsx            # Template index listing
  globals.css         # Tailwind + CSS variables
  template-1/
    layout.tsx        # Template 1 metadata + CSS import
    template.css      # Template 1 fonts, color vars, utilities
    page.tsx          # Template 1 invitation page

components/
  shared/             # Reusable across all templates
  templates/
    template-1/       # Template 1 components

lib/                  # Shared utilities (cn() helper)
public/               # Static assets
```

## Adding a New Template

1. Create `app/template-N/page.tsx`
2. Create `components/templates/template-N/` with template components
3. Add entry to `templates` array in `app/page.tsx`

## Deployment

Deployed as sub-path under `berikesan.com/invitation`. `basePath: '/invitation'` is set in `next.config.ts`.

Asset path rules:
- `next/image` src → `/filename.png` (basePath auto-applied)
- `next/link` href → `/path` (basePath auto-applied)
- Raw HTML (`<audio>`, `<img>`) → must use `/invitation/filename` explicitly
- OpenGraph URLs → must be absolute `https://berikesan.com/invitation/...`
