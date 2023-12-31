import { test, expect } from '@playwright/test';

test('should navigate to about page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const AboutLink = page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL('http://localhost:3000/about')
});

test('should navigate to how to page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const AboutLink = page.getByRole('link', {name: 'How To'}).click();
  await expect(page).toHaveURL('http://localhost:3000/how-to')
});


test('should navigate home', async ({ page }) => {
  await page.goto('http://localhost:3000/about');
  const AboutLink = page.getByRole('link', { name: '사전'}).click();
  await expect(page).toHaveURL('http://localhost:3000/')
});
