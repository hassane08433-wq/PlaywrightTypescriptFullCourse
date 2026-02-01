import { test, expect } from '@playwright/test';

test('My First Playwright Test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

// await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
// await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('tab', { name: 'Playlists' }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await page.getByRole('button', { name: 'Skip', exact: true }).click();
 await page.getByRole('button', { name: 'No thanks' }).click();
  await page.locator('#movie_player video').click();

});