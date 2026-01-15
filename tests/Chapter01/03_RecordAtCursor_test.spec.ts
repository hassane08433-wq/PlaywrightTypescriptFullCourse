// import playwright module
import { test, expect } from '@playwright/test';

//write a test
test('Record at cursor Test', async ({ page }) => {

//goto url
await page.goto('https://github.com/');
  
//click signin
await page.getByRole('link', { name: 'Sign in' }).click();
  
//enter username & password
await page.getByRole('textbox', { name: 'Username or email address' }).fill('testerstalk');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('tester123');

  //enter sign in
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  

//   await page.locator('body').click();
//   await expect(page.getByRole('link', { name: 'Create an account' })).toBeVisible();
  
});
