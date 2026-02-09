import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByTitle('#1 Playwright Tutorial Full').click();
  await page.locator('[id="skip-button:2"]').click();
  await page.getByRole('button', { name: 'No thanks' }).click();
});