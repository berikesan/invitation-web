# Gemini Agent Guide for template-invitation-web

This document serves as a guide for Gemini (coding assistant) to maintain and develop the `template-invitation-web` project.

## 🚀 Project Overview
A Next.js template for invitation websites, built with React 19, TypeScript, and Tailwind CSS 4.

## 🛠 Tech Stack
- **Framework**: Next.js 16.2.1 (App Router)
- **Library**: React 19.2.4
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4 (@tailwindcss/postcss)
- **Package Manager**: bun (inferred from `bun.lock`)

## ⚠️ Critical Rules (from AGENTS.md)
> [!IMPORTANT]
> **This is NOT the Next.js you know.**
> This version has breaking changes — APIs, conventions, and file structure may all differ from your training data.
> - Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.
> - Heed deprecation notices.
> - If fixing slow client-side navigations, Suspense alone is not enough. You must also export `unstable_instant` from the route. (Ref: `docs/01-app/02-guides/instant-navigation.mdx`)

## 📁 Key Directories
- `app/`: Contains the App Router segments, layouts, and global styles.
- `public/`: Static assets.
- `node_modules/next/dist/docs/`: Local Next.js documentation for this specific version.

## ⌨️ Development Commands
- `bun dev`: Start development server.
- `bun build`: Build for production.
- `bun start`: Start production server.
- `bun lint`: Run ESLint.

## 🎨 Design Philosophy
- Use **Tailwind CSS 4** for styling.
- Prioritize a **Mobile-first UI** approach for all designs.
- Prioritize **modern aesthetics**, vibrant colors, and smooth animations as per Antigravity system instructions.
- Ensure **responsiveness** and **SEO** best practices for all pages.

## 📝 Best Practices
- Use **TypeScript** for all new files.
- Follow **App Router** conventions (Server Components by default).
- When in doubt about Next.js 16+ features, consult the local docs in `node_modules/next/dist/docs/`.

## 🌳 Git Workflow
- Work on the `main` branch unless a separate feature branch is necessary for larger refactors.
- Ensure all tests pass before making a commit.

## 💬 Commit Message Format
Follow the **Conventional Commits** specification:
- `<type>(<scope>): <short summary>`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- Example: `feat(ui): add invitation card component`
