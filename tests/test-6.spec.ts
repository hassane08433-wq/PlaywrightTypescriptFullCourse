import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by Testers Talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: '#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial 6 hours,' }).click();
  await page.getByTitle('#1 Playwright Tutorial Full').click();
  await page.getByRole('button', { name: 'Skip', exact: true }).click();
  await page.getByRole('button', { name: 'Pause keyboard shortcut k' }).click();
});