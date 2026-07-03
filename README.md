# Afsana Bhuiyan — Portfolio

Built with React + TypeScript + Vite.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Nav.tsx / Nav.module.css
│   ├── Hero.tsx / Hero.module.css
│   ├── About.tsx / About.module.css
│   ├── Experience.tsx / Experience.module.css
│   ├── Projects.tsx / Projects.module.css
│   ├── Skills.tsx / Skills.module.css
│   ├── Community.tsx / Community.module.css
│   └── Footer.tsx / Footer.module.css
├── hooks/
│   └── useReveal.ts
├── data.ts          ← All content lives here
├── App.tsx
├── main.tsx
└── index.css        ← Design tokens (colors, fonts)
```

## Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
--accent:   #C1522A;   /* terracotta — primary */
--accent2:  #D4943A;   /* amber — secondary */
--bg:       #FAF7F4;   /* warm off-white */
```

### Content
All portfolio content (experience, projects, skills, organizations) lives in `src/data.ts`.
Edit that file to update anything without touching component code.


### Headshot + Org logos
Place images in `public/images/`:
- `headshot.jpg`
- `gwc.png`, `COOP.jpg`, `codePath.jpg`, `opal.png`, `oppnet.jpg`, `aot.jpeg`

## Deployment

Works with GitHub Pages, Vercel, or Netlify out of the box.

For GitHub Pages, add to `vite.config.ts`:
```ts
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```
