import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...await page.goto('https://www.youtube.com/results?search_query=playwrite+by+testers+talk');
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
});