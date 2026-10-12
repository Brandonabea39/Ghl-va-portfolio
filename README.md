# GHL Virtual Assistant Portfolio

A premium personal portfolio for a GoHighLevel Virtual Assistant & automation
specialist. Built with Next.js (App Router), TypeScript, Tailwind CSS, and
lucide-react. No database or CMS — all content lives in typed data files.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node.js 18.18+ (20+ recommended).

## Project structure

```
app/                  Pages (App Router)
  page.tsx            Homepage
  about/ services/ projects/ media/ contact/
  projects/[slug]/    Case-study detail pages (statically generated)
  sitemap.ts robots.ts icon.svg
components/           Reusable UI (Navbar, ProjectCard, Lightbox, VideoEmbed, …)
lib/
  site.ts             ← Your name, role, contact details, deployed URL
  projects.ts         ← The project/case-study data store
  services.ts         ← The service catalog
public/
  images/projects/    Project screenshots (one subfolder per project)
  images/profile/     Profile photo
  images/thumbnails/  Optional card thumbnails
  videos/             Locally hosted videos (prefer Loom/YouTube URLs instead)
```

## Managing content

### 1. Add a new project

Append an object to `projects` in `lib/projects.ts`. Minimal example:

```ts
{
  id: "my-new-project",
  slug: "my-new-project",            // becomes /projects/my-new-project
  title: "My New Project",
  category: "Workflows & Automation", // one of the Category values
  summary: "One or two sentences for the card.",
  tools: ["GHL Workflows", "Pipelines"],
  screenshots: [],
  videos: [],
  published: false,                   // draft until you're ready
}
```

Optional fields: `context`, `problem`, `objectives`, `role`,
`implementation` (numbered steps), `workflow` (rendered as a step sequence),
`liveUrl`, `results.measured` / `results.intended`, `lessons`,
`featured` (shows on the homepage), `illustrative` (adds the
"Illustrative example" badge — use it for representative patterns that are
not a specific named client engagement).

### 2. Add screenshots

1. Put the image in `public/images/projects/<slug>/`, e.g.
   `public/images/projects/restaurant-website/home.png`.
2. Reference it in the project's `screenshots` array:

```ts
screenshots: [
  {
    src: "/images/projects/restaurant-website/home.png",
    alt: "Restaurant website homepage with hero and booking CTA",
    caption: "Homepage — hero and booking CTA",
  },
],
```

The first screenshot becomes the card thumbnail. Screenshots open in a
lightbox and also appear on the Media page automatically.

### 3. Add a Loom (or YouTube) video

```ts
videos: [
  { url: "https://www.loom.com/share/<id>", title: "Workflow walkthrough" },
],
```

Loom and YouTube URLs embed responsively; any other URL renders as a labeled
external link (never a broken player).

### 4. Update project details / change category

Edit the project object in `lib/projects.ts`. Categories must be one of the
values in the `categories` array in that file; add a new category there first
if needed (the filter buttons update automatically).

### 5. Publish or hide a project

Flip `published: true | false`. Unpublished projects disappear from every
list, the sitemap, and static generation.

### 6. Personal details

Everything personal is in `lib/site.ts`: name, role, email, LinkedIn,
calendar link, and the deployed `url` (used for sitemap/Open Graph). Empty
fields are hidden on the site, never faked.

## Contact

The contact page offers email, LinkedIn, and a Google Calendar booking link
(all set in `lib/site.ts`) — there is intentionally no contact form. If you
want one later, wire a provider like [formspree.io](https://formspree.io)
into a client component and only render the form when its endpoint env var
is set, so an unconfigured form never appears functional.

## Deploying (GitHub + Vercel)

1. Create a GitHub repository (e.g. `ghl-va-portfolio`).
2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/ghl-va-portfolio.git
   git push -u origin main
   ```

3. In [vercel.com](https://vercel.com): **Add New → Project → Import** the
   repository. Vercel auto-detects Next.js — no settings needed.
4. Deploy. Every push to `main` deploys to production automatically; every
   pull request gets its own preview URL.
5. After the first deploy, set `url` in `lib/site.ts` to the real domain and
   push again (fixes sitemap/OG URLs).

## Honesty guardrails (by design)

- `illustrative: true` projects are badged on cards and case-study pages.
- `results.measured` and `results.intended` render in separate, labeled
  sections — design goals are never presented as client metrics.
- Missing media renders as an explicit "being prepared" state, not stock
  imagery.
- Empty contact fields are hidden rather than filled with placeholders.

## Still needed from the site owner

- [ ] Profile photo → `public/images/profile/`.
- [ ] Screenshots per project → `public/images/projects/<slug>/`.
- [ ] Loom walkthrough URLs for the workflow/CRM/integration projects.
- [ ] Final domain → `url` in `lib/site.ts`.
