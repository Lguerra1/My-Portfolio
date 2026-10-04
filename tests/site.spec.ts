import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  { path: "/", h1: /lending and payments software/ },
  { path: "/work", h1: "Production work in regulated FinTech" },
  { path: "/projects", h1: "Things I've built on my own" },
  { path: "/experience", h1: "Where I've worked" },
  { path: "/skills", h1: "What I work with" },
  { path: "/contact", h1: "Let's talk" },
];

for (const p of pages) {
  test.describe(`page ${p.path}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(p.path);
    });

    test("has exactly one main heading", async ({ page }) => {
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      await expect(page.getByRole("heading", { level: 1 })).toContainText(p.h1);
    });

    test("does not scroll sideways", async ({ page }) => {
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });

    test("external links open safely in a new tab", async ({ page }) => {
      const external = page.locator('a[href^="http"]');
      for (let i = 0; i < (await external.count()); i++) {
        await expect(external.nth(i)).toHaveAttribute("target", "_blank");
        await expect(external.nth(i)).toHaveAttribute("rel", /noopener/);
      }
    });

    test("has no WCAG A or AA accessibility violations", async ({ page }) => {
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    });
  });
}

test("nav moves between pages and marks the current one", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Main" });
  for (const label of ["Work", "Projects", "Experience", "Skills", "Contact"]) {
    await nav.getByRole("link", { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/${label.toLowerCase()}/?$`));
    await expect(nav.getByRole("link", { name: label, exact: true })).toHaveAttribute("aria-current", "page");
  }
});

test("work page lists all six case studies", async ({ page }) => {
  await page.goto("/work");
  await expect(page.locator("article")).toHaveCount(6);
});

test("unknown pages show the 404 page", async ({ page }) => {
  await page.goto("/does-not-exist");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("doesn't exist");
});
