import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sleek and Intuitive Korean Dictionary For Korean Learners./);
});

test('has description meta tag', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Search for Korean and English words online with Sajeon, a sleek, responsive, and beautiful dictionary.');
});

test('toggles dark theme when clicked', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const themeButton = page.getByText('Toggle theme');
  await themeButton.click();
  const menuButton = page.getByText('Dark');
  await menuButton.click();
  const htmlTag = page.locator('html');
  await expect(htmlTag).toHaveClass('dark')
});

test('toggles light theme when clicked', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const themeButton = page.getByText('Toggle theme');
  await themeButton.click();
  const menuButton = page.getByText('Light');
  await menuButton.click();
  const htmlTag = page.locator('html');
  await expect(htmlTag).toHaveClass('light')
});

