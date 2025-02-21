import { test, expect } from "@playwright/test";

test("should navigate to about page", async ({ page }) => {
  await page.goto("http://localhost:8080");

  // Wait for the navigation to complete
  await page.getByRole("link", { name: "About" }).click();

  await expect(page).toHaveURL("http://localhost:8080/about");
});

test("should navigate home", async ({ page }) => {
  await page.goto("http://localhost:8080/about");

  // Wait for the navigation to complete
  await page.getByRole("link", { name: "사전" }).click();

  await expect(page).toHaveURL("http://localhost:8080/");
});
