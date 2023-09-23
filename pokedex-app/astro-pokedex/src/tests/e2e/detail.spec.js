import { test, expect } from '@playwright/test'

test('should navigate to the detail page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // Find the first tile element on the page and click it
  await page.locator('div.tile').first().click();
  // The new url should be "/detail" (baseURL is used there)
  await expect(page).toHaveURL(/.*\/detail/);
  // The new page should contain an image and a table
  await expect(page.locator('.image img')).toBeVisible();
  await expect(page.locator('.content table')).toBeVisible();
})

