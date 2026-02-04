import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
});