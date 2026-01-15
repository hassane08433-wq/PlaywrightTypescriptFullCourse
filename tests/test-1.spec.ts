import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.goto('https://www.youtube.com/@testerstalk');
  await page.locator('#page-header').getByText('Testers Talk', { exact: true }).click();
  await page.locator('#page-header').getByText('Testers Talk', { exact: true }).click();
  await page.locator('#page-header').getByText('Testers Talk', { exact: true }).click();
  await page.locator('#page-header').getByText('Testers Talk', { exact: true }).click();
  await page.getByRole('link', { name: '#1 Playwright Automation Using TypeScript Full Course 2025 | Playwright TypeScript Beginner Tutorial', exact: true }).click();
  await page.getByRole('link', { name: '#1 Playwright Automation Using TypeScript Full Course 2025 | Playwright TypeScript Beginner Tutorial', exact: true }).click();
});