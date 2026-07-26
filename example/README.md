# Tech Radar Demo

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Deploy](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Workers-F38020?logo=cloudflare&logoColor=white)](https://demo.techradar.irsigler.dev)

A demo deployment of [@dirsigler/astro-techradar](https://github.com/dirsigler/techradar) — an interactive technology radar built with Astro.

**[View Live Demo](https://demo.techradar.irsigler.dev)**

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to see the radar.

## Adding Technologies

Create a Markdown file in the appropriate segment directory under `segments/`:

```text
segments/
├── cloud/
│   ├── index.md          # Segment metadata (title, color, order)
│   ├── kubernetes.md
│   └── terraform.md
├── frameworks/
│   ├── index.md
│   ├── astro.md
│   └── react.md
└── ...
```

Each technology file uses this frontmatter:

```markdown
---
title: Kubernetes
ring: adopt
moved: 0
---

Your description in Markdown.
```

## Configuration

All configuration is in [`astro.config.mjs`](astro.config.mjs) via the `techradar()` integration. See the [@dirsigler/astro-techradar docs](https://github.com/dirsigler/techradar) for all available options.

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview the production build locally |

## Deploy

The radar builds to fully static HTML. This demo is deployed on Cloudflare Workers via [`wrangler.json`](wrangler.json).

| Platform               | Setup                                                        |
| :--------------------- | :----------------------------------------------------------- |
| **Cloudflare Workers** | Connect repo, build command `npm run build`, output `dist/`  |
| **Netlify / Vercel**   | Connect repo, build command `npm run build`, publish `dist/` |
| **GitHub Pages**       | Use `actions/upload-pages-artifact` with `path: dist/`       |

## License

[MIT](https://github.com/dirsigler/techradar/blob/main/LICENSE) — Dennis Irsigler
