import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
});