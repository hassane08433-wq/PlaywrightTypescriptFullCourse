import { test, expect } from '@playwright/test';

test('Test1', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  // await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
  // await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');

});

test('Test2', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  // await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
  // await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  expect(true).toBe(true);
});

test('Test3', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  // await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
  // await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  expect(true).toBe(true);


});