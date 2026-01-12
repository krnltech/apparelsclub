# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 e-commerce application for ApparelsClub, a school uniform retailer. The app uses React 19, TypeScript, Tailwind CSS v4, and shadcn/ui components with the "new-york" style variant.

## Development Commands

```bash
# Development
npm run dev          # Start Next.js dev server (default: http://localhost:3000)

# Build & Production
npm run build        # Build for production
npm start           # Start production server

# Linting
npm run lint        # Run ESLint
```

## Docker Deployment

```bash
# Build and run with Docker Compose
docker compose up --build

# The app will be available at http://localhost:3000
```

**Important Docker Notes:**
- The Dockerfile uses a multi-stage build with Node.js 20 Alpine
- Uses `--legacy-peer-deps` flag to resolve React 19 / vaul peer dependency conflicts
- The `lib` folder is explicitly copied to the production image as it contains runtime data (products.ts)
- Build configuration in `next.config.mjs` has `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`

## Architecture

### App Router Structure
- Uses Next.js App Router (app directory)
- Server components by default; client components marked with `"use client"`
- Routes:
  - `/` - Homepage with hero, categories, bestsellers, features sections
  - `/shop` - Product catalog with category filtering
  - `/contact` - Contact form and info

### Component Organization
- `app/` - Next.js pages and layouts
- `components/` - Page-specific components (header, footer, hero, etc.)
- `components/ui/` - shadcn/ui reusable components (57+ components)
- `lib/` - Utilities and data
  - `lib/utils.ts` - Contains `cn()` helper for className merging
  - `lib/products.ts` - Product data and helper functions
- `hooks/` - Custom React hooks (use-mobile, use-toast)

### Styling
- Tailwind CSS v4 with PostCSS
- CSS variables for theming defined in `app/globals.css`
- Uses `cn()` utility from `lib/utils.ts` for conditional class merging
- shadcn/ui configured with:
  - Base color: neutral
  - CSS variables enabled
  - Icon library: lucide-react

### Path Aliases
Configured in `tsconfig.json`:
- `@/*` maps to root directory
- Allows imports like `@/components/header`, `@/lib/utils`, `@/hooks/use-toast`

### Product Data
Products are stored in `lib/products.ts` as static data:
- `uniformData` - Array of categories with product items
- `getSampleProducts(count)` - Get first N products across all categories
- `getProductsByCategory(name)` - Get products for specific category

Product structure:
```typescript
{
  id: string,
  product_name: string,
  price: string,  // Formatted as "£XX.XX"
  image_url: string,  // Stored in /public/uniform/{category}/
  rating: number,
  reviews: number
}
```

### Key Technologies
- **Form Handling**: react-hook-form + @hookform/resolvers + zod for validation
- **UI Components**: Radix UI primitives (27+ packages)
- **Styling**: Tailwind CSS v4, clsx, tailwind-merge, class-variance-authority
- **Icons**: lucide-react
- **Analytics**: @vercel/analytics
- **Theming**: next-themes for dark mode support
- **Carousels**: embla-carousel-react

## Component Patterns

### Page Structure
Most pages follow this pattern:
```tsx
import Header from "@/components/header"
import Footer from "@/components/footer"
// ... other imports

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Page content */}
      <Footer />
    </main>
  )
}
```

### Client State Management
- Uses React useState for local component state
- No global state management library
- Shop page maintains category selection and cart count locally

### Image Handling
- Images are unoptimized (see `next.config.mjs`)
- Product images stored in `/public/uniform/{category}/`
- Uses standard `<img>` tags rather than Next.js Image component

## TypeScript Configuration
- Strict mode enabled
- Module resolution: bundler
- Target: ES6
- JSX: react-jsx (React 19 automatic runtime)
- **Note**: Build errors are ignored (`ignoreBuildErrors: true`)

## Important Notes

1. **Peer Dependencies**: The project uses `--legacy-peer-deps` to handle React 19 compatibility issues with some dependencies (notably vaul)

2. **Package Manager**: Project has both `bun.lock` and `pnpm-lock.yaml`, but npm commands are used in scripts and Dockerfile

3. **Vercel Analytics**: Integrated in root layout for production analytics

4. **Font Setup**: Uses Geist and Geist Mono fonts from `next/font/google` (variables defined but not applied to body className)

5. **Runtime Data**: The `lib` folder contains data (products.ts) that's imported at runtime, not just build time, so it must be included in Docker production image
