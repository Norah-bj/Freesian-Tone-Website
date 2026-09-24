# Freesian-Tone-Website

Contemporary Rwandan slow luxury and adaptable fashion atelier website built with React + Vite. Handcrafted in Kigali with zero waste.

## Deploy free with Cloudflare Pages

Cloudflare can deploy this Vite site from the GitHub repository and publish each push to the production branch automatically. React Router's client-side routes use Cloudflare's single-page application fallback; do not add a catch-all `_redirects` rule to `/index.html`, because Cloudflare detects that as a redirect loop.

1. Push the finished branch to GitHub and merge it into `main` when you are ready for it to be public.
2. Create or sign in to a free Cloudflare account, open **Workers & Pages**, choose **Create application** → **Pages** → **Connect to Git**.
3. Authorize GitHub and select `Norah-bj/Freesian-Tone-Website`.
4. Set the production branch to `main`, framework preset to **Vite**, build command to `npm run build`, and build output directory to `dist`. Leave the root directory blank (the repository root).
5. Select **Save and Deploy**. Cloudflare will provide a `*.pages.dev` address; later pushes to `main` trigger production deployments automatically.
6. Open the deployed home page and directly load `/collections`, `/multiway`, and `/our-story` to confirm client-side routes work. A custom domain is optional and is usually purchased separately.

Build locally before deployment with `npm install` and `npm run build`. Cloudflare Pages Free currently allows 500 deployments per month and 20,000 files per site; see the [Pages limits](https://developers.cloudflare.com/pages/platform/limits/) for current limits.

## Overview

Freesia Tone is an editorial, made-to-order fashion platform exploring modular silhouettes, profound adaptability, and Rwandan craftsmanship.

### Key Features

- **Multiway Transformation Studio**: Interactive 5-way silhouette dressing experience.
- **Bespoke Made-to-Order System**: Custom sizing, direct fabric selectors, and atelier inquiry workflows.
- **Curated Collections & Editorial Visual Archive**: Lookbook plates, fluid styling galleries, and brand genesis story.
- **Atelier Direct Dialogue**: Direct Kigali pattern-maker correspondence and consultations.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Vanilla CSS Design System with CSS Tokens & Variables
- **Animations**: Framer Motion
- **Routing**: React Router DOM (v6)

## Development Setup

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```
