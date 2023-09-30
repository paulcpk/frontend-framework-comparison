import { test, expect } from '@playwright/test'

const SEARCH_VALUE = 'pikachu';

test('should be able to search/filter', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // Put search value into input
  await page.locator('#search-input').fill(SEARCH_VALUE);
  // Find the first tile element on the page and click it
  await page.locator('div.tile').first().click();
  // Expect page to be detail page
  await expect(page).toHaveURL(/.*\/detail/);
  // Expect page headline to contain same search value
  await expect(page.locator('h3')).toContainText(SEARCH_VALUE)
})

