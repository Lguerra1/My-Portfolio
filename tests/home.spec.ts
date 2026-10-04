import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("shows the name and headline", async ({ page }) => {
  await expect(page).toHaveTitle(/Larry Guerra/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("lending and payments software");
});

test("every nav link points to a section on the page", async ({ page }) => {
  const links = page.getByRole("navigation", { name: "Main" }).getByRole("link");
  const count = await links.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const href = await links.nth(i).getAttribute("href");
    expect(href).toMatch(/^#/);
    await expect(page.locator(href!)).toHaveCount(1);
  }
});

test("shows all case studies and the featured project", async ({ page }) => {
  await expect(page.locator("#work article")).toHaveCount(6);
  await expect(page.getByRole("heading", { name: "InvoiceDesk" })).toBeVisible();
});

test("external links open safely in a new tab", async ({ page }) => {
  const external = page.locator('a[href^="http"]');
  const count = await external.count();
  for (let i = 0; i < count; i++) {
    await expect(external.nth(i)).toHaveAttribute("target", "_blank");
    await expect(external.nth(i)).toHaveAttribute("rel", /noopener/);
  }
});

test("page does not scroll sideways", async ({ page }) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(0);
});

test("has no WCAG A or AA accessibility violations", async ({ page }) => {
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
});
