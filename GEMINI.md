# template-invitation-web

> **Sync rule**: `CLAUDE.md` and `GEMINI.md` must stay identical except this header block. If you update rules in one, apply the same change to the other.

Wedding invitation web template. Next.js 16 App Router + Tailwind CSS v4 + TypeScript + Framer Motion.

## Stack

- **Framework**: Next.js 16.2 (App Router)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Language**: TypeScript 5, React 19
- **Animation**: Framer Motion 12
- **Icons**: Lucide React
- **Utils**: clsx + tailwind-merge (use `cn()` from `lib/utils.ts`)
- **Package manager**: Bun

## Project Structure

```
app/
  layout.tsx                  # Root layout (fonts, globals only — no template metadata)
  page.tsx                    # Index — lists available templates
  globals.css                 # Tailwind + CSS variables
  template-1/
    layout.tsx                # Template 1 metadata (title, OG, icons) + imports template.css
    template.css              # Template 1 fonts, color vars, utility classes (.bali-gradient, .glass-card)
    page.tsx                  # Template 1 invitation page

components/
  shared/                     # Reusable across all templates
    AudioPlayer.tsx
    BottomNav.tsx
  templates/
    template-1/               # Components for Template 1
      Cover.tsx
      Couple.tsx
      Events.tsx
      BottomSections.tsx      # exports: GallerySection, RSVPSection

lib/                          # Shared utilities (utils.ts has cn())
public/                       # Static assets
```

Add new templates by:
1. Creating `app/template-N/page.tsx`
2. Creating `components/templates/template-N/` with template-specific components
3. Adding entry to `templates` array in `app/page.tsx`

## Deployment

Site deploys as sub-path: `berikesan.com/invitation`
`basePath: '/invitation'` set in `next.config.ts`. No `assetPrefix` needed — basePath handles `_next/image` and `_next/static` automatically.

### Asset Path Rules
- `next/image` src → use `/filename.png` (basePath auto-applied by Next.js)
- `next/link` href → use `/path` (basePath auto-applied by Next.js)
- Raw HTML elements (`<audio>`, `<video>`, `<img>`) → must use `/invitation/filename` explicitly
- OpenGraph/meta URLs → must be absolute `https://berikesan.com/invitation/...`

## Commands

```bash
bun dev        # Start dev server
bun build      # Production build
bun start      # Start production server
bun lint       # ESLint check
```

## Code Conventions

### Components
- Server Components by default. Add `"use client"` only when needed (event handlers, hooks, browser APIs, Framer Motion).
- One component per file. Filename = component name (PascalCase).
- Props inline with type, not separate interface unless reused.

### Styling
- Tailwind utility classes only. No custom CSS except `globals.css`.
- Use `cn()` from `lib/utils.ts` for conditional classes (`clsx` + `tailwind-merge`).
- Tailwind v4: config lives in CSS (`@theme` in globals.css), not `tailwind.config.js`.
- Responsive: mobile-first (`sm:` `md:` `lg:`).
- No inline `style=` unless value is truly dynamic (e.g. calculated pixel values).

### TypeScript
- Strict mode on. No `any`. Prefer `unknown` + narrowing.
- Explicit return types on exported functions.
- Use `React.FC` or typed props — consistent per file.

### Images — always optimize
- **Static import first**: `import img from '@/public/photo.jpg'` — gives Next.js width/height automatically, enables build-time optimization.
- Use `next/image` always. Never `<img>` for content images.
- Static import → no need for explicit `width`/`height` props (inferred).
- Remote/dynamic src → must provide `width`/`height` or `fill` + `sizes`.
- Add `priority` on above-the-fold images (LCP candidates).
- Use `quality={85}` default; drop to `75` for gallery thumbnails.
- Prefer WebP/AVIF source files in `public/` — Next.js will still convert, but smaller originals = faster build.
- Never use raw `<audio src="/invitation/...">` path workaround for images — always go through `next/image`.

### Next.js App Router
- `layout.tsx` for shared shell. `page.tsx` for routes.
- Metadata: export `metadata` or `generateMetadata` from page/layout.
- Fonts: use `next/font` — already configured in layout.
- Links: use `next/link`. Never `<a>` for internal nav.

### Framer Motion
- Wrap animated components in `"use client"`.
- Prefer `motion.*` variants over `animate` prop for performance.
- Keep animation config in component, not global constants, unless shared.

## Key Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, fonts, globals — clean, no template metadata |
| `app/globals.css` | Tailwind imports, CSS variables, base styles |
| `app/page.tsx` | Template index listing |
| `app/template-1/layout.tsx` | Template 1 metadata (title, OG, icons) |
| `app/template-1/page.tsx` | Template 1 invitation page |
| `lib/utils.ts` | `cn()` helper |
| `components/shared/AudioPlayer.tsx` | Background music player (shared) |
| `components/shared/BottomNav.tsx` | Bottom navigation (shared) |
| `components/templates/template-1/Cover.tsx` | Envelope cover overlay |
| `components/templates/template-1/Couple.tsx` | Couple info section |
| `components/templates/template-1/Events.tsx` | Event schedule + countdown |
| `components/templates/template-1/BottomSections.tsx` | Gallery + RSVP sections |
