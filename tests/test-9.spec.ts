import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'See an example alert', exact: true }).click();
});