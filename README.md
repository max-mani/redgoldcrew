# RedGoldCrew

Marketing site for [RedGoldCrew](https://github.com/max-mani/redgoldcrew) — home page and Aayiram product page.

## Local development

```bash
npm install
npm run dev
```

## Deploy on Netlify

1. Push this repo to GitHub.
2. In [Netlify](https://app.netlify.com), **Add new site** → **Import an existing project** → choose this repo.
3. Netlify reads `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Client-side routes (`/`, `/aayiram`) work via the SPA redirect in `netlify.toml`.
