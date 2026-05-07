# Wanis

Modern Next.js foundation for future landing pages.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- ESLint

## Project Structure

- `src/app` - App Router routes, layouts, and global app files.
- `src/components` - Reusable UI and application components.
- `src/components/ui` - shadcn/ui primitives.
- `src/sections` - Landing page sections for future pages.
- `src/lib` - Shared utilities and helpers.
- `src/hooks` - Reusable React hooks.
- `src/styles` - Shared style notes and future style modules.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## shadcn/ui

Components are configured in `components.json` and use the `@/components`, `@/components/ui`, `@/lib`, and `@/hooks` aliases.
