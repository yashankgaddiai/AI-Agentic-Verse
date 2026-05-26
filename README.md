# AI Agentic Verse

React, TypeScript, Vite, and Express application for AI Agentic Verse.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and set the required values.
3. Start the Express + Vite development server:
   ```bash
   npm run dev
   ```

## Production Build

Build the optimized client and bundled Express server:

```bash
npm run build
```

This creates:

- `dist/index.html`
- `dist/assets/*` compiled Vite bundles
- `server.cjs` bundled Express production server

Production must serve `dist/index.html`, not the repository root `index.html`. The root HTML is Vite's development entry and intentionally references `/src/main.tsx`; the production HTML generated in `dist/` references compiled `/assets/*.js` files.

## Production Start

```bash
npm start
```

The production server:

- serves static assets from `dist/`
- sends SPA routes to `dist/index.html`
- returns 404 for raw `/src/*.ts` and `/src/*.tsx` requests
- serves JavaScript modules with `application/javascript`
- uses `process.env.PORT` when provided by the host

## Hostinger Node.js Deployment

Use Node.js hosting with these settings:

- Install command: `npm ci`
- Build command: `npm run build`
- Startup file / command: `server.cjs` or `npm start`
- Public assets directory: `dist`

Do not upload or configure the root `index.html` as the production document root. Deploy the built `dist/` directory and `server.cjs` together.

## Vercel Deployment

Vercel is configured with `vercel.json`:

- build command: `npm run build`
- output directory: `dist`
- API routes served from `api/`
- SPA fallback to `/index.html`
- immutable caching for compiled `/assets/*`

## Useful Checks

```bash
npm run lint
npm audit
npm run build
npm start
```
