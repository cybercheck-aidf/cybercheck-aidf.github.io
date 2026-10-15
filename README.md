# CyberCheck

Single-page website for [cybercheck.aidf.sg](https://cybercheck.aidf.sg), built
with Docusaurus and TypeScript. It links visitors to the CyberCheck platform at
[cybercheck.ncl.sg](https://cybercheck.ncl.sg/).

## Local development

Requires Node.js 20 or newer and npm.

```sh
npm ci
npm start
```

Open http://localhost:3000. Edit the section components in
`src/components/landing/` or structured content in `src/data/landing.ts`.
The development server updates the page as you save changes.

## Checks and production build

```sh
npm run typecheck
npm run build
npm run serve
```

The production build is written to `build/`, ready for static hosting. Configure
the host to serve that directory. Production builds default to
`https://cybercheck-aidf.github.io/`; the development server uses `/`. Set `DEPLOYMENT_URL` to override the canonical URL
and project base path; the GitHub Pages workflow supplies this automatically.

## Project structure

- `src/pages/index.tsx`: section composition and shared audience selection.
- `src/components/landing/`: page sections, layout, metadata and shared controls.
- `src/data/landing.ts`: typed audience routes, workflow stages, FAQs and links.
- `docusaurus.config.ts`: site settings, navigation, and theme.
- `src/css/custom.css`: theme overrides.

Docusaurus runs as its own React framework. Documentation and blog features are
disabled for this single-page site. Next.js is not required. If this repository
becomes an application with authentication,
server-side data, or assessment workflows, reconsider the application framework
before adding those features.

## Landing page content

The page includes an interactive five-stage workflow, SME/technology partner
participation routes, the supplied platform walkthrough, initiative overview,
FAQs, and links to the waitlist, LinkedIn page and live platform.

- Edit `steps`, `audiences` and `faqs` in `src/data/landing.ts` for structured content.
- Update `WAITLIST`, `PLATFORM` and `LINKEDIN` in that file to change destinations.
- Edit a matching `*Section.tsx` component for section-specific copy or markup.
- `static/media/` contains the supplied demo video and still frames extracted from it.
- The partnership link uses the initiative's published contact, `aidf@nus.edu.sg`.
- Fonts load from Google Fonts, with local sans-serif fallbacks.

The visual references are CRADLE (clear hierarchy and numbered sections) and
NUS-AIDF FinTutor (guided platform tour and audience-specific participation).
The page uses original styling and copy rather than copying reference content.

Content is based on the supplied Cyber Resilience Initiative, platform demo and
onboarding notes. The growth playbook and LinkedIn plan inform audience and
conversion structure. Internal plans, named prospective partners, pilot targets,
commercial proposals and unverified statistics are not published. Preview
stills are labelled as illustrations from the supplied walkthrough.

This repository produces a static build. The GitHub Pages workflow can publish
it automatically after the one-time setup below.

For the site's audience, HCI decisions, marketing rules and validation checklist,
see [CONTRIBUTING.md](CONTRIBUTING.md).

## Component ownership

Use React composition and typed props for the landing page. The route component
orders the sections and shares the selected audience between the hero partner
link and participation tabs. `SiteHeader` owns menu state, `WorkflowSection` owns
workflow selection, `WorkflowImage` owns image recovery, and `DemoSection` owns
video playback/recovery. `SectionTabs` shares keyboard and ARIA behaviour;
numbering and mobile orientation are explicit props. Presentational sections do
not depend on playback or menu state. Keep section IDs stable for incoming links
and accessible relationships. Shared CSS remains in `src/css/custom.css`.

The hero uses `ExposureDiagram.tsx` and the editable vector asset
`static/media/cyber-exposure-map.svg`. It is a hypothetical architecture diagram,
separate from the demonstration stills used in the workflow and video poster.

The header provides light/dark switching through `ThemeToggle.tsx`. Docusaurus
manages system preference and persists the selected theme; custom dark surfaces
and colour overrides live in `src/css/custom.css`.

## Automatic GitHub Pages deployment

The workflow is `.github/workflows/deploy-pages.yml`. A push to `main` installs
locked dependencies with `npm ci`, checks TypeScript, builds Docusaurus, uploads
`build/` and deploys it to the `github-pages` environment. A failed build cannot
start deployment. It also supports manual runs from GitHub Actions.

One-time setup:

1. Open https://github.com/cybercheck-aidf/cybercheck-aidf.github.io/settings/pages.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Commit and push the website source, package lockfile and workflow to `main`.
4. Open the repository's **Actions** tab and watch **Build and deploy GitHub Pages**.
   The deployment job and Pages settings show the actual published URL.

Without a custom domain, the expected address is
https://cybercheck-aidf.github.io/. The workflow reads the configured
Pages URL, so it also handles a custom domain configured in Pages settings.
The repository name alone does not configure `cybercheck.aidf.sg` as a domain.
Using that domain additionally requires control of its DNS, the matching GitHub
Pages custom-domain setting and HTTPS configuration.

No personal access token, gh-pages branch or manually committed build directory
is needed for this workflow. GitHub's built-in token has read-only source access;
only the deployment job receives Pages write and OIDC permissions. Repository
and environment policies can still require deployment approval. Pages must be
available for the repository's visibility and GitHub plan.

To check the project-path build locally:

```sh
DEPLOYMENT_URL=https://cybercheck-aidf.github.io/ npm run build
npm run serve
```

Open the project path printed by the server. For a root-path production preview,
build with `DEPLOYMENT_URL=http://localhost:3000/ npm run build`, then serve it.

References: [GitHub custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
and [Docusaurus deployment](https://docusaurus.io/docs/deployment).
