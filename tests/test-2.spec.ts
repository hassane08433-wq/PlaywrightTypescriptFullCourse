import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('tester stalk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).press('ControlOrMeta+a');
  await page.getByRole('combobox', { name: 'Search' }).fill('');
  await page.getByRole('combobox', { name: 'Search' }).press('Tab');
  await page.getByRole('button', { name: 'Search', exact: true }).press('Enter');
});