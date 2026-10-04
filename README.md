# Larry Guerra Portfolio

Personal portfolio site for Larry Guerra, full stack software engineer.

## Stack

* Next.js (static export) with TypeScript
* Tailwind CSS
* Playwright end to end tests, including automated WCAG accessibility checks with axe
* GitHub Actions runs type checks, the build, and the tests on every push and pull request
* Netlify deploys the `out` folder on every push to `main`

## Run it locally

```bash
npm install
npm run dev        # development server at http://localhost:3000
```

## Test it

```bash
npm run build
npx playwright install chromium
npm test           # serves the static build and runs the suite on desktop and mobile
```

## Edit content

All copy lives in `content.ts`. Layout lives in `app/page.tsx`.
