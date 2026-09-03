# Emerald School — Website

Standalone production build of the **Emerald School** (Thecho, Lalitpur) website.
Everything is pre-built: all JS/CSS is inlined into `index.html`, and the school
photos live in `schools/emerald/`. No build step is needed to host it.

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npx vercel login
cd "emerald school"
npx vercel --prod
```
When prompted, accept the defaults (it detects a static site). You'll get a live
`https://…vercel.app` link.

### Option B — Drag & drop (no account setup needed beyond login)
1. Go to https://vercel.com/new
2. Drag this entire folder onto the page
3. You get the live link immediately

### Option C — Via GitHub
Push this folder to a GitHub repo, then import it at https://vercel.com/new.
Set **Framework Preset: Other** (no build command, output directory `./`).

## Notes
- Routing is hash-based (`/#/about`, `/#/gallery`, …), so deep links always load
  `index.html`. The included `vercel.json` rewrites unknown paths to `index.html`
  as an extra safety net.
- This demo build uses the bundled school data (`VITE_DISABLE_BACKEND=true`), so
  no backend is required. The contact/inquiry form is not wired to a server.
- To update content or photos: edit the main project
  (`src/data/schoolData.ts`, `public/schools/emerald/`), rebuild with
  `VITE_SCHOOL_ID=emerald npm run build`, and replace this folder's contents
  (keep `vercel.json` and this README).
